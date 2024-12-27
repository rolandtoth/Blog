/*
 * https://codepen.io/rolandtoth/pen/LypvrV?editors=1100
 */
export default function (url, title = "") {
  const parts = url.split("/"),
    user = parts[3],
    id = parts[5],
    height = 400;

  return `<p class="codepen" data-height="${height}" data-theme-id="0" data-default-tab="css,result" data-user="${user}" data-slug-hash="${id}" style="height: ${height}px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="${title}">${title}</a> by ${user} (<a href="${url}?editors=1100">@${user}</a>)
  </p>
  <script async src="https://static.codepen.io/assets/embed/ei.js"></script>`;
};