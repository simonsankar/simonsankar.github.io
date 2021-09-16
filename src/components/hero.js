import { Flex } from "@chakra-ui/react"
import React from "react"

const Hero = ({ children }) => {
  return (
    <Flex
      bg="green.300"
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
