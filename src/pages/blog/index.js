import { Box, Heading } from "@chakra-ui/layout"

import Layout from "../../components/layout"
import React from "react"
import Seo from "../../components/seo"

const BlogIndexPage = () => {
  return (
    <Layout>
      <Seo title="Blog" />
      <Box
        height="full"
        width="full"
        style={{ minHeight: `calc(100vh - 63px)` }}
        padding={8}
      >
        <Heading>BLOG</Heading>
      </Box>
    </Layout>
  )
}
export default BlogIndexPage
