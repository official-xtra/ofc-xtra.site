import * as React from "react";
import NextLink from "next/link";
import { useColorModeValue } from "@chakra-ui/color-mode";
import {
  Box,
  Container,
  HStack,
  Stack,
  Link,
  Text,
  VStack,
  Spacer,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import siteConfig from "../../config/site";
import { BaseLink } from "../links/BaseLink";

export const Footer: React.FC = () => {
  const bgColor = useColorModeValue("gray.200", "gray.900");
  const textColor = useColorModeValue("gray.800", "yellow.300");

  return (
    <Box as="footer" bgColor={bgColor}>
      <Container maxW="container.lg" h={["full", "45vh"]} py={[12, 16]}>
        <Stack
          direction={["column-reverse", "row"]}
          h="full"
          align="flex-start"
          justify="flex-start"
          spacing={[16, 10]}
        >
          <VStack
            align="flex-start"
            textAlign="left"
            fontSize="sm"
            spacing={[4, 6]}
          >
            <Text>
              This site was built using{" "}
              <BaseLink href="https://nextjs.org" name="Next.js" />
              , <BaseLink href="https://chakra-ui.com" name="Chakra UI" />, and
              written in{" "}
              <BaseLink
                href="https://www.typescriptlang.org"
                name="TypeScript"
              />
              .
            </Text>
            <Text>Code Licensed under MIT License.</Text>
            <Text>
              © 2021-present{" "}
              <BaseLink href="https://ofc-xtra.site" name="Official X-TRA" />.{" "}
              <Box as="span" opacity="0.7">
                version-1.0
              </Box>
            </Text>
          </VStack>

          <Spacer display={["none", "block"]} />

          <HStack justify="flex-start" align="flex-start" spacing={16}>
            <VStack align="start">
              <Text
                fontSize={["sm", "md"]}
                letterSpacing="widest"
                textColor={textColor}
                pb={2}
              >
                LINKS
              </Text>
              <VStack align="start" spacing={3}>
                {Object.entries(siteConfig.links).map(([link, href]) => (
                  <NextLink key={link} href={href} passHref>
                    <Link
                      fontSize="sm"
                      cursor="pointer"
                      _hover={{
                        textDecoration: "underline",
                      }}
                    >
                      {link}
                    </Link>
                  </NextLink>
                ))}
              </VStack>
            </VStack>

            <VStack align="start">
              <Text
                fontSize={["sm", "md"]}
                letterSpacing="widest"
                textColor={textColor}
                pb={2}
              >
                SOCIALS
              </Text>
              <VStack align="start" spacing={3}>
                {Object.entries(siteConfig.socials).map(([social, href]) => (
                  <Link key={social} href={href} fontSize="sm" isExternal>
                    {social} <ExternalLinkIcon boxSize={3} mx="2px" />
                  </Link>
                ))}
              </VStack>
            </VStack>
          </HStack>
        </Stack>
      </Container>
    </Box>
  );
};
