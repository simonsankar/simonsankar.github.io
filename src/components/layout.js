/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import "./layout.css"
import "@fontsource/abel/400.css"
import "@fontsource/nunito/400.css"

import * as React from "react"

import { Box, ChakraProvider } from "@chakra-ui/react"
import { graphql, useStaticQuery } from "gatsby"

import Footer from "./footer"
import Header from "./header"
import PropTypes from "prop-types"
import theme from "../theme"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ChakraProvider theme={theme} resetCSS={true} portalZIndex={40}>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Box style={{ minHeight: `calc(100vh - 63px)` }} padding={"4"}>
        <main>{children}</main>
      </Box>
      <Footer></Footer>
    </ChakraProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
