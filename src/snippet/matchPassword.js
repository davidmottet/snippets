/**
* Snippets
* MOBILE true||false
* return bool
*/
const matchs = matchs || {};

matchs.password = (_string) => {
  return _string.match(/^[a-z0-9_-]{6,18}$/);
};
