import React from "react"
import { Heading, Flex, Image } from "@chakra-ui/react"
import { graphql } from "gatsby"
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
        direction="column"
      >
        <Seo title={post.frontmatter.title} />

        <Flex direction="column" alignItems="center">
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
        </Flex>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Flex>
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
        image
      }
    }
  }
`
