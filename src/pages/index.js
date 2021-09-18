import * as React from "react"

import { Box, Flex, useColorModeValue, Heading, Text } from "@chakra-ui/react"
import { Link } from "@chakra-ui/react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Flex
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
      justifyContent="space-around"
    >
      <Flex direction="column">
        <Box paddingInline={10} borderLeft="5px solid">
          <Text fontFamily="Faustina" fontSize="5xl">
            Hi There,
          </Text>
          <span>
            <Text fontSize="7xl" display="inline" marginRight={2}>
              I am
            </Text>
            <Text
              fontSize="7xl"
              fontWeight="bold"
              color={useColorModeValue("brand.400", "brand.300")}
              display="inline-block"
              position="relative"
            >
              Simon Sankar
            </Text>
          </span>
          <Text fontFamily="Faustina" fontSize="3xl">
            Apart from being a{" "}
            <Link
              href="https://en.wikipedia.org/wiki/Lionel_Messi"
              alt="Lionel Messi"
              target="_blank"
              color={useColorModeValue("gray.600", "gray.100")}
            >
              Lionel Messi
            </Link>{" "}
            acoloyte, I build things for the web!
          </Text>
        </Box>
      </Flex>
      <Flex align="center" justify="center">
        <Box border="5px solid" borderBottomWidth="40px" padding={4}>
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
      </Flex>
    </Flex>
  </Layout>
)

export default IndexPage
