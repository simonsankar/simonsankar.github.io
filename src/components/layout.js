import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import "@fontsource/work-sans/400.css"
import "@fontsource/days-one/400.css"

import Footer from "./footer"
import Header from "./header"
import { Flex } from "@chakra-ui/react"

const Layout = ({ children, location }) => {
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
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Flex style={{ minHeight: `calc(100vh - 105px)` }}>{children}</Flex>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
