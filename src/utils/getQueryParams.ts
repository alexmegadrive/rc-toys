export interface IQueryParams {
  [key: string]: string;
}

export function getQueryParams(url: string) {
  const params: IQueryParams = {};
  if (url.includes('?')) {
    const paramArr = url.slice(url.indexOf('?') + 1).split('&');
    paramArr.map((param) => {
      const [key, val] = param.split('=');
      params[key] = decodeURIComponent(val);
    });
  }
  return params;
}
