const { EleventyI18nPlugin } = require("@11ty/eleventy");
const { DateTime } = require("luxon");
const Image = require("@11ty/eleventy-img");

function imageShortcode(src, alt, sizes, cls, widths) {
  let options = {
    widths: widths,
    formats: ["webp"],
    urlPath: "/assets/postImages/",
    outputDir: "./_site/assets/postImages/",
  };

  // generate images, while this is async we don’t wait
  Image(`./src${src}`, options);

  let imageAttributes = {
    alt,
    sizes,
    class: cls,
    loading: "lazy",
    decoding: "async",
  };
  // get metadata even if the images are not fully generated yet
  let metadata = Image.statsSync(`./src${src}`, options);
  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function (eleventyConfig) {
  // Copy your file and folder and paste them in _site folder
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addWatchTarget("./src/input.css");
  eleventyConfig.addWatchTarget("./tailwind.config.js");
  eleventyConfig.addShortcode("currentYear", () => `${new Date().getFullYear()}`);

  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    // any valid BCP 47-compatible language tag is supported
    defaultLanguage: "ckb", // Required, this site uses "ckb"
  });

  // for image plugin
  eleventyConfig.addNunjucksShortcode("EleventyImage", imageShortcode);

  // convert date by Luxon library
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toFormat("dd-MM-yyyy");
  });

  // selected input directory and output directory (by default: input is root of project and output is _site directory)
  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
