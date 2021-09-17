import { Box, Heading } from "@chakra-ui/react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../../components/layout"
import React from "react"
import Seo from "../../components/seo"
import { useColorModeValue } from "@chakra-ui/react"

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
        bg={useColorModeValue("brand.100", "brand.700")}
        color={useColorModeValue("brand.700", "brand.50")}
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
