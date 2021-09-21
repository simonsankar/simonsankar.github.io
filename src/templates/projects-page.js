import {
  Flex,
  SlideFade,
  Heading,
  Grid,
  Text,
  Stack,
  Box,
  Image,
  Center,
  Button,
  Link,
  Divider,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react"

import Layout from "../components/layout"
import React from "react"
import Seo from "../components/seo"

const ProjectItem = () => {
  return (
    <Center py={6}>
      <Box
        maxW={"445px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Box bg={"gray.100"} mt={-6} mx={-6} mb={6} pos={"relative"}>
          <Image
            src={
              "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
            layout={"fill"}
          />
        </Box>
        <Stack>
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
          >
            Boost your conversion rate
          </Heading>
          <Text color={"gray.500"}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </Text>
        </Stack>
        <Divider marginBlock={4} />
        <HStack spacing={2} align="right" justifyContent="end">
          <Button
            as={Link}
            href="https://docs.google.com/document/d/1qA5lSskEknnegBoC3FRVeK4KRCb9rsAuDetArvRg7rM/edit?usp=sharing"
            target="_blank"
            alt="Resume"
            variant="solid"
            size="md"
            colorScheme="brand"
            textTransform="uppercase"
          >
            View
          </Button>
          <Button
            as={Link}
            href="https://docs.google.com/document/d/1qA5lSskEknnegBoC3FRVeK4KRCb9rsAuDetArvRg7rM/edit?usp=sharing"
            target="_blank"
            alt="Resume"
            variant="solid"
            size="md"
            colorScheme="gray"
            textTransform="uppercase"
          >
            Source
          </Button>
        </HStack>
      </Box>
    </Center>
  )
}

const ProjectsPage = () => {
  return (
    <Layout>
      <Seo title="Projects" />

      <Flex
        height="full"
        width="full"
        style={{ minHeight: `calc(100vh - 105px)` }}
        paddingInline={[8, 8, 8, 8, "15%", "20%"]}
        direction="column"
      >
        <SlideFade in={true} offsetX={-90}>
          <Heading
            marginTop={[4, 8]}
            fontSize={{ base: "4xl", md: "4xl", lg: "5xl", xl: "6xl" }}
            textTransform="uppercase"
          >
            Projects
          </Heading>
        </SlideFade>
        <Box marginBlock={2} height={[5, 10]} borderLeftWidth="5px"></Box>
        <Grid
          templateColumns={{
            base: `repeat(1, 1fr)`,
            sm: `repeat(1, 1fr)`,
            md: `repeat(2, 1fr)`,
            lg: `repeat(3, 1fr)`,
            xl: `repeat(3, 1fr)`,
          }}
          gap={8}
        >
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
        </Grid>
      </Flex>
    </Layout>
  )
}
export default ProjectsPage

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
