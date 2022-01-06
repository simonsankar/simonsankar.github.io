import React from "react"
import {
  Flex,
  SlideFade,
  Heading,
  Grid,
  Text,
  Stack,
  Box,
  Image,
  Button,
  Link,
  Divider,
  HStack,
  Tag,
  useColorModeValue,
} from "@chakra-ui/react"

import Layout from "../components/layout"
import { graphql } from "gatsby"
import Seo from "../components/seo"

const ProjectItem = ({ item }) => {
  return (
    <Box
      // maxW={"300px"}
      width="100%"
      bg={useColorModeValue("white", "gray.500")}
      boxShadow={"xl"}
      rounded={"md"}
      p={6}
      overflow={"hidden"}
    >
      <Box bg={"gray.100"} mt={-6} mx={-6} mb={6} pos={"relative"}>
        <Image src={item.image} layout={"fill"} />
      </Box>
      <Stack>
        <Box>
          {item.tags.map(tag => {
            return (
              <Tag
                marginRight={2}
                marginBottom={2}
                size={"sm"}
                variant="subtle"
                colorScheme="gray"
                key={item.title + tag}
              >
                {tag}
              </Tag>
            )
          })}
        </Box>
        <Heading
          color={useColorModeValue("gray.700", "gray.50")}
          fontSize={"2xl"}
          fontFamily={"body"}
        >
          {item.title}
        </Heading>
        <Text color={useColorModeValue("gray.600", "gray.100")}>
          {item.description}
        </Text>
      </Stack>
      <Divider marginBlock={4} />
      <HStack spacing={2} align="right" justifyContent="end">
        {item.link ? (
          <Button
            as={Link}
            href={item.link}
            target="_blank"
            alt="Resume"
            variant="solid"
            size="sm"
            colorScheme="brand"
            textTransform="uppercase"
          >
            View
          </Button>
        ) : null}
        {item.source ? (
          <Button
            as={Link}
            href={item.source}
            target="_blank"
            alt="Resume"
            variant="solid"
            size="sm"
            colorScheme="gray"
            textTransform="uppercase"
          >
            Source
          </Button>
        ) : null}
      </HStack>
    </Box>
  )
}

const ProjectsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <Seo title={frontmatter.title} />

      <Flex
        height="full"
        width="full"
        style={{ minHeight: `calc(100vh - 105px)` }}
        paddingInline={[8, 8, 8, 8, "15%", "20%"]}
        direction="column"
      >
        <SlideFade delay={0.15} in={true} offsetX={-90}>
          <Heading
            marginTop={[4, 8]}
            fontSize={{ base: "4xl", md: "4xl", lg: "5xl", xl: "6xl" }}
            textTransform="uppercase"
          >
            {frontmatter.title}
          </Heading>
        </SlideFade>
        <Box marginBlock={2} height={[5, 10]} borderLeftWidth="5px"></Box>
        <Grid
          alignItems="flex-start"
          templateColumns={{
            base: `repeat(1, 1fr)`,
            sm: `repeat(1, 1fr)`,
            md: `repeat(2, 1fr)`,
            lg: `repeat(3, 1fr)`,
            xl: `repeat(3, 1fr)`,
          }}
          gap={8}
          paddingBottom={8}
        >
          {frontmatter.items.map((item, idx) => (
            <SlideFade delay={0.15 * (idx + 2)} in={true} offsetY={90}>
              <ProjectItem item={item} key={item.title} />
            </SlideFade>
          ))}
        </Grid>
      </Flex>
    </Layout>
  )
}
export default ProjectsPage

export const projectsPageQuery = graphql`
  query ProjectsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        templateKey
        title
        items {
          title
          description
          image
          link
          source
          tags
        }
      }
    }
  }
`
