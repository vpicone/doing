const withTypescript = require("@zeit/next-typescript");
const withMDX = require("@zeit/next-mdx")({
  extension: /\.mdx?$/
});
const withCSS = require("@zeit/next-css");

module.exports = {
  ...withCSS(withTypescript({ ...withMDX({ pageExtensions: ["md", "mdx"] }) })),
  target: "serverless"
};
