import { Box, Heading } from "@chakra-ui/layout"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../../components/layout"
import React from "react"
import Seo from "../../components/seo"

const BlogIndexPage = ({ data, count }) => {
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
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </Box>
    </Layout>
  )
}
export default () => (
  <StaticQuery
    query={graphql`
      query MyQuery {
        allMarkdownRemark {
          nodes {
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
    render={(data, count) => <BlogIndexPage data={data} count={count} />}
  />
)
