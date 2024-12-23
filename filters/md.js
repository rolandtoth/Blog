import md from "markdown-it";

/*
Render markdown
 */
export default function (string) {
    return string
        ? md({
              html: true,
              linkify: true,
              typographer: true,
          }).render(string)
        : '';
}
