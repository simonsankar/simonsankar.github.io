import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"

import Logo from "./logo"
import React from "react"

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  )
}

export default function LargeWithLogoLeft() {
  return (
    <Box
      bg={useColorModeValue("brand.200", "brand.700")}
      color={useColorModeValue("brand.700", "brand.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <Stack spacing={4} align="center">
          <Box>
            <Logo />
          </Box>
          <Text fontSize={"sm"}>© 2021 Simon Sankar</Text>
        </Stack>
      </Container>
    </Box>
  )
}
