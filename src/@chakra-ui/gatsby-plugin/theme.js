import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

const theme = extendTheme({
  fonts: {
    initialColorMode: "light",
    useSystemColorMode: true,
    heading: "Abel",
    body: "Nunito",
  },
  colors: {
    brand: {
      50: " #e8f3fe",
      100: " #cdd8e6",
      200: " #afbed0",
      300: " #90a4bb",
      400: " #728aa7",
      500: " #58708d",
      600: " #44576f",
      700: " #2f3e50",
      800: " #1a2532",
      900: " #050c18",
    },
  },
  styles: {
    global: props => ({
      body: {
        color: mode("brand.800", "brand.200")(props),
        bg: mode("gray.50", "brand.800")(props),
      },
    }),
  },
})

export default theme
