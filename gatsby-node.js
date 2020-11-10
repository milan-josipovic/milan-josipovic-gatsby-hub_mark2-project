const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      posts: allContentfulPost {
        edges {
          node {
            slug
          }
        }
      }
      events: allContentfulEvent {
        nodes {
          slug
        }
      }
    }
  `)

  data.posts.edges.forEach(({ node }) => {
    createPage({
      path: `vesti/${node.slug}`,
      component: path.resolve("./src/templates/blog-template.js"),
      context: {
        slug: node.slug,
      },
    })
  })

  // data.events.nodes.forEach(event => {
  //   createPage({
  //     path: `dogadjaji/${event.slug}`,
  //     component: path.resolve(`./src/templates/event-template.js`),
  //     context: {
  //       slug: event.slug,
  //     },
  //   })
  // })
  data.events.nodes.forEach(event => {
    createPage({
      path: `dogadjaji/${event.slug}`,
      component: path.resolve("./src/templates/event-template.js"),
      context: {
        slug: event.slug,
      },
    })
  })
}
