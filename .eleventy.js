const htmlnano = require("htmlnano");

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("dateDisplay", require("./filters/dateDisplay.js"));
  eleventyConfig.addFilter("timestamp", require("./filters/timestamp.js"));
  eleventyConfig.addFilter("pageTitle", require("./filters/pageTitle.js"));
  eleventyConfig.addFilter("postImagePath", require("./filters/postImagePath.js"));
  eleventyConfig.addFilter("removeIndexHtml", require("./filters/removeIndexHtml.js"));
  eleventyConfig.addFilter("cacheVersion", require("./filters/cacheVersion.js"));
  eleventyConfig.addFilter("getPageByPath", require("./filters/getPageByPath.js"));
  eleventyConfig.addFilter("httpUrl", require("./filters/httpUrl.js"));
  eleventyConfig.addFilter("callFunction", require("./filters/callFunction.js"));
  eleventyConfig.addFilter("jsMin", require("./filters/jsMin.js"));
  eleventyConfig.addFilter("localeSort", require("./filters/localeSort.js"));
  eleventyConfig.addFilter("slug", require("./filters/slug.js"));
  eleventyConfig.addFilter("disqusCommentCount", require("./filters/disqusCommentCount.js"));
  eleventyConfig.addFilter("md", require("./filters/md.js"));
  eleventyConfig.addFilter("codepenEmbed", require("./filters/codepenEmbed.js"));
  eleventyConfig.addFilter("getPostTagData", require("./filters/getPostTagData.js"));
  eleventyConfig.addFilter("getSiblingPage", require("./filters/getSiblingPage.js"));
  eleventyConfig.addFilter("stripTags", require("./filters/stripTags.js"));
  eleventyConfig.addFilter("stripMarkdown", require("./filters/stripMarkdown.js"));
  eleventyConfig.addFilter("imageDimensions", require("./filters/imageDimensions.js"));

  eleventyConfig.addPassthroughCopy("assets/");
  eleventyConfig.addPassthroughCopy("_headers");
  eleventyConfig.addPassthroughCopy(".htaccess");

  // eleventyConfig.addCollection("posts", function (collection) {
  //   return collection.getFilteredByTag("post").reverse();
  // });

  eleventyConfig.addCollection("tagList", function (collection) {
    let tagSet = new Set();

    collection.getAll().forEach(function (item) {
      if ("tags" in item.data) {
        let tags = item.data.tags;

        tags = tags.filter(function (item) {
          switch (item) {
            // this list should match the `filter` list in tags.njk
            case "all":
            case "nav":
            case "post":
            case "posts":
              return false;
          }

          return true;
        });

        for (const tag of tags) {
          tagSet.add(tag);
        }
      }
    });

    // returning an array in addCollection works in Eleventy 0.5.3
    return [...tagSet];
  });

  eleventyConfig.addCollection("posts", function (collection) {
    return collection.getAll()
      .filter(function (item) {
        return item.data.type === "post"
      })
      .sort(function (a, b) {
        return new Date(b.data.date) - new Date(a.data.date);
      });
  });

  eleventyConfig.addTransform("htmlnano", async function (content, outputPath) {
    if (outputPath.endsWith(".html")) {
      return await htmlnano.process(content)
        .then(function (result) {
          return result.html;
      })
    }
    return content;
  });

  return {
    dir: {
      input: "input",
      data: "_data",
      output: "dist",
      includes: "../includes"
    },
    templateFormats: ["njk", "md", "zip", "png", "jpg", "gif", "webp"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dataTemplateEngine: false,
    passthroughFileCopy: true
  };
};
