import { Box, Heading } from "@chakra-ui/layout"

import Layout from "../components/layout"
import React from "react"
import Seo from "../components/seo"

const ProjectsPage = () => {
  return (
    <Layout>
      <Seo title="Projects" />
      <Box
        height="full"
        width="full"
        style={{ minHeight: `calc(100vh - 63px)` }}
        padding={8}
      >
        <Heading>PROJECTS</Heading>
      </Box>
    </Layout>
  )
}
export default ProjectsPage
