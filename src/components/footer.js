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
      bg={useColorModeValue("brand.200", "brand.800")}
      color={useColorModeValue("brand.800", "brand.200")}
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
