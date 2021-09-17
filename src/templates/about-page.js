import { Box, Heading } from "@chakra-ui/layout"

import React from "react"

function AboutPage({ data }) {
  return (
    <Box
      height="full"
      width="full"
      style={{ minHeight: `calc(100vh - 63px)` }}
      padding={8}
    >
      <Heading>About page</Heading>
      {JSON.stringify(data)}
    </Box>
  )
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
