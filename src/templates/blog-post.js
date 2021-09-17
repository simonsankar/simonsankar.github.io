import React from "react"
import { Heading, Box, useColorModeValue } from "@chakra-ui/react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <Box
        height="full"
        width="full"
        style={{ minHeight: `calc(100vh - 63px)` }}
        padding={8}
      >
        <Seo title={post.frontmatter.title} />

        <Heading>{post.frontmatter.title}</Heading>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Box>
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
