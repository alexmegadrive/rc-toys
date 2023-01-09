import { getQueryParams } from "../utils/getQueryParams";

const url1 = 'http://localhost:3000/?catalogDisplayMode=list&weightMax=6720'
const params1 = {
  "catalogDisplayMode": "list",
  "weightMax": "6720"
}
const url2 = 'http://localhost:3000/?catalogDisplayMode=list&weightMax=2206&category=Buggy&brand=Himoto'
const params2 = {
  "catalogDisplayMode": "list",
  "weightMax": "2206",
  "category": "Buggy",
  "brand": "Himoto"
}
const url3 = 'http://localhost:3000/'
const params3 = {}

test('Query params: should equal to correct query objects', () => {
    expect(getQueryParams(url1)).toEqual(params1);
    expect(getQueryParams(url2)).toEqual(params2);

});
test('Query params: should equal to empty query object', () => {
  expect(getQueryParams(url3)).toEqual(params3);
});
