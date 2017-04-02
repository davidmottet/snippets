/**
* Snippets
* MOBILE true||false
* return bool
*/
const matchs = matchs || {};

matchs.email = (_string) => {
  return _string.match(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/);
};
