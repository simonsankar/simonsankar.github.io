/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import "@fontsource/abel/400.css"
import "@fontsource/nunito/400.css"

import * as React from "react"

import { graphql, useStaticQuery } from "gatsby"

import Footer from "./footer"
import Header from "./header"
import PropTypes from "prop-types"

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
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

      {children}
      <Footer></Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
