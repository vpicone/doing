const withTypescript = require("@zeit/next-typescript");
const withCSS = require("@zeit/next-css");

// create mdx plugin
const visit = require("unist-util-visit");
const retext = require("retext");
const retextSmartypants = require("retext-smartypants");

function remarkSmartypants(options) {
  const processor = retext().use(retextSmartypants, options);
  function transformer(tree) {
    visit(tree, "text", node => {
      node.value = String(processor.processSync(node.value));
    });
  }
  return transformer;
}

const withMDX = require("@zeit/next-mdx")({
  extension: /\.mdx?$/,
  options: {
    mdPlugins: [[remarkSmartypants, { dashes: "oldschool", backticks: false }]]
  }
});

module.exports = {
  ...withCSS(withTypescript({ ...withMDX({ pageExtensions: ["md", "mdx"] }) })),
  target: "serverless"
};
