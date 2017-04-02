/**
* Snippets
* MOBILE true||false
* return bool
*/
const matchs = matchs || {};

matchs.ip = (_string) => {
  return _string.match(/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/);
};
