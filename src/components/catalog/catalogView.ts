import { Products } from './../../data/products';
import { IQueryParams } from '../../utils/getQueryParams';
import { catalogHtml } from './templateCatalog';
import { headerHtml } from '../../templates/header';
import { footerHtml } from '../../templates/footer';
import { getItemCountInCart } from '../../utils/getItemCountInCart';
import { products } from '../../data/products';
import appView from '../appView';
import { CartItem } from '../cart/cartModel';
import { IFilters } from './catalogModel';
import { MinMaxObj } from './catalogModel';
import { debounceSetFilter, debounceCallback } from '../../utils/debounce';

interface IMinMaxInputs {
  min: HTMLInputElement;
  max: HTMLInputElement;
}

enum DisplayMode {
  list = 'list',
  grid = 'grid',
}

class CatalogView {
  app: HTMLElement | null;
  appView: appView;
  onRangeInputChange: (key: string, value: string) => void;
  setURL: (k: string, v: string | null) => void;
  getSuggestedFilteredProducts: (value: string) => Products;

  constructor() {
    this.app = document.querySelector('#app') as HTMLElement;
    this.appView = new appView();
    this.setURL = this.appView.setURL;
    this.onRangeInputChange = () => undefined;
    this.getSuggestedFilteredProducts = (value: string) => products;
  }

  bindRangeHandlerFunc(callback: (key: string, value: string) => void) {
    this.onRangeInputChange = callback;
  }

  bindGetSuggestedProducts(callback: (value: string) => Products) {
    this.getSuggestedFilteredProducts = callback;
  }

  renderUI(products: Products, filteredProducts: Products, cart: CartItem[], filterObj: IFilters) {
    if (this.app) {
      this.app.innerHTML = '';
      this.app.insertAdjacentHTML('afterbegin', headerHtml);
      this.app.insertAdjacentHTML('beforeend', catalogHtml);
      this.app.insertAdjacentHTML('beforeend', footerHtml);
    }
    this.renderProducts(filteredProducts, cart);
    this.renderFilters(products, filteredProducts, filterObj);
    this.setSortingState(filterObj);
    this.addFilterByRangeListeners();
    this.addChangeDisplayModeListeners();
    this.changeDisplayMode(filterObj.catalogDisplayMode);
  }
  renderFilters(products: Products, filteredProducts: Products, filterObj: IFilters) {
    const searchBar = document.querySelector('.filters__search') as HTMLInputElement;
    const brandsContainer = document.querySelector('#filter-brands') as HTMLElement;
    const colorsContainer = document.querySelector('#filter-colors') as HTMLElement;
    const categoryContainer = document.querySelector('#filter-category') as HTMLElement;

    //collecting unique values to render checkboxes
    const brandsArray = [...new Set(products.map((item) => item.brand))];
    const colorsArray = [...new Set(products.map((item) => item.color))];
    const categoryArray = [...new Set(products.map((item) => item.class))];

    brandsContainer.innerHTML = `<legend class="filters__legend">Brand</legend> `;
    categoryContainer.innerHTML = `<legend class="filters__legend">Category</legend> `;

    //brands checkboxes render
    for (const el of brandsArray) {
      const brandCheckboxHtml = `
      <label class="checkbox checkbox-category">
      <input class="checkbox__real" type="checkbox" name="${el}" data-filter-brand="${el}" ${
        filterObj.brand.includes(el.toLowerCase()) ? 'checked' : ''
      }>
      <span class="checkbox__fake"></span>
      <span class="checkbox__title"><span>${el}</span> 
        <span class="checkbox__counter" data-counter-brand="${el}"></span>
      </span>
    </label>
    `;
      brandsContainer.insertAdjacentHTML('beforeend', brandCheckboxHtml);
    }
    //category checkboxes render
    for (const el of categoryArray) {
      const categoryCheckboxHtml = `
      <label class="checkbox checkbox-category">
      <input class="checkbox__real" type="checkbox" name="${el}" data-filter-category="${el}" ${
        filterObj.category.includes(el.toLowerCase()) ? 'checked' : ''
      }>
      <span class="checkbox__fake"></span>
      <span class="checkbox__title"><span>${el}</span> 
        <span class="checkbox__counter" data-counter-category="${el}"></span>
      </span>
    </label>
    `;
      categoryContainer.insertAdjacentHTML('beforeend', categoryCheckboxHtml);
    }
    //colors checkboxes render
    colorsContainer.innerHTML = `<legend class="filters__legend">Color</legend>`;
    for (const el of colorsArray) {
      const colorCheckboxHtml = `
    <label class="checkbox">
      <input class="checkbox-color__real" type="checkbox" name="${el}" data-filter-color="${el}" ${
        filterObj.color.includes(el.toLowerCase()) ? 'checked' : ''
      }></input>
      <span class="checkbox-color__fake" style="background: ${el}"></span>
    </label>
    `;
      colorsContainer.insertAdjacentHTML('beforeend', colorCheckboxHtml);
    }
    searchBar.value = filterObj.text;
  }

  updateProductsCount(products: Products) {
    const countContainer = document.querySelector('#products-count');
    const count = products.length;

    if (countContainer) countContainer.innerHTML = count.toString();
  }

  renderProducts(products: Products, cart: Array<CartItem>) {
    const productsContainer = document.querySelector('#products') as HTMLElement;
    productsContainer.classList.remove('no-grid');
    productsContainer.innerHTML = '';
    if (products.length > 0) {
      products.forEach((element) => {
        const productCard = document.createElement('li');
        const itemCountInCart = getItemCountInCart(cart, element.id);

        productCard.classList.add('item', 'catalog__item');
        productCard.innerHTML = `
      <a class="item__link" href="./#product?id=${element.id}">
        <div class="item__image-container">
          <img class="item__image" src="./assets/img/products/p${element.id}/1.webp"></img>
          <div class="item__description specification">
            <span class="specification__item">Brand: ${element.brand}</span>
            <span class="specification__item">Engine: ${element.engine}</span>
            <span class="specification__item">Camera: ${element.camera}</span>
            <span class="specification__item">Color: ${element.color}</span>
            <span class="specification__item">In stock: ${element.stock}</span>
          </div>
        </div>
        <h3 class="item__title">${element.name}</h3>
        <span class="item__price-number">US <span class="item__price-currency">$</span>${element.price}</span>
      </a>
      <div class="item__cart-container" data-cartBtn-id="${element.id}">
      ${this.appView.renderCartBtnContainer(element.id, itemCountInCart)}
      </div>`;
        productsContainer.append(productCard);
      });
    } else {
      productsContainer.innerHTML = '<p class="not-found">No products found </p>';
      productsContainer.classList.add('no-grid');
    }
    this.updateProductsCount(products);
  }

  setSortingState(filterObj: IFilters) {
    const sortSelector = document.querySelector('#sort-selector') as HTMLSelectElement;
    if (sortSelector) sortSelector.value = filterObj.sortType;
  }

  setCategoryCountersState(filteredProducts: Products) {
    const categoryBoxes: NodeListOf<HTMLElement> = document.querySelectorAll('[data-counter-category]');
    const brandBoxes = document.querySelectorAll('[data-counter-brand]');
    categoryBoxes.forEach((element) => {
      const category = element.getAttribute('data-counter-category');
      const counter = filteredProducts.filter((el) => el.class == category).length;
      const total = products.filter((el) => el.class == category).length;
      const parent = element.parentElement;
      element.innerHTML = `(${counter}/${total})`;
      if (counter === 0) {
        parent?.classList.add('checkbox__title--inactive');
      } else parent?.classList.remove('checkbox__title--inactive');
    });
    brandBoxes.forEach((element) => {
      const brand = element.getAttribute('data-counter-brand');
      const counter = filteredProducts.filter((el) => el.brand == brand).length;
      const total = products.filter((el) => el.brand == brand).length;
      const parent = element.parentElement;
      if (counter === 0) {
        parent?.classList.add('checkbox__title--inactive');
      } else parent?.classList.remove('checkbox__title--inactive');
      element.innerHTML = `(${counter}/${total})`;
    });
  }
  addFilterByRangeListeners() {
    const weightMin = document.getElementById('weight-min') as HTMLInputElement;
    const weightMax = document.getElementById('weight-max') as HTMLInputElement;
    const minLabelWeight = document.getElementById('weight-min-value');
    const maxLabelWeight = document.getElementById('weight-max-value');
    const priceMin = document.getElementById('price-min') as HTMLInputElement;
    const priceMax = document.getElementById('price-max') as HTMLInputElement;
    const minLabelPrice = document.getElementById('price-min-value');
    const maxLabelPrice = document.getElementById('price-max-value');
    const sliderTrackWeight = document.querySelectorAll('.range__slider-track')[0] as HTMLElement;
    const sliderTrackPrice = document.querySelectorAll('.range__slider-track')[1] as HTMLElement;
    const setURL = this.setURL;
    const onRangeInputChange = this.onRangeInputChange;
    const debounceRangeInputChange = debounceSetFilter((key: string, value: string) => onRangeInputChange(key, value));

    const priceInputs: IMinMaxInputs = {
      min: priceMin,
      max: priceMax,
    };
    const weightInputs: IMinMaxInputs = {
      min: weightMin,
      max: weightMax,
    };
    weightMin.oninput = () => inputChange('weight', 'min', weightInputs, minLabelWeight);
    weightMax.oninput = () => inputChange('weight', 'max', weightInputs, maxLabelWeight);
    priceMin.oninput = () => inputChange('price', 'min', priceInputs, minLabelPrice);
    priceMax.oninput = () => inputChange('price', 'max', priceInputs, maxLabelPrice);

    function inputChange(inputType: string, triggerType: string, inputs: IMinMaxInputs, label: HTMLElement | null) {
      if (triggerType === 'min') {
        if (parseInt(inputs.max.value) - parseInt(inputs.min.value) <= 0) {
          inputs.min.value = inputs.max.value;
        }
        if (label) label.textContent = Number(inputs.min.value) == Infinity ? '0' : inputs.min.value;
        if (inputType == 'weight') {
          setURL('weightMin', inputs.min.value.toString());
          debounceRangeInputChange('weightMin', inputs.min.value);
        }
        if (inputType == 'price') {
          setURL('priceMin', inputs.min.value.toString());
          debounceRangeInputChange('priceMin', inputs.min.value);
        }
      }
      if (triggerType === 'max') {
        if (parseInt(inputs.max.value) - parseInt(inputs.min.value) <= 0) {
          inputs.max.value = inputs.min.value;
        }
        if (label) label.textContent = Number(inputs.max.value) == Infinity ? '0' : inputs.max.value;
        if (inputType == 'weight') {
          setURL('weightMax', inputs.max.value.toString());
          debounceRangeInputChange('weightMax', inputs.max.value);
        }
        if (inputType == 'price') {
          setURL('priceMax', inputs.max.value.toString());
          debounceRangeInputChange('priceMax', inputs.max.value);
        }
      }
      fillColor(inputType);
    }
    function fillColor(inputType: string) {
      if (inputType === 'weight') {
        const percent1 = ((+weightMin.value - +weightMin.min) / (+weightMin.max - +weightMin.min)) * 100;
        const percent2 = ((+weightMax.value - +weightMin.min) / (+weightMin.max - +weightMin.min)) * 100;
        sliderTrackWeight.style.background = `linear-gradient(to right, #dadae5 ${percent1}%, orange ${percent1}%, orange ${percent2}%, #dadae5 ${percent2}%)`;
      }
      if (inputType === 'price') {
        const percent1 = ((+priceMin.value - +priceMin.min) / (+priceMin.max - +priceMin.min)) * 100;
        const percent2 = ((+priceMax.value - +priceMin.min) / (+priceMin.max - +priceMin.min)) * 100;
        sliderTrackPrice.style.background = `linear-gradient(to right, #dadae5 ${percent1}%, orange ${percent1}%, orange ${percent2}%, #dadae5 ${percent2}%)`;
      }
    }
  }

  setRangeFiltersState(minMaxValues: MinMaxObj, queryParams: IQueryParams, start: boolean | undefined) {
    const weightMin = document.getElementById('weight-min') as HTMLInputElement;
    const weightMax = document.getElementById('weight-max') as HTMLInputElement;
    const priceMin = document.getElementById('price-min') as HTMLInputElement;
    const priceMax = document.getElementById('price-max') as HTMLInputElement;
    const minValueWeight = document.getElementById('weight-min-value');
    const maxValueWeight = document.getElementById('weight-max-value');
    const minValuePrice = document.getElementById('price-min-value');
    const maxValuePrice = document.getElementById('price-max-value');
    const sliderTrackWeight = document.querySelectorAll('.range__slider-track')[0] as HTMLElement;
    const sliderTrackPrice = document.querySelectorAll('.range__slider-track')[1] as HTMLElement;

    // setting min and max values to inputs
    weightMin.min = minMaxValues.minWeight.toString();
    weightMax.min = minMaxValues.minWeight.toString();
    weightMin.max = minMaxValues.maxWeight.toString();
    weightMax.max = minMaxValues.maxWeight.toString();
    priceMin.min = minMaxValues.minPrice.toString();
    priceMax.min = minMaxValues.minPrice.toString();
    priceMin.max = minMaxValues.maxPrice.toString();
    priceMax.max = minMaxValues.maxPrice.toString();

    // on filters changing, setting values to left and right sides of inputs
    // when range inputs are triggered, needUpdate value comes with false, so this script performs only when other filters are triggered
    if (minMaxValues.needUpdate == true) {
      if (start) {
        //queryParams function
        priceMin.value = 'priceMin' in queryParams ? queryParams.priceMin.toString() : minMaxValues.minPrice.toString();
        priceMax.value = 'priceMax' in queryParams ? queryParams.priceMax.toString() : minMaxValues.maxPrice.toString();
        weightMin.value =
          'weightMin' in queryParams ? queryParams.weightMin.toString() : minMaxValues.minWeight.toString();
        weightMax.value =
          'weightMax' in queryParams ? queryParams.weightMax.toString() : minMaxValues.maxWeight.toString();
      } else {
        weightMin.value = minMaxValues.minWeight.toString();
        weightMax.value = minMaxValues.maxWeight.toString();
        priceMin.value = minMaxValues.minPrice.toString();
        priceMax.value = minMaxValues.maxPrice.toString();
      }

      //setting new values to text labels
      if (minValueWeight && maxValueWeight && minValuePrice && maxValuePrice) {
        minValueWeight.innerHTML = minMaxValues.minWeight !== Infinity ? minMaxValues.minWeight.toString() : '0';
        maxValueWeight.innerHTML = minMaxValues.maxWeight !== -Infinity ? minMaxValues.maxWeight.toString() : '0';
        minValuePrice.innerHTML = minMaxValues.minPrice !== Infinity ? minMaxValues.minPrice.toString() : '0';
        maxValuePrice.innerHTML = minMaxValues.maxPrice !== -Infinity ? minMaxValues.maxPrice.toString() : '0';
      }

      const percent1 = ((+weightMin.value - +weightMin.min) / (+weightMin.max - +weightMin.min)) * 100;
      const percent2 = ((+weightMax.value - +weightMin.min) / (+weightMin.max - +weightMin.min)) * 100;
      const percent3 = ((+priceMin.value - +priceMin.min) / (+priceMin.max - +priceMin.min)) * 100;
      const percent4 = ((+priceMax.value - +priceMin.min) / (+priceMin.max - +priceMin.min)) * 100;

      sliderTrackWeight.style.background = `linear-gradient(to right, #dadae5 ${percent1}%, orange ${percent1}%, orange ${percent2}%, #dadae5 ${percent2}%)`;
      sliderTrackPrice.style.background = `linear-gradient(to right, #dadae5 ${percent3}%, orange ${percent3}%, orange ${percent4}%, #dadae5 ${percent4}%)`;
    }
  }

  bindFilterByCategoryListeners(handler: (k: string | null, v: string | null) => void) {
    const appContainer = document.querySelector('#app') as HTMLElement;
    if (appContainer) {
      appContainer.addEventListener('click', (event) => {
        if (event.target instanceof Element && event.target.hasAttribute('data-filter-color')) {
          let color = event.target.getAttribute('data-filter-color');
          if (color) color = color.toLowerCase();
          handler('color', color);
          this.setURL('color', color);
        }
        if (event.target instanceof Element && event.target.hasAttribute('data-filter-brand')) {
          let brand = event.target.getAttribute('data-filter-brand');
          if (brand) brand = brand.toLowerCase();

          handler('brand', brand);
          this.setURL('brand', brand);
        }
        if (event.target instanceof Element && event.target.hasAttribute('data-filter-category')) {
          let category = event.target.getAttribute('data-filter-category');
          if (category) category = category.toLowerCase();

          handler('category', category);
          this.setURL('category', category);
        }
      });
    }
  }
  bindFilterByTextListener(handler: (name: string) => void) {
    const textFilter = document.querySelector('#filter-name') as HTMLInputElement;
    const debounceNameInputChange = debounceSetFilter((key: string, value: string) => handler(value));
    const parent = textFilter.parentElement;
    const value = textFilter.value;
    const debounceRenderSuggestions = debounceCallback((value: string) => this.renderSuggestions(value));

    textFilter.addEventListener('input', (event) => {
      const suggestions = document.querySelector('.suggestions') as HTMLInputElement;

      if (event.target instanceof HTMLInputElement) {
        const searchStr = event.target.value;
        debounceNameInputChange('', searchStr);
        this.setURL('name', searchStr);
        if (parent) {
          debounceRenderSuggestions(searchStr);
        }
      }
    });

    textFilter.addEventListener('focus', (e) => {
      const value = e.target instanceof HTMLInputElement ? e.target.value : '';
      // const target = e.target instanceof HTMLInputElement ? event.target : null;
      if (e.target instanceof HTMLInputElement) {
        e.target.classList.add('filters__search--focused');
      }
      if (parent) {
        this.renderSuggestions(value);
        this.renderBodyShadow();
      }
    });

    textFilter.addEventListener('focusout', (event) => {
      const shadow = document.querySelector('.body-shadow') as HTMLInputElement;
      const suggestions = document.querySelector('.suggestions') as HTMLInputElement;

      if (shadow && suggestions && !event.relatedTarget) {
        suggestions.remove();
        shadow.remove();
        if (event.target instanceof HTMLInputElement) {
          event.target.classList.remove('filters__search--focused');
        }
      }
    });

    textFilter.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        const shadow = document.querySelector('.body-shadow') as HTMLInputElement;
        const suggestions = document.querySelector('.suggestions') as HTMLInputElement;
        if (e.target instanceof HTMLInputElement) handler(e.target.value);
        if (shadow) shadow.remove();
        if (suggestions) suggestions.remove();
        textFilter.blur();
      }
    });
  }

  bindCartActionListeners(
    handleAddNew: (id: number) => void,
    handleIncrease: (id: number) => void,
    handleDecrease: (id: number) => void
  ) {
    const productsContainer = document.querySelector('#products') as HTMLElement;
    productsContainer.addEventListener('click', (e) => {
      const target = e.target as HTMLButtonElement;
      if (target.hasAttribute('data-cart-action')) {
        const action = target.dataset.cartAction;
        const itemId = Number(target.dataset.productId) || -1;

        switch (action) {
          case 'new':
            handleAddNew(itemId);
            break;
          case 'increase':
            handleIncrease(itemId);
            break;
          case 'decrease':
            handleDecrease(itemId);
            break;
          default:
            break;
        }
      }
    });
  }
  bindSortProductsListeners(handler: (type: string) => void) {
    const sortSelector = document.querySelector('#sort-selector') as HTMLElement;
    sortSelector.addEventListener('change', (e) => {
      const sortType = (e.target as HTMLSelectElement).value;
      this.setURL('sortType', sortType);
      handler(sortType);
    });
  }

  bindFilterControlActionListeners(handler: () => void) {
    const resetBtn = document.querySelector('#reset-filters') as HTMLElement;
    const copyBtn = document.querySelector('#copy-filters') as HTMLElement;
    resetBtn.addEventListener('click', (e) => {
      e.preventDefault();
      history.pushState(null, '', `${location.href.split('?')[0]}`);
      const checkboxesBrand: NodeListOf<HTMLInputElement> = document.querySelectorAll('[data-filter-brand]');
      const checkboxesColor: NodeListOf<HTMLInputElement> = document.querySelectorAll('[data-filter-color]');
      const checkboxesCategory: NodeListOf<HTMLInputElement> = document.querySelectorAll('[data-filter-category]');
      const searchInput = document.querySelector('#filter-name') as HTMLInputElement;
      checkboxesBrand.forEach((elem) => {
        elem.checked = false;
      });
      checkboxesColor.forEach((elem) => {
        elem.checked = false;
      });
      checkboxesCategory.forEach((elem) => {
        elem.checked = false;
      });
      searchInput.value = '';
      handler();
    });
    copyBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      await navigator.clipboard.writeText(location.href);
      copyBtn.textContent = 'Copied!';
      setTimeout(() => (copyBtn.textContent = 'Copy URL'), 500);
    });
  }

  addChangeDisplayModeListeners() {
    const horizontalBtn = document.querySelector('[data-displayMode-btn="list"]') as HTMLInputElement;
    const verticalBtn = document.querySelector('[data-displayMode-btn="grid"]') as HTMLInputElement;

    if (horizontalBtn && horizontalBtn) {
      horizontalBtn.onclick = () => {
        this.changeDisplayMode(DisplayMode.list);
      };
      verticalBtn.onclick = () => {
        this.changeDisplayMode(DisplayMode.grid);
      };
    }
  }

  changeDisplayMode(mode: string) {
    const catalog = document.querySelector('.catalog') as HTMLElement;
    const horizontalBtn = document.querySelector('[data-displayMode-btn="list"]') as HTMLInputElement;
    const verticalBtn = document.querySelector('[data-displayMode-btn="grid"]') as HTMLInputElement;
    if (mode === 'list') {
      catalog.classList.remove('catalog_vertical');
      catalog.classList.add('catalog_horizontal');
      horizontalBtn.checked = true;
    }
    if (mode === 'grid') {
      catalog.classList.add('catalog_vertical');
      catalog.classList.remove('catalog_horizontal');
      verticalBtn.checked = true;
    }
    this.appView.setURL('catalogDisplayMode', mode);
  }

  renderBodyShadow() {
    const shadow = document.querySelector('.body-shadow') as HTMLInputElement;
    const searchContainer = document.querySelector('.search-input-container') as HTMLInputElement;
    if (shadow) return null;
    const shadowDiv = document.createElement('div');
    shadowDiv.classList.add('body-shadow');
    shadowDiv.addEventListener('click', () => {
      const shadow = document.querySelector('.body-shadow') as HTMLInputElement;
      const suggestions = document.querySelector('.suggestions') as HTMLInputElement;
      const searchInput = document.querySelector('.filters__search') as HTMLInputElement;
      if (shadow) {
        shadow.remove();
      }
      if (suggestions) {
        suggestions.remove();
      }
      if (searchInput) {
        searchInput.classList.remove('filters__search--focused');
      }
    });
    if (searchContainer) searchContainer.append(shadowDiv);
  }

  renderSuggestions(value: string) {
    const textFilter = document.querySelector('#filter-name') as HTMLInputElement;
    const parent = textFilter.parentElement;
    const suggestions = document.querySelector('.suggestions') as HTMLInputElement;

    let products: Products = this.getSuggestedFilteredProducts(value);
    let container = document.createElement('div');
    let suggestionContainerHtml = '';

    if (suggestions) {
      container = suggestions;
      container.innerHTML = '';
    }
    products = products.slice(0, 4);
    container.classList.add('filter__suggestions', 'suggestions');
    products.forEach((el) => {
      const suggestionElemHtml = `
      <a href="./#product?id=${el.id}" class="suggestions-item">
      <img class="suggestions-item__image" src="${el.photo[0]}"></img>
      <span class="suggestions-item__title">${el.name.length > 25 ? el.name.slice(0, 25) + '...' : el.name}</span>
      </a>`;
      suggestionContainerHtml += suggestionElemHtml;
      // container.insertAdjacentHTML('beforeend', suggestionElemHtml);
    });
    container.innerHTML = '';
    container.insertAdjacentHTML('beforeend', suggestionContainerHtml);
    if (parent && !suggestions) parent.append(container);
  }
}

export default CatalogView;
