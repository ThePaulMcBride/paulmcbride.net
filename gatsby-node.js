const path = require('path');
const createPaginatedPages = require("gatsby-paginate");


const createTagPages = (createPage, edges) => {
  const tagTemplate = path.resolve(`src/templates/tags.js`);
  const posts = {};

  edges
    .forEach(({ node }) => {
      if (node.frontmatter.tags) {
        node.frontmatter.tags
          .forEach(tag => {
            if (!posts[tag]) {
              posts[tag] = [];
            }
            posts[tag].push(node);
          });
      }
    });

  createPage({
    path: '/tag',
    component: tagTemplate,
    context: {
      posts
    }
  });

  Object.keys(posts)
    .forEach(tagName => {
      const post = posts[tagName];
      createPage({
        path: `/tags/${tagName}`,
        component: tagTemplate,
        context: {
          posts,
          post,
          tag: tagName
        }
      })
    });
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);
  return graphql(`{
    allMarkdownRemark(
      filter:{fileAbsolutePath: {regex: "/blog/"}}
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          html
          id
          timeToRead
          frontmatter {
            date(formatString: "DD MMM YYYY")
            path
            tags
            title
            featuredImage {
              childImageSharp {
                thumbnail: resize(width: 600, cropFocus: CENTER) {
                  src
                }
                hires: resize(width: 1500, cropFocus: CENTER) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }`)
  .then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    createPaginatedPages({
      edges: result.data.allMarkdownRemark.edges,
      createPage: createPage,
      pageTemplate: "src/templates/index.js",
      pageLength: 12, // This is optional and defaults to 10 if not used
      pathPrefix: "", // This is optional and defaults to an empty string if not used
      context: {} // This is optional and defaults to an empty object if not used
    });

    const posts = result.data.allMarkdownRemark.edges;

    createTagPages(createPage, posts);

    const newestPosts = posts.slice(0, 4)

    // Create pages for each markdown file.
    posts.forEach(({ node }, index) => {
      const prev = index === 0 ? null : posts[index - 1].node;
      const next = index === posts.length - 1 ? null : posts[index + 1].node;
      const currentPageId = node.id

      const recentPosts = newestPosts
        .filter((post) => currentPageId !== post.node.id)
        .slice(0, 3)

      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {
          prev,
          next,
          recentPosts
        }
      });
    });

    return posts;
  })
};
