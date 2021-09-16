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

import { graphql, useStaticQuery } from "gatsby"

import { ChakraProvider } from "@chakra-ui/react"
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
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer></Footer>
    </ChakraProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
