import {
  Stack,
  StackDivider,
  Heading,
  Flex,
  Box,
  HStack,
  Tag,
  Text,
  Link,
  Image,
  SlideFade,
  useColorModeValue,
} from "@chakra-ui/react"
import { graphql, Link as GatsbyLink } from "gatsby"
import Layout from "../components/layout"
import React from "react"
import Seo from "../components/seo"
import { Button } from "@chakra-ui/react"
import { kebabCase } from "lodash"

const BlogList = ({ data, pageContext }) => {
  const { currentPage, numPages } = pageContext
  const { allMarkdownRemark } = data
  return (
    <Layout>
      <Seo title="Blog" />
      <Flex
        direction="column"
        height="full"
        width="full"
        paddingInline={[8, 8, 8, 8, "15%", "20%"]}
        style={{
          minHeight: `calc(100vh - 105px)`,
        }}
        justifyContent="space-between"
      >
        <Flex direction="column">
          <SlideFade delay={0.15} in={true} offsetX={-90}>
            <Heading
              marginTop={[4, 8]}
              fontSize={{ base: "4xl", md: "4xl", lg: "5xl", xl: "6xl" }}
            >
              BLOG
            </Heading>
          </SlideFade>
          <Box marginBlock="2" height={[5, 10]} borderLeftWidth="5px"></Box>
          <Stack
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.500")}
              />
            }
          >
            {allMarkdownRemark.nodes.map((node, idx) => (
              <SlideFade delay={0.15 * (idx + 2)} in={true} offsetY={90}>
                <BlogItem key={node.id} post={node} />
              </SlideFade>
            ))}
          </Stack>
        </Flex>
        <Flex direction="row" justifyContent="center" marginBlock={8}>
          <Stack direction="row" spacing="4">
            {currentPage - 1 >= 1 ? (
              <Button as={GatsbyLink} to={`/blog/page/${currentPage - 1}`}>
                Prev
              </Button>
            ) : null}
            {currentPage + 1 <= numPages ? (
              <Button as={GatsbyLink} to={`/blog/page/${currentPage + 1}`}>
                Next
              </Button>
            ) : null}
          </Stack>
        </Flex>
      </Flex>
    </Layout>
  )
}
export default BlogList

export const query = graphql`
  query AllBlogPosts($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        id
        fields {
          slug
        }
        html
        frontmatter {
          title
          date(formatString: "DD/MM/YYYY")
          description
          image
          tags
        }
        timeToRead
      }
    }
  }
`

export const BlogTags = props => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map(tag => {
        return (
          <Tag
            as={GatsbyLink}
            to={`/tags/${kebabCase(tag)}`}
            size={"md"}
            variant="solid"
            colorScheme={props.colorScheme ? props.colorScheme : "gray"}
            key={props.id + tag}
          >
            {tag}
          </Tag>
        )
      })}
    </HStack>
  )
}

export const BlogItem = ({ post }) => {
  return (
    <Flex
      display="flex"
      direction={["column", "row"]}
      position="relative"
      alignItems={["right", "center"]}
      justifyContent={"center"}
    >
      <Box display="flex" flex={1} marginTop={4}>
        <Link
          as={GatsbyLink}
          to={post.fields.slug}
          textDecoration="none"
          _hover={{ textDecoration: "none" }}
        >
          <Image
            textAlign={"center"}
            transform="scale(1.0)"
            borderRadius="md"
            src={post.frontmatter.image}
            alt={post.frontmatter.title}
            objectFit="contain"
            width={["0%", "100%"]}
            transition="0.3s ease-in-out"
            _hover={{
              transform: "scale(1.05)",
            }}
          />
        </Link>
      </Box>
      <Box
        display="flex"
        flex={3}
        flexDirection="column"
        justifyContent="center"
        paddingBlock={[4, 8]}
        paddingInline={[0, 8]}
      >
        <BlogTags id={post.id} tags={post.frontmatter.tags} />
        <Heading fontSize={"3xl"} marginTop="1">
          <Link as={GatsbyLink} to={post.fields.slug}>
            {post.frontmatter.title}
          </Link>
        </Heading>
        <Text
          as="p"
          marginTop="2"
          color={useColorModeValue("gray.700", "gray.200")}
          fontSize={{ base: "sm", md: "md", lg: "lg", xl: "lg" }}
        >
          {post.frontmatter.description}
        </Text>
        <Box marginBlock={2}>
          <Button
            size="sm"
            colorScheme="brand"
            variant="solid"
            as={GatsbyLink}
            to={post.fields.slug}
          >
            Read ⟶
          </Button>
        </Box>
        <Box marginBlock="1" height={[3, 7]} borderLeftWidth="3px"></Box>
        <Text>
          {`${post.timeToRead} minute read`} {"•"} {post.frontmatter.date}
        </Text>
      </Box>
    </Flex>
  )
}
