import { Box, Heading } from "@chakra-ui/layout"

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

function AboutPage({ data }) {
  return (
    <Layout>
      <Seo title="About" />
      <Box
        height="full"
        width="full"
        style={{ minHeight: `calc(100vh - 63px)` }}
        padding={8}
      >
        <Heading>About page</Heading>
        {JSON.stringify(data)}
      </Box>
    </Layout>
  )
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        templateKey
        tags
        subheading
        image
        heading
        description
        title
      }
    }
  }
`
