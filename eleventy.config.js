import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import externalLinksPlugin from "eleventy-plugin-external-links";
import readingTimePlugin from "eleventy-plugin-reading-time";
import htmlnano from "htmlnano";
import dateDisplayFilter from "./filters/dateDisplay.js";
import timestampFilter from "./filters/timestamp.js";
import pageTitleFilter from "./filters/pageTitle.js";
import postImagePathFilter from "./filters/postImagePath.js";
import removeIndexHtmlFilter from "./filters/removeIndexHtml.js";
import cacheVersionFilter from "./filters/cacheVersion.js";
import getPageByPathFilter from "./filters/getPageByPath.js";
import httpUrlFilter from "./filters/httpUrl.js";
import callFunctionFilter from "./filters/callFunction.js";
import jsMinFilter from "./filters/jsMin.js";
import localeSortFilter from "./filters/localeSort.js";
import slugFilter from "./filters/slug.js";
import disqusCommentCountFilter from "./filters/disqusCommentCount.js";
import mdFilter from "./filters/md.js";
import codepenEmbedFilter from "./filters/codepenEmbed.js";
import getPostTagDataFilter from "./filters/getPostTagData.js";
import getSiblingPageFilter from "./filters/getSiblingPage.js";
import stripTagsFilter from "./filters/stripTags.js";
import stripMarkdownFilter from "./filters/stripMarkdown.js";
import imageDimensionsFilter from "./filters/imageDimensions.js";
import colorByStringFilter from "./filters/colorByString.js";

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default async function(eleventyConfig) {
  eleventyConfig.addFilter("dateDisplay", dateDisplayFilter);
  eleventyConfig.addFilter("timestamp", timestampFilter);
  eleventyConfig.addFilter("pageTitle", pageTitleFilter);
  eleventyConfig.addFilter("postImagePath", postImagePathFilter);
  eleventyConfig.addFilter("removeIndexHtml", removeIndexHtmlFilter);
  eleventyConfig.addFilter("cacheVersion", cacheVersionFilter);
  eleventyConfig.addFilter("getPageByPath", getPageByPathFilter);
  eleventyConfig.addFilter("httpUrl", httpUrlFilter);
  eleventyConfig.addFilter("callFunction", callFunctionFilter);
  eleventyConfig.addFilter("jsMin", jsMinFilter);
  eleventyConfig.addFilter("localeSort", localeSortFilter);
  eleventyConfig.addFilter("slug", slugFilter);
  eleventyConfig.addFilter("disqusCommentCount", disqusCommentCountFilter);
  eleventyConfig.addFilter("md", mdFilter);
  eleventyConfig.addFilter("codepenEmbed", codepenEmbedFilter);
  eleventyConfig.addFilter("getPostTagData", getPostTagDataFilter);
  eleventyConfig.addFilter("getSiblingPage", getSiblingPageFilter);
  eleventyConfig.addFilter("stripTags", stripTagsFilter);
  eleventyConfig.addFilter("stripMarkdown", stripMarkdownFilter);
  eleventyConfig.addFilter("imageDimensions", imageDimensionsFilter);
  eleventyConfig.addFilter("colorByString", colorByStringFilter);

  eleventyConfig.addPassthroughCopy("assets/");
  eleventyConfig.addPassthroughCopy("_headers");
  eleventyConfig.addPassthroughCopy(".htaccess");

  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addPlugin(externalLinksPlugin);
  eleventyConfig.addPlugin(readingTimePlugin);

  eleventyConfig.addPlugin(feedPlugin, {
		type: "atom",
		outputPath: "/feed.xml",
		collection: {
			name: "posts",
			limit: 9999,
		},
		metadata: {
			language: "en",
			title: "Roland Toth's blog",
			subtitle: "design+develop",
			base: "https://blog.rolandtoth.hu/",
			author: {
				name: "Roland Toth",
				email: "contact@rolandtoth.hu",
			}
		}
	});

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
    passthroughFileCopy: true,
  };
};
