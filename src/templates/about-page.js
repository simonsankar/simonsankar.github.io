import {
  Flex,
  Heading,
  SlideFade,
  Text,
  Box,
  Tag,
  useColorModeValue,
} from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

function AboutPage({ data }) {
  const { frontmatter } = data.markdownRemark
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
        <Flex direction="column" flex={1}>
          <SlideFade in={true} offsetX={-90}>
            <Heading
              marginTop={[4, 8]}
              fontSize={{ base: "4xl", md: "4xl", lg: "5xl", xl: "6xl" }}
              textTransform="uppercase"
            >
              {frontmatter.title}
            </Heading>
          </SlideFade>
          <Box marginBlock={2} height={[5, 10]} borderLeftWidth="5px"></Box>
          <Flex flex={1} direction={["column", "row"]}>
            <Flex flexDirection="column">
              <SlideFade in={true} offsetY={90}>
                <Text
                  marginTop={-0.5}
                  lineHeight={1}
                  fontSize={{ base: "4xl", md: "5xl", lg: "7xl", xl: "7xl" }}
                  fontWeight="bold"
                  color={useColorModeValue("brand.400", "brand.200")}
                  display="inline-block"
                  position="relative"
                >
                  {frontmatter.name}
                </Text>
                <Text fontSize={{ base: "xl", md: "xl", lg: "2xl", xl: "3xl" }}>
                  {frontmatter.position}
                </Text>
                <Text fontWeight="bold" marginTop={5}>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
                  {frontmatter.location}
                </Text>

                <Heading fontSize="3xl" marginTop={12} marginBottom={4}>
                  {frontmatter.mainpitch.title}
                </Heading>
                <Text>{frontmatter.mainpitch.description}</Text>
              </SlideFade>
            </Flex>
            <Flex flex={1} direction="column" paddingLeft={[0, 8]}>
              <SlideFade in={true} offsetX={90}>
                <Heading fontSize="3xl" marginBottom={4}>
                  Technologies
                </Heading>
                <Box>
                  {frontmatter.tags.map(tag => {
                    return (
                      <Tag
                        marginRight={2}
                        marginBottom={2}
                        variant="outline"
                        size={"lg"}
                        colorScheme="gray"
                        key={tag}
                      >
                        {tag}
                      </Tag>
                    )
                  })}
                </Box>
              </SlideFade>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  )
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        templateKey
        title
        image
        name
        position
        location
        tags
        mainpitch {
          title
          description
        }
      }
    }
  }
`
