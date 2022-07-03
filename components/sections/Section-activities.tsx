import * as React from "react";
import { LightMode, useColorModeValue } from "@chakra-ui/color-mode";
import {
  Container,
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  Center,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { YoutubeEmbedMobile } from "../embed/YoutubeEmbed-mobile";
import { YoutubeEmbedDesktop } from "../embed/YoutubeEmbed-desktop";

export const SectionActivities: React.FC = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const buttonSize = useBreakpointValue(["sm", "md", "lg"]);

  const boxColor = useColorModeValue("gray.800", "yellow.300");

  return (
    <Container as="section" maxW="container.lg" h="full" py={4}>
      <VStack alignItems="center" textAlign="center" py={[12, 16]} spacing={4}>
        <Heading as="h2" fontSize={["2xl", "3xl"]} textColor={boxColor}>
          Activities
        </Heading>
        <Text>We also share some of our activities on our youtube channel</Text>
      </VStack>

      <VStack w="full" spacing={[12, 24]}>
        <Flex
          w="full"
          h="full"
          justifyContent={["center", "flex-start"]}
          alignItems="flex-start"
        >
          {isMobile ? (
            <YoutubeEmbedMobile embedId="x41OJgZVvmQ" />
          ) : (
            <Flex pos="relative" w={["300px", "560px"]} h={["170px", "315px"]}>
              <Box
                pos="relative"
                left="30px"
                w="full"
                h="full"
                borderWidth={["2px", "4px"]}
                borderColor={boxColor}
                my={[4, 8]}
              >
                <YoutubeEmbedDesktop embedId="x41OJgZVvmQ" />
              </Box>
            </Flex>
          )}
        </Flex>

        <Flex
          w="full"
          h="full"
          justifyContent={["center", "flex-end"]}
          alignItems="flex-end"
        >
          {isMobile ? (
            <YoutubeEmbedMobile embedId="nQa1vVLBH3k" />
          ) : (
            <Flex pos="relative" w={["300px", "560px"]} h={["170px", "315px"]}>
              <Box
                pos="relative"
                left="30px"
                w="full"
                h="full"
                borderWidth={["2px", "4px"]}
                borderColor={boxColor}
                my={[4, 8]}
              >
                <YoutubeEmbedDesktop embedId="nQa1vVLBH3k" />
              </Box>
            </Flex>
          )}
        </Flex>
      </VStack>

      <LightMode>
        <Center>
          <Button
            as="a"
            href="https://www.youtube.com/channel/UCF8XFs88f6xNLbaRz3DjMBw"
            rightIcon={<ArrowForwardIcon />}
            size={buttonSize}
            colorScheme="yellow"
            my={[16, 28]}
            target="_blank"
          >
            See other activities
          </Button>
        </Center>
      </LightMode>
    </Container>
  );
};
