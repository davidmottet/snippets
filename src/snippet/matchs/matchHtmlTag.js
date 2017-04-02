/**
* Snippets
* MOBILE true||false
* return bool
*/
const matchs = matchs || {};

matchs.htmlTag = (_string) => {
  return _string.match(/^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/);
};
