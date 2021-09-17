import { Box, Heading } from "@chakra-ui/layout"
import { StaticQuery, graphql, Link } from "gatsby"
import Layout from "../../components/layout"
import React from "react"
import Seo from "../../components/seo"

const RenderBlogs = ({ data }) => {
  const { allMarkdownRemark } = data
  return (
    <Layout>
      <Seo title="Blog" />
      <Box
        height="full"
        width="full"
        style={{
          minHeight: `calc(100vh - 63px)`,
        }}
        padding={8}
      >
        <Heading> BLOG </Heading>{" "}
        {allMarkdownRemark.nodes.map(node => (
          <Link to={`${node.fields.slug}`}> {node.frontmatter.title} </Link>
        ))}{" "}
      </Box>{" "}
    </Layout>
  )
}
const BlogIndexPage = () => (
  <StaticQuery
    query={graphql`
      query AllBlogs {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          nodes {
            fields {
              slug
            }
            frontmatter {
              title
              date
              description
            }
          }
          totalCount
        }
      }
    `}
    render={data => <RenderBlogs data={data} />}
  />
)

export default BlogIndexPage
