import * as React from "react";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  LightMode,
  Link,
  Text,
  useBreakpointValue,
  VStack,
  HStack,
  Grid,
  Image,
  useToken,
} from "@chakra-ui/react";
import { FaInstagram, FaDiscord, FaYoutube, FaSteam } from "react-icons/fa";

import { IconType } from "react-icons/lib";
import siteConfig from "../../config/site";

const SOCIAL_LINKS: [string, string, IconType, string][] = [
  ["Instagram", siteConfig.socials.Instagram, FaInstagram, "pink"],
  ["Discord", siteConfig.socials.Discord, FaDiscord, "purple"],
  ["YouTube", siteConfig.socials.YouTube, FaYoutube, "red"],
  ["Steam", siteConfig.socials.Steam, FaSteam, "blue"],
];

export const SectionHero: React.FC = () => {
  const [lightColor, darkColor] = useToken("colors", [
    "gray.900",
    "gray.50",
  ]) as [string, string];

  const bgSvg = useColorModeValue(darkColor, lightColor);
  const color = useColorModeValue("gray.800", "yellow.300");

  const buttonSize = useBreakpointValue(["sm", "md", "md", "lg"]);

  return (
    <VStack as="section" w="full" minH="90vh" justify="space-between">
      <Container id="content-hero" maxW="container.lg" py={4}>
        <VStack w="full" alignItems="flex-start" pt={28} spacing={10}>
          <HStack w="full" spacing={4}>
            <Box borderRadius="lg">
              <Image
                boxSize={["64px", "75px"]}
                objectFit="contain"
                src="xtra.png"
                alt="xtra logo"
                borderRadius="lg"
              />
            </Box>

            <VStack
              height={["full", "100px"]}
              alignItems="flex-start"
              justifyContent="center"
            >
              <Heading
                as="h3"
                fontWeight="bold"
                fontSize={["2xl", "4xl"]}
                textAlign="center"
                textTransform="uppercase"
                textColor="yellow.300"
                color={color}
              >
                Official X-TRA
              </Heading>

              <Text
                fontSize={["xs", "md"]}
                fontWeight="medium"
                pl={1}
                textTransform="capitalize"
              >
                We are not just solidarity, but we are family
              </Text>
            </VStack>
          </HStack>

          <VStack w="full" alignItems="flex-start" textAlign="left" spacing={4}>
            <Heading
              as="h1"
              fontSize={["1.5rem", "3.25rem"]}
              fontWeight="800"
              lineHeight="1.4"
              textTransform="capitalize"
            >
              X-TRA is a Group of People Graduated from AR-RAHMAT Junior High
              School.
            </Heading>
            <Text fontSize={["lg", "3xl"]} textColor="gray.400">
              Let{"'"}s get acquainted and have a good connection with us! Greet
              us via the social media links below.
            </Text>
          </VStack>

          <LightMode>
            <Grid
              width={{ base: "full", lg: "75%" }}
              templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
              gap={{ base: 4, lg: 6 }}
            >
              {SOCIAL_LINKS.map(([name, href, AsIcon, colorScheme]) => (
                <Button
                  key={name}
                  as="a"
                  href={href}
                  colorScheme={colorScheme}
                  leftIcon={<Icon as={AsIcon} boxSize={[4, 5, 6]} />}
                  size={buttonSize}
                  target="_blank"
                >
                  {name}
                </Button>
              ))}
            </Grid>
          </LightMode>
        </VStack>
      </Container>

      <Box id="svg-hero" position="relative" w="full">
        <svg viewBox="0 0 1440 240">
          <path
            fill={bgSvg}
            fillOpacity="1"
            d="M0,64L48,58.7C96,53,192,43,288,32C384,21,480,11,576,48C672,85,768,171,864,197.3C960,224,1056,192,1152,149.3C1248,107,1344,53,1392,26.7L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </Box>
    </VStack>
  );
};
