import * as React from "react";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import {
  Box,
  Container,
  HStack,
  Button,
  Icon,
  useToken,
  Heading,
  Spacer,
  Divider,
} from "@chakra-ui/react";
import {
  FaMoon,
  FaSun,
  FaInstagram,
  FaDiscord,
  FaYoutube,
  FaSteam,
  FaLiraSign,
} from "react-icons/fa";
import { IconType } from "react-icons/lib";
import NextLink from "next/link";
import siteConfig from "../../config/site";

const NAV_SOCIAL_LINKS: [string, string, IconType][] = [
  ["Instagram", siteConfig.socials.Instagram, FaInstagram],
  ["Discord", siteConfig.socials.Discord, FaDiscord],
  ["YouTube", siteConfig.socials.YouTube, FaYoutube],
  ["Steam", siteConfig.socials.Steam, FaSteam],
];

export const NavbarDesktop: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const [lightColor, darkColor] = useToken("colors", [
    "gray.900",
    "gray.50",
  ]) as [string, string];

  const bgColor = useColorModeValue(darkColor, lightColor);
  const color = useColorModeValue("gray.800", "yellow.300");

  return (
    <>
      <Box w="100%" position="fixed" zIndex={100} backdropFilter="blur(14px)">
        <Container
          as="header"
          maxW="container.lg"
          maxH={["100%", "100vh"]}
          h="14vh"
          py={6}
        >
          <HStack as="nav" w="100%" alignItems="flex-start">
            <HStack>
              <NextLink href="/" passHref>
                <Button as="a" variant="ghost" color={color}>
                  Home
                </Button>
              </NextLink>

              <NextLink href="#" passHref>
                <Button as="a" variant="ghost">
                  Coming Soon
                </Button>
              </NextLink>
            </HStack>

            <Spacer />

            <HStack>
              {NAV_SOCIAL_LINKS.map(([name, href, AsIcon]) => (
                <NextLink key={name} href={href} passHref>
                  <Button as="a" px={2} variant="ghost" target="_blank">
                    <Icon as={AsIcon} />
                  </Button>
                </NextLink>
              ))}
            </HStack>

            <HStack>
              <Button
                color={color}
                ml={4}
                variant="outline"
                onClick={toggleColorMode}
              >
                {colorMode === "light" ? <FaMoon /> : <FaSun />}
              </Button>
            </HStack>
          </HStack>
        </Container>
        <Divider />
      </Box>
    </>
  );
};
