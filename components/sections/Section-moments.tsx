import {
  Container,
  Box,
  Flex,
  Image,
  Heading,
  Link,
  Button,
  Text,
  Center,
  VStack,
  HStack,
  Grid,
  Avatar,
  Spacer,
  useToken,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  LightMode,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/color-mode";
import * as React from "react";
import NextImage from "next/image";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import moments from "../data/moments";

const MOMENTS_DATA: [string, string, string][] = [
  [moments.one.imgUrl, moments.one.postUrl, moments.one.date],
  [moments.two.imgUrl, moments.two.postUrl, moments.two.date],
  [moments.three.imgUrl, moments.three.postUrl, moments.three.date],
  [moments.four.imgUrl, moments.four.postUrl, moments.four.date],
  [moments.five.imgUrl, moments.five.postUrl, moments.five.date],
  [moments.six.imgUrl, moments.six.postUrl, moments.six.date],
];

export const SectionMoments: React.FC = () => {
  const [lightColor, darkColor] = useToken("colors", [
    "gray.900",
    "gray.50",
  ]) as [string, string];

  const bgColor = useColorModeValue(darkColor, lightColor);
  const textColor = useColorModeValue("gray.800", "yellow.300");

  const buttonSize = useBreakpointValue(["sm", "md", "lg"]);

  return (
    <Box as="section" w="100%" h="100%" bgColor={bgColor} pb={16}>
      <Container maxW="container.lg" h="100%" py={4}>
        <VStack
          alignItems="center"
          textAlign="center"
          spacing={4}
          pb={[12, 16]}
        >
          <Heading as="h2" fontSize={["2xl", "3xl"]} textColor={textColor}>
            Moments
          </Heading>
          <Text>
            Here are some of our selected moments from various occasions
          </Text>
        </VStack>

        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
          ]}
          gap={[6, 8]}
        >
          {MOMENTS_DATA.map(([image, post, date]) => (
            <VStack
              key={image}
              w="100%"
              h="100%"
              borderWidth="1px"
              borderRadius="lg"
              boxShadow="xl"
              overflow="hidden"
            >
              <Flex w="100%" h="100%">
                <NextImage
                  width="1080"
                  height="640"
                  src={image}
                  alt="moment's picture"
                  blurDataURL={image}
                  placeholder="blur"
                />
              </Flex>

              <HStack w="100%" px={6} pt={4} pb={8} spacing={4}>
                <Avatar
                  size="md"
                  name="ofc xtra"
                  src="https://raw.githubusercontent.com/official-xtra/dev-test-website/main/public/xtra.png"
                />

                <VStack justify="flex-start" align="flex-start">
                  <Link
                    href="https://www.instagram.com/ofc.xtra/"
                    fontSize="lg"
                    fontWeight="semibold"
                    isExternal
                  >
                    ofc.xtra
                  </Link>
                  <Text fontSize="0.6rem" opacity="0.6">
                    {date}
                  </Text>
                </VStack>

                <Spacer />

                <Box>
                  <Button size="sm" as="a" href={post} target="_blank">
                    Go to Post
                  </Button>
                </Box>
              </HStack>
            </VStack>
          ))}
        </Grid>

        <LightMode>
          <Center>
            <Button
              as="a"
              href="https://www.instagram.com/ofc.xtra/"
              rightIcon={<ArrowForwardIcon />}
              size={buttonSize}
              colorScheme="yellow"
              mt={[12, 16]}
              target="_blank"
            >
              See other moments
            </Button>
          </Center>
        </LightMode>
      </Container>
    </Box>
  );
};
