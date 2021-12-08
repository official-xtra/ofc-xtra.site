import * as React from "react";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import {
  Box,
  Container,
  HStack,
  Button,
  Icon,
  IconButton,
  useToken,
  Heading,
  Spacer,
  Divider,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import {
  FaMoon,
  FaSun,
  FaInstagram,
  FaDiscord,
  FaYoutube,
  FaSteam,
} from "react-icons/fa";
import { HamburgerIcon } from "@chakra-ui/icons";
import { IconType } from "react-icons/lib";
import NextLink from "next/link";
import siteConfig from "../../config/site";

const NAV_SOCIAL_LINKS: [string, string, IconType][] = [
  ["Instagram", siteConfig.socials.Instagram, FaInstagram],
  ["Discord", siteConfig.socials.Discord, FaDiscord],
  ["YouTube", siteConfig.socials.YouTube, FaYoutube],
  ["Steam", siteConfig.socials.Steam, FaSteam],
];

export const NavbarMobile: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const [lightColor, darkColor] = useToken("colors", [
    "gray.900",
    "gray.50",
  ]) as [string, string];

  const bgSvg = useColorModeValue(darkColor, lightColor);
  const color = useColorModeValue("gray.800", "yellow.300");
  const bgMenu = useColorModeValue("gray.200", "gray.800");

  return (
    <>
      <Box w="100%" position="fixed" zIndex={100} backdropFilter="blur(14px)">
        <Container
          as="header"
          maxW="container.lg"
          maxH={["100%", "100vh"]}
          py={4}
        >
          <HStack as="nav" w="100%" alignItems="flex-start">
            <HStack>
              <NextLink href="/" passHref>
                <Button as="a" variant="ghost" color={color}>
                  Home
                </Button>
              </NextLink>

              <NextLink href="#" passHref>
                <Button as="a" variant="ghost" opacity="0.5">
                  Coming Soon
                </Button>
              </NextLink>
            </HStack>

            <Spacer />

            <HStack>
              <Button variant="ghost" onClick={toggleColorMode} px={2}>
                {colorMode === "light" ? <FaMoon /> : <FaSun />}
              </Button>
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<HamburgerIcon />}
                  variant="outline"
                />
                <MenuList bgColor={bgMenu}>
                  {NAV_SOCIAL_LINKS.map(([name, href, AsIcon]) => (
                    <NextLink key={name} href={href} passHref>
                      <MenuItem as="a" icon={<AsIcon />} target="_blank">
                        {name}
                      </MenuItem>
                    </NextLink>
                  ))}
                </MenuList>
              </Menu>
            </HStack>
          </HStack>
        </Container>
        <Divider />
      </Box>
    </>
  );
};
