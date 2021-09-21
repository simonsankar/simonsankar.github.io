import * as React from "react"

import {
  Box,
  Flex,
  useColorModeValue,
  Text,
  Stack,
  IconButton,
  SlideFade,
} from "@chakra-ui/react"
import { Link } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Flex
      direction={["column-reverse", "row"]}
      height="full"
      width="full"
      style={{ minHeight: `calc(100vh - 105px)` }}
      paddingInline={8}
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
          <SlideFade in={true} offsetX={-90}>
            <Stack direction={["row", "column"]} spacing="4" marginTop={[8, 0]}>
              <IconButton
                as={"a"}
                aria-label="email"
                icon={<EmailIcon boxSize={7} />}
                href="mailto:sjsankar10@gmail.com"
                target="_blank"
              />
              <IconButton
                as={"a"}
                aria-label="phone"
                icon={<PhoneIcon boxSize={7} />}
                href="tel:+18687304432"
                target="_blank"
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
                aria-label="linkedin"
                href="https://www.linkedin.com/in/simon-sankar-5a82a2215/"
                target="_blank"
                icon={<FontAwesomeIcon size="2x" icon={faLinkedin} />}
              />
            </Stack>
          </SlideFade>
          <SlideFade in={true} offsetY={90}>
            <Box paddingInline={[0, 10, 20, 40]}>
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
                  <Text
                    as="span"
                    fontSize={{ base: "4xl", md: "6xl", lg: "7xl", xl: "7xl" }}
                    display="inline"
                    fontWeight="medium"
                    color={useColorModeValue("gray.700", "gray.100")}
                    marginRight={2}
                  >
                    {","}
                  </Text>
                </Text>
              </span>
              <Text
                fontFamily="Faustina"
                fontSize={{ base: "xl", md: "2xl", lg: "3xl", xl: "5xl" }}
              >
                a Frontend Developer who loves building apps!
              </Text>
              <Box
                marginBlock="2"
                height={[10, 20]}
                borderLeftWidth="5px"
              ></Box>

              <Text
                display="block"
                fontSize={{ base: "lg", md: "1xl", lg: "2xl", xl: "3xl" }}
                color={useColorModeValue("gray.600", "gray.100")}
                paddingRight={[0, 0, 0, 8, 200]}
              >
                Apart from coding for the web, I am a{" "}
                <Link
                  href="https://en.wikipedia.org/wiki/Lionel_Messi"
                  alt="Lionel Messi"
                  target="_blank"
                  color={useColorModeValue("gray.700", "gray.200")}
                >
                  Lionel Messi
                </Link>{" "}
                acoloyte and an OG Minecrafter.
              </Text>
            </Box>
          </SlideFade>
        </Flex>
      </Flex>

      <Flex align="center" justify="center" flex={1}>
        <SlideFade in={true} offsetX={90}>
          <Box border="5px solid" borderBottomWidth="40px">
            <StaticImage
              src="../images/avatar.jpeg"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="A Gatsby astronaut"
            />
          </Box>
        </SlideFade>
      </Flex>
    </Flex>
  </Layout>
)

export default IndexPage
