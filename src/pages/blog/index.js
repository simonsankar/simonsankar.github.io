import { Box, Heading } from "@chakra-ui/layout"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../../components/layout"
import React from "react"
import Seo from "../../components/seo"

const BlogIndexPage = ({ data }) => {
  const { allMarkdownRemark } = data
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
        {allMarkdownRemark.nodes.map(node => (
          <div>{node.frontmatter.title}</div>
        ))}
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
    render={(data, count) => <BlogIndexPage data={data} />}
  />
)
