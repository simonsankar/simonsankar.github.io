import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"

import Logo from "./logo"
import React from "react"

export default function LargeWithLogoLeft() {
  return (
    <Box
      bg={useColorModeValue("gray.200", "gray.800")}
      color={useColorModeValue("gray.800", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <Stack spacing={0} align="center">
          <Logo />
          <Text fontSize={"sm"}>Made with 🗲 by Simon Sankar</Text>
          <Text fontSize={"sm"}>© 2021</Text>
        </Stack>
      </Container>
    </Box>
  )
}
