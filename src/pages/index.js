import * as React from "react"

import { Box, Heading } from "@chakra-ui/react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import ToggleColourMode from "../components/toggleColourMode"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Box
      height="full"
      width="full"
      style={{ minHeight: `calc(100vh - 63px)` }}
      padding={8}
    >
      <Heading>BLOG</Heading>
      <p>
        Welcome to your new Gatsby site.
        <ToggleColourMode />
      </p>
      <p>Now go build something great.</p>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p>
    </Box>
  </Layout>
)

export default IndexPage
