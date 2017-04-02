/**
* Snippets
* MOBILE true||false
* return bool
*/
const matchs = matchs || {};

matchs.userName = (_string) => {
  return _string.match(/^[a-z0-9_-]{3,16}$/);
};
