import { Flex } from "@chakra-ui/react"
import React from "react"
import { useColorModeValue } from "@chakra-ui/react"

const Hero = ({ children, color }) => {
  return (
    <Flex
      height="full"
      width="full"
      style={{ minHeight: `calc(100vh - 63px)` }}
      padding={8}
    >
      {children}
    </Flex>
  )
}

export default Hero
