import * as React from "react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import {
  HStack,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Spacer,
} from "@chakra-ui/react";
import { FaInstagram, FaDiscord, FaYoutube, FaSteam } from "react-icons/fa";
import { HamburgerIcon } from "@chakra-ui/icons";
import { IconType } from "react-icons/lib";

import siteConfig from "../../config/site";
import { ThemeButton } from "../buttons/ThemeButton";
import { HomeButton } from "../buttons/HomeButton";
import { HeaderLayout } from "../layouts/HeaderLayout";

const NAV_SOCIAL_LINKS: [string, string, IconType][] = [
  ["Instagram", siteConfig.socials.Instagram, FaInstagram],
  ["Discord", siteConfig.socials.Discord, FaDiscord],
  ["YouTube", siteConfig.socials.YouTube, FaYoutube],
  ["Steam", siteConfig.socials.Steam, FaSteam],
];

export const NavbarMobile: React.FC = () => {
  const bgMenu = useColorModeValue("gray.200", "gray.800");

  return (
    <HeaderLayout>
      <HStack w="full" h="full" justify="center">
        <HStack>
          <HomeButton />
        </HStack>

        <Spacer />

        <HStack>
          <ThemeButton variant="ghost" />

          <Menu id="navbar-menu" isLazy>
            <MenuButton
              as={IconButton}
              aria-label="Navbar Menu"
              icon={<HamburgerIcon />}
              variant="ghost"
            />
            <MenuList bgColor={bgMenu}>
              {NAV_SOCIAL_LINKS.map(([name, href, AsIcon]) => (
                <MenuItem
                  key={name}
                  as={Link}
                  href={href}
                  icon={<AsIcon />}
                  isExternal
                >
                  {name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </HStack>
      </HStack>
    </HeaderLayout>
  );
};
