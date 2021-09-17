import * as React from "react"

import { Box, Flex, useColorModeValue, Stack, Text } from "@chakra-ui/react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import ToggleColourMode from "../components/toggleColourMode"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Stack
      direction={["column", "row"]}
      height="full"
      width="full"
      style={{ minHeight: `calc(100vh - 105px)` }}
      padding={8}
      bg={useColorModeValue("gray.100", "gray.700")}
      color={useColorModeValue("gray.700", "gray.50")}
      flex={1}
      position="relative"
      align="center"
    >
      <Flex direction="column">
        <Box padding={10} bg={useColorModeValue("gray.200", "gray.600")}>
          <Text fontSize="3xl">Hi There,</Text>
          <span>
            <Text fontSize="5xl" display="inline" marginRight={2}>
              I am
            </Text>
            <Text
              fontSize="5xl"
              color={useColorModeValue("gray.500", "gray.200")}
              display="inline-block"
            >
              Simon Sankar
            </Text>
          </span>
          <Text>
            Welcome to your new Gatsby site.
            <ToggleColourMode />
          </Text>
        </Box>
      </Flex>
      <Box flex={1}>
        <p>Now go build something great.</p>
        <StaticImage
          src="../images/gatsby-astronaut.png"
          width={300}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="A Gatsby astronaut"
          style={{ marginBottom: `1.45rem` }}
        />
        <p>
          <Link to="/page-2/">Go to page 2</Link> <br />
          <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
        </p>
      </Box>
    </Stack>
  </Layout>
)

export default IndexPage
