const md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true
});

/*
Render markdown
 */
module.exports = function (string) {
  return string ? md.render(string) : "";
};