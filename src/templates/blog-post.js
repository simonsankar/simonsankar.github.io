import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"

import { Heading, Flex, Image, Box, Divider } from "@chakra-ui/react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { materialOceanic } from "react-syntax-highlighter/dist/esm/styles/prism"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <Flex
        height="full"
        width="full"
        style={{ minHeight: `calc(100vh - 105px)` }}
        paddingInline={[8, 8, 8, 8, "15%", "20%"]}
        paddingBottom={8}
        direction="column"
      >
        <Seo title={post.frontmatter.title} />

        <Flex direction="column">
          <Box
            display="flex"
            flexDirection="column"
            textAlign="center"
            alignItems="center"
          >
            <Heading
              marginBlock={[4, 8]}
              fontSize={{ base: "4xl", md: "4xl", lg: "5xl", xl: "6xl" }}
            >
              {post.frontmatter.title}
            </Heading>
            <Image
              transform="scale(1.0)"
              borderRadius="md"
              src={post.frontmatter.image}
              alt={post.frontmatter.title}
              objectFit="contain"
              width="50%"
              transition="0.3s ease-in-out"
              _hover={{
                transform: "scale(1.05)",
              }}
            />
          </Box>
          <Divider marginBlock="4" />
          <ReactMarkdown
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "")
                return !inline && match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, "")}
                    style={materialOceanic}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  />
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              },
            }}
            escapeHtml={false}
            children={post.rawMarkdownBody}
          />
        </Flex>
      </Flex>
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      rawMarkdownBody
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        image
      }
    }
  }
`
