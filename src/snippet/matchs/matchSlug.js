/**
* Snippets
* MOBILE true||false
* return bool
*/
const matchs = matchs || {};

matchs.slug = (_string) => {
  return _string.match(/^[a-z0-9-]+$/);
};
