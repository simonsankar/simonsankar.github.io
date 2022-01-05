import * as React from "react"
import { Flex, Heading, Text } from "@chakra-ui/react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <Flex
      flex={1}
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Heading fontSize={"9xl"}>404</Heading>
      <Text fontSize={"5xl"}>Not Found</Text>
      <Text fontSize={"3xl"}>
        You just hit a route that doesn&#39;t exist... the sadness.
      </Text>
    </Flex>
  </Layout>
)

export default NotFoundPage
