---
templateKey: blog-post
title: Sabotage - 1975 (Heavy Blues, Hard Rock)
date: 2021-09-20T21:43:00.952Z
description: is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it to make a type
  specimen book. It has survived not only five centuries, but also the leap into
  electronic
image: https://upload.wikimedia.org/wikipedia/en/1/10/Black_Sabbath_Sabotage.jpg
tags:
  - hacking
  - mrrobot
---

# Markdown Test File

**See the raw source of [TEST.md](https://raw.githubusercontent.com/mxstbr/markdown-test-file/master/TEST.md) for the deets!** ([this is the test file rendered](./TEST.md))
This repo contains a markdown file which covers a lot of the syntax. We use it for testing our markdown support.

## Inspiration

```jsx
import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"

import Logo from "./logo"
import React from "react"

export default function LargeWithLogoLeft() {
  const wonka = "qwerty"
  return (
    <Box
      bg={useColorModeValue("gray.200", "gray.800")}
      color={useColorModeValue("gray.800", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <Stack spacing={0} align="center">
          <Logo />
          <Text fontSize={"sm"}>© 2021 Simon Sankar</Text>
        </Stack>
      </Container>
    </Box>
  )
}
```

```typescript
const customer: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  // Create Customer
  const createCustomerOptions: RouteShorthandOptions = {
    schema: CreateCustomerSchema,
  };
  fastify.post<ICreateCustomerRequest>(
    "",
    createCustomerOptions,
    async (request, reply) => {
      const { name, phones = [], emails = [], tags = [] } = request.body;
      request.log.info("Creating a new customer", name);

      if (name.length < 3)
        reply.status(400).send({
          message: "Name should be at least 3 characters in length",
        });
      const customer = await fastify.prisma.customer.create({
        data: {
          name,
          phones: {
            createMany: {
              data: phones,
            },
          },
          emails: {
            createMany: {
              data: emails,
            },
          },
          tags: {
            set: tags,
          },
        },
      });
      if (customer) reply.status(201).send({ id: customer.id });
    }
  );

```
