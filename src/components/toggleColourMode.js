import { IconButton, useColorMode } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"

import React from "react"

const ToggleColourMode = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <IconButton
      variant="ghost"
      onClick={toggleColorMode}
      aria-label="Toggle Colour Mode"
      icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
    />
  )
}

export default ToggleColourMode
