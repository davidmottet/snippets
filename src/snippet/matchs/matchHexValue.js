/**
* Snippets
* MOBILE true||false
* return bool
*/
const matchs = matchs || {};

matchs.hexValue = (_string) => {
  return _string.match(/^#?([a-f0-9]{6}|[a-f0-9]{3})$/);
};
