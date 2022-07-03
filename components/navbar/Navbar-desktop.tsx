import * as React from "react";
import NextLink from "next/link";
import { Badge, Button, HStack, IconButton, Spacer } from "@chakra-ui/react";
import { FaInstagram, FaDiscord, FaYoutube, FaSteam } from "react-icons/fa";
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

export const NavbarDesktop: React.FC = () => {
  return (
    <HeaderLayout>
      <HStack w="full" h="full" justify="center">
        <HStack>
          <HomeButton />

          {/* Temporary redirect to coming soon page */}
          <NextLink href="/member" passHref>
            <Button as="a" variant="ghost" target="_blank">
              Member
              <Badge colorScheme="yellow" ml={3}>
                Coming Soon
              </Badge>
            </Button>
          </NextLink>
        </HStack>

        <Spacer />

        <HStack>
          {NAV_SOCIAL_LINKS.map(([name, href, AsIcon]) => (
            <NextLink key={name} href={href} passHref>
              <IconButton
                as="a"
                aria-label="Menu Icon"
                variant="ghost"
                target="_blank"
                icon={<AsIcon />}
              />
            </NextLink>
          ))}
        </HStack>

        <ThemeButton variant="outline" />
      </HStack>
    </HeaderLayout>
  );
};
