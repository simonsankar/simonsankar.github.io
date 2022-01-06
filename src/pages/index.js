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
import bg from "../images/bg.svg"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <Flex
        direction={["column-reverse", "row"]}
        style={{
          backgroundImage: `url("${bg}")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "0% 50%",
        }}
        paddingInline={8}
        bg={useColorModeValue("gray.100", "gray.700")}
        color={useColorModeValue("gray.700", "gray.50")}
        flex={1}
        position="relative"
        alignItems={"stretch"}
        justifyContent="space-around"
      >
        <Flex flex={3} justify={"center"} align={"center"}>
          <Flex
            flexDirection={["column-reverse", "row"]}
            alignItems="center"
            justify="space-between"
          >
            <SlideFade delay={1.05} in={true} offsetX={-90}>
              <Stack
                direction={["row", "column"]}
                spacing="4"
                marginBlock={[8, 0]}
              >
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
            <Box paddingInline={[0, 10, 20, 40]}>
              <SlideFade delay={0.4} in={true} offsetY={90}>
                <Text
                  fontFamily={"heading"}
                  fontSize={{ base: "3xl", md: "5xl", lg: "7xl", xl: "7xl" }}
                >
                  Hi There,
                </Text>
              </SlideFade>

              <SlideFade delay={0.55} in={true} offsetY={90}>
                <span>
                  <Text
                    fontSize={{ base: "3xl", md: "6xl", lg: "7xl", xl: "7xl" }}
                    display="inline"
                    marginRight={2}
                  >
                    I am
                  </Text>
                  <Text
                    fontSize={{ base: "3xl", md: "6xl", lg: "7xl", xl: "7xl" }}
                    fontWeight="bold"
                    color={useColorModeValue("brand.400", "brand.300")}
                    display="inline-block"
                    position="relative"
                  >
                    Simon Sankar
                    <Text
                      as="span"
                      fontSize={{
                        base: "3xl",
                        md: "6xl",
                        lg: "7xl",
                        xl: "7xl",
                      }}
                      display="inline"
                      fontWeight="medium"
                      color={useColorModeValue("gray.700", "gray.100")}
                      marginRight={2}
                    >
                      {","}
                    </Text>
                  </Text>
                </span>
              </SlideFade>
              <SlideFade delay={0.7} in={true} offsetY={90}>
                <Text
                  fontFamily={"heading"}
                  fontSize={{ base: "xl", md: "2xl", lg: "3xl", xl: "5xl" }}
                >
                  a Frontend Developer who loves building apps!
                </Text>
              </SlideFade>
              <Box
                marginBlock="2"
                height={[10, 20]}
                borderLeftWidth="5px"
              ></Box>
              <SlideFade delay={0.85} in={true} offsetY={90}>
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
              </SlideFade>
            </Box>
          </Flex>
        </Flex>

        <Flex align="center" justify="center" flex={1} paddingBlock="4">
          <SlideFade delay={1.05} in={true} offsetX={90}>
            <Box
              boxShadow="lg"
              border="5px solid"
              borderBottomWidth={["20px", "40px"]}
              backgroundColor={"gray.500"}
              borderColor={useColorModeValue("gray.50", "gray.800")}
              w={[120, 200, 240, 340, 400]}
            >
              <StaticImage
                src="../images/avatar.jpeg"
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="Simon Sankar"
              />
            </Box>
          </SlideFade>
        </Flex>
      </Flex>
    </Layout>
  )
}

export default IndexPage
