const path = require('path');
const createPaginatedPages = require('gatsby-paginate');

const createTagPages = (createPage, edges) => {
  const tagTemplate = path.resolve(`src/templates/tags.js`);
  const posts = {};

  edges.forEach(({ node }) => {
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach(tag => {
        if (!posts[tag]) {
          posts[tag] = [];
        }
        posts[tag].push(node);
      });
    }
  });

  Object.keys(posts).forEach(tagName => {
    const post = posts[tagName];
    createPage({
      path: `/tags/${tagName}`,
      component: tagTemplate,
      context: {
        posts,
        post,
        tag: tagName
      }
    });
  });
};

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);
  const query = await graphql(`
    {
      pages: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/pages/" } }
      ) {
        edges {
          node {
            html
            id
            frontmatter {
              path
              templatePath
            }
          }
        }
      }
      posts: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/blog/" } }
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
    }
  `);

  if (query.errors) {
    return Promise.reject(query.errors);
  }

  createPaginatedPages({
    edges: query.data.posts.edges,
    createPage: createPage,
    pageTemplate: 'src/templates/index.js',
    pageLength: 12,
    pathPrefix: '/',
    buildPath: (index, pathPrefix) =>
      index > 1 ? `${pathPrefix}page/${index}` : `${pathPrefix}`
  });

  const posts = query.data.posts.edges;
  const pages = query.data.pages.edges;

  createTagPages(createPage, posts);

  const newestPosts = posts.slice(0, 4);

  // Create pages for each markdown file.
  posts.forEach(({ node }, index) => {
    const prev = index === 0 ? null : posts[index - 1].node;
    const next = index === posts.length - 1 ? null : posts[index + 1].node;
    const currentPageId = node.id;

    const recentPosts = newestPosts
      .filter(post => currentPageId !== post.node.id)
      .slice(0, 3);

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

  pages.forEach(({ node }) => {
    const templatePath = node.frontmatter.templatePath;
    const template = path.resolve(`src/templates/${templatePath}.js`);

    createPage({
      path: node.frontmatter.path,
      component: template
    });
  });

  return posts;
};
