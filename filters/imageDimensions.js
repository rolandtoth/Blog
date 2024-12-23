import sizeOf from "image-size";

/*
Return width and height for images.
*/
export default function (path, type = "markup") {
  let dim = "";
  if (!path) {
    return false;
  }
  if (path.charAt(0) === '/') {
    path = path.substr(1);
  }
  let dimensions = sizeOf(path);

  if (dimensions) {
    if (type === "markup") {
      dim = `width="${dimensions.width}" height="${dimensions.height}"`;
    } else if (type === "width") {
      dim = dimensions.width;
    } else if (type === "height") {
      dim = dimensions.height;
    } else if (type === "object") {
      dim = dimensions;
    }
  }

  return dim;
};