import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  fonts: {
    initialColorMode: "light",
    useSystemColorMode: true,
    heading: "Abel",
    body: "Nunito",
  },
})

export default theme
