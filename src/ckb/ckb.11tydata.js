// I use for convert a string into a URL slug and Localized URL slugs
module.exports = {
  lang: "ckb",
  permalink: function (data) {
    // Slug override for pages
    if (data.slugOverride) {
      return `/${data.lang}/${this.slugify(data.slugOverride)}/`;
    }
    // Slug override for blog post
    if (data.postSlug) {
      return `/${data.lang}/blog/${this.slugify(data.postSlug)}/`;
    }
  },
};
