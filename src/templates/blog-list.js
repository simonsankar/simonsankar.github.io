import { Box, Heading } from "@chakra-ui/layout"
import { StaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import React from "react"
import Seo from "../components/seo"

const BlogList = ({ data, pageContext }) => {
  console.log({ pageContext })
  const { allMarkdownRemark } = data
  return (
    <Layout>
      <Seo title="Blog" />
      <Box
        height="full"
        width="full"
        style={{
          minHeight: `calc(100vh - 105px)`,
        }}
        padding={8}
      >
        <Heading> BLOG </Heading>{" "}
        {allMarkdownRemark.nodes.map(node => (
          <div>
            <Link key={node.id} to={`${node.fields.slug}`}>
              {" "}
              {node.frontmatter.title}{" "}
            </Link>
          </div>
        ))}{" "}
      </Box>{" "}
    </Layout>
  )
}
export const query = graphql`
  query AllBlogPosts($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "YYYY-MM-DD")
          tags
        }
      }
    }
  }
`

export default BlogList
