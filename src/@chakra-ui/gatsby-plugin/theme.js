import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

const theme = extendTheme({
  fonts: {
    initialColorMode: "light",
    useSystemColorMode: true,
    heading: "Faustina",
    body: "Poppins",
  },
  colors: {
    brand: {
      50: "#ffe6ec",
      100: "#f7bdc9",
      200: "#ec93a4",
      300: "#e36980",
      400: "#d93f5c",
      500: "#c02643",
      600: "#961b34",
      700: "#6d1224",
      800: "#430915",
      900: "#1d0005",
    },
    gray: {
      50: "#eff3f5",
      100: " #cdd8e6",
      200: " #afbed0",
      300: " #90a4bb",
      400: " #728aa7",
      500: " #58708d",
      600: " #44576f",
      700: " #2f3e50",
      800: " #232f3e",
      900: " #050c18",
    },
  },
  shadows: {
    outline: `0 0 0 2px #58708d`,
  },
  styles: {
    global: props => ({
      body: {
        color: mode("gray.800", "gray.100")(props),
        bg: mode("gray.50", "gray.600")(props),
      },
    }),
  },
})

export default theme
