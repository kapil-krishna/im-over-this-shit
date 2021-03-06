const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node);
};

// const path = require(`path`)

// exports.createPages = async ({ actions, graphql, reporter }) => {
//   const { createPage } = actions;
//   const blogPostTemplate = path.resolve(`src/templates/faqTemplate.js`);
//   const result = await graphql(`
//     {
//       allMarkdownRemark {
//         edges {
//           node {
//             frontmatter {
//               path
//             }
//           }
//         }
//       }
//     }
//   `)

//   if (result.errors) {
//     reporter.panicOnBuild(`Error while running GraphQL query.`);
//     return;
//   }

//   result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//     createPage(
//       {
//       path: node.frontmatter.path,
//       component: blogPostTemplate,
//       context: {},
//     }
//     );
//   });
// };