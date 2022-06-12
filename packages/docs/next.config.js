const withMdxEnhanced = require('next-mdx-enhanced');
const withImages = require('next-images');
const mdxPrism = require('mdx-prism');

module.exports = withMdxEnhanced({
  layoutPath: 'src/layouts',
  defaultLayout: true,
  remarkPlugins: [
    require('remark-autolink-headings'),
    require('remark-code-titles'),
  ],
  rehypePlugins: [mdxPrism],
})(withImages());
