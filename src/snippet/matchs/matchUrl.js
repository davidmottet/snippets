/**
* Snippets
* MOBILE true||false
* return bool
*/
const matchs = matchs || {};

matchs.url = (_string) => {
  return _string.match(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/);
};
