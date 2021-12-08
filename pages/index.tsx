import type { NextPage } from "next";
import { Button } from "@chakra-ui/button";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import {
  Box,
  Container,
  Heading,
  Icon,
  LightMode,
  Link,
  Text,
  useToken,
  useBreakpointValue,
  VStack,
  HStack,
  Grid,
  Image,
} from "@chakra-ui/react";
import { FaInstagram, FaDiscord, FaYoutube, FaSteam } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import siteConfig from "../config/site";
import { SectionMoments } from "../components/sections/Section-moments";
import { SectionActivities } from "../components/sections/Section-activities";

const SOCIAL_LINKS: [string, string, IconType, string][] = [
  ["Instagram", siteConfig.socials.Instagram, FaInstagram, "pink"],
  ["Discord", siteConfig.socials.Discord, FaDiscord, "purple"],
  ["YouTube", siteConfig.socials.YouTube, FaYoutube, "red"],
  ["Steam", siteConfig.socials.Steam, FaSteam, "blue"],
];

const Home: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const [lightColor, darkColor] = useToken("colors", [
    "gray.900",
    "gray.50",
  ]) as [string, string];

  const bgSvg = useColorModeValue(darkColor, lightColor);
  const color = useColorModeValue("gray.800", "yellow.300");

  const buttonSize = useBreakpointValue(["sm", "md", "lg"]);

  return (
    <>
      <Box pos="fixed" top={0} zIndex={-1} h="14vh" w="100%" bgColor={bgSvg} />

      <Box
        as="svg"
        pos="absolute"
        viewBox="0 0 1440 300"
        zIndex={-1}
        top="14vh"
        transform="rotate(180deg)"
      >
        <path
          fill={bgSvg}
          fillOpacity="1"
          d="M0,160L40,144C80,128,160,96,240,85.3C320,75,400,85,480,106.7C560,128,640,160,720,192C800,224,880,256,960,256C1040,256,1120,224,1200,192C1280,160,1360,128,1400,112L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        />
      </Box>

      <Container
        as="section"
        maxW="container.lg"
        maxH={["100%", "100vh"]}
        h="100%"
        py={4}
      >
        <VStack
          w="100%"
          spacing="1.5rem"
          alignItems="flex-start"
          mt={["6rem", "17vh"]}
        >
          <HStack w="100%" spacing="1rem">
            <Box borderRadius="lg">
              <Image
                boxSize="75px"
                borderRadius="lg"
                src="https://raw.githubusercontent.com/official-xtra/dev-test-website/main/public/xtra.png"
                alt="xtra logo"
              />
            </Box>

            <VStack
              height={["100%", "100px"]}
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

          <VStack
            w="100%"
            alignItems="flex-start"
            textAlign="left"
            spacing="1rem"
          >
            <Heading
              as="h1"
              fontSize={["1.5rem", "3.25rem"]}
              lineHeight="1.5"
              textTransform="capitalize"
            >
              X-TRA is a Group of People Graduated from AR-RAHMAT Junior High
              School
            </Heading>
            <Text fontSize={["lg", "3xl"]} textColor="gray.400">
              Let{"'"}s get acquainted and have a good connection with us! Greet
              us via the social media links below.
            </Text>
          </VStack>

          <LightMode>
            <Grid
              width={{ base: "100%", lg: "75%" }}
              templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
              gap={{ base: 3, lg: 6 }}
            >
              {SOCIAL_LINKS.map(([btnName, href, AsIcon, colorScheme]) => (
                <Button
                  key={btnName}
                  as="a"
                  colorScheme={colorScheme}
                  href={href}
                  leftIcon={<Icon as={AsIcon} boxSize={[4, 5, 6]} />}
                  size={buttonSize}
                  mt={4}
                  target="_blank"
                >
                  {btnName}
                </Button>
              ))}
            </Grid>
          </LightMode>
        </VStack>
      </Container>

      <Box as="svg" pos="relative" viewBox="0 0 1440 240" zIndex={-1}>
        <path
          fill={bgSvg}
          fillOpacity="1"
          d="M0,64L48,58.7C96,53,192,43,288,32C384,21,480,11,576,48C672,85,768,171,864,197.3C960,224,1056,192,1152,149.3C1248,107,1344,53,1392,26.7L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </Box>

      <SectionMoments />

      <Box
        as="svg"
        pos="relative"
        viewBox="0 0 1440 240"
        zIndex={-1}
        transform="rotate(180deg)"
      >
        <path
          fill={bgSvg}
          fillOpacity="1"
          d="M0,64L48,58.7C96,53,192,43,288,32C384,21,480,11,576,48C672,85,768,171,864,197.3C960,224,1056,192,1152,149.3C1248,107,1344,53,1392,26.7L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </Box>

      <SectionActivities />
    </>
  );
};

export default Home;
