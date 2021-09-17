import { Link, useBreakpointValue, useColorModeValue } from "@chakra-ui/react"

import { Link as GatsbyLink } from "gatsby"
import React from "react"

const Logo = () => {
  return (
    <Link
      as={GatsbyLink}
      margin={4}
      paddingBlock={0.5}
      paddingInline={2}
      to="/"
      textAlign={useBreakpointValue({ base: "center", md: "left" })}
      fontFamily={"heading"}
      fontSize="3xl"
      fontWeight="bold"
      letterSpacing="wider"
      border="2px"
      borderBottom="6px solid"
      color={useColorModeValue("brand.700", "brand.100")}
      _hover={{
        textDecoration: "none",
        color: useColorModeValue("brand.900", "brand.50"),
      }}
      position="relative"
      // _after={{
      //   content: '""',
      //   w: "100%",
      //   h: 1,
      //   bg: "brand.300",
      //   pos: "absolute",
      //   bottom: 0,
      //   right: 0,
      // }}
    >
      SS
    </Link>
  )
}

export default Logo
