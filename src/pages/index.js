import * as React from "react"

import {
  Box,
  Flex,
  useColorModeValue,
  Text,
  Stack,
  IconButton,
} from "@chakra-ui/react"
import { Link } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { EmailIcon } from "@chakra-ui/icons"

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
      <Flex direction="column" flex={3}>
        <Flex
          flexDirection={["column-reverse", "row"]}
          alignItems="center"
          justify="space-between"
        >
          <Stack direction={["row", "column"]} textAlign="center" spacing="4">
            <IconButton
              as={"a"}
              aria-label="linkedin"
              href="https://www.linkedin.com/in/simon-sankar-5a82a2215/"
              target="_blank"
              icon={<FontAwesomeIcon size="2x" icon={faLinkedin} />}
            />
            <IconButton
              as={"a"}
              aria-label="github"
              href="https://github.com/simonsankar"
              target="_blank"
              icon={<FontAwesomeIcon size="2x" icon={faGithub} />}
            />

            <IconButton
              as={"a"}
              aria-label="email"
              icon={<EmailIcon boxSize={7} />}
              href="mailto:sjsankar10@gmail.com"
              target="_blank"
            />
          </Stack>
          <Box paddingInline={[8, 10, 20, 40]}>
            <Text
              fontFamily="Faustina"
              fontSize={{ base: "2xl", md: "3xl", lg: "5xl", xl: "5xl" }}
            >
              Hi There,
            </Text>
            <span>
              <Text
                fontSize={{ base: "4xl", md: "6xl", lg: "7xl", xl: "7xl" }}
                display="inline"
                marginRight={2}
              >
                I am
              </Text>
              <Text
                fontSize={{ base: "4xl", md: "6xl", lg: "7xl", xl: "7xl" }}
                fontWeight="bold"
                color={useColorModeValue("brand.400", "brand.300")}
                display="inline-block"
                position="relative"
              >
                Simon Sankar
              </Text>
            </span>
            <Text
              fontFamily="Faustina"
              fontSize={{ base: "1xl", md: "2xl", lg: "3xl", xl: "5xl" }}
            >
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
      </Flex>
      <Flex align="center" justify="center" flex={1}>
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
