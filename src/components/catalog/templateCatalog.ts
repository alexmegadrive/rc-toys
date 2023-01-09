export const catalogHtml = `


<main class="main main_catalog" id="main">

<aside class="filters main__filter">
  <fieldset class="filters__fieldset filters__fieldset_resets">
    <button class="filters__filterbtn" data-action="" id="reset-filters">Reset filters</button>
    <button class="filters__filterbtn  data-action="" id="copy-filters"">Copy \n URL</button>
  </fieldset>

  <fieldset class="filters__fieldset  search-input-container">
  <input class="search-input filters__search" 
  type="text"placeholder="Search by anything" id="filter-name"
  autocapitalize="off" autocomplete="off" autocorrect="off" spellcheck="false"></input>
</fieldset>

  <fieldset class="filters__fieldset filters__fieldset_category" id="filter-category">
  <legend class="filters__legend">Categories</legend>
</fieldset>

  <fieldset class="filters__fieldset filters__fieldset_category" id="filter-brands">
    <legend class="filters__legend">Brands</legend>
  </fieldset>

  <fieldset class="filters__fieldset filters__fieldset_colors" id="filter-colors">
    <legend class="filters__legend">Color</legend>
  </fieldset>

  <fieldset class="filters__fieldset filters__fieldset_years">
  <legend class="filters__legend">Weight</legend>
  <label class="range filters__range-label" for="weight-min">
    <div class="range__slider-track"></div>
    <input class="input range__band" type="range" min="0" max="5000" id="weight-min" value="0" step="10"></input>
    <input class="input range__band" type="range" min="0" max="5000" id="weight-max" value="5000" step="10"></input>
    <div class="range__values">
      <span class="range__min-value" id="weight-min-value">1000</span>
      <span class="range__man-value" id="weight-max-value">5000</span>
    </div>
  </label>
</fieldset>

<fieldset class="filters__fieldset filters__fieldset_price">
  <legend class="filters__legend">Price</legend>
  <label class="range filters__range-label" for="range-price">
    <div class="range__slider-track"></div>
    <input class="input range__band" type="range" min="0" max="1000" id="price-min" value="0" step="1"></input>
    <input class="input range__band" type="range" min="0" max="1000" id="price-max" value="1000" step="1"></input>
    <div class="range__values">
      <span class="range__min-value" id="price-min-value">200</span>
      <span class="range__man-value" id="price-max-value">800</span>
    </div>
  </label>
</fieldset>
</aside>

<div class="products main__products">
  <div class="products__sort">
    <div class="select">
      <span class="select__title">Sort by</span>
      <select class="select__input" name="products__sort" id="sort-selector" value="">
        <option class="products__sort-option select__item" value="name-increase">Name (A to Z)</option>
        <option class="products__sort-option select__item" value="name-decrease">Name (Z to A)</option>
        <option class="products__sort-option select__item" value="price-increase">Price (Low to High)</option>
        <option class="products__sort-option select__item" value="price-decrease">Price (High to Low)</option>
      </select>
    </div>
    <span class="products__text">Items found: <span class="products__count" id="products-count">0</span> </span>
    <div class="display products__display">
      <label class="display__label">
        <input class="display__btn" type="radio" name="display" data-displayMode-btn="list"></input>
        <span class="display__fake-btn display__fake-btn_horizontal"></span>  
      </label>
      <label class="display__label">
        <input class="display__btn" type="radio" name="display" data-displayMode-btn="grid"></input> 
        <span class="display__fake-btn display__fake-btn_vertical"></span>
      </label>
    </div>
  </div>

  <ul class="catalog products__container" id="products">
    
  </ul>
</div>
</main>

`;
