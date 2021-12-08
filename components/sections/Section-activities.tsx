import * as React from "react";
import {
  LightMode,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/color-mode";
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
import YoutubeEmbed from "../embed/YoutubeEmbed";

export const SectionActivities: React.FC = () => {
  const boxColor = useColorModeValue("gray.800", "yellow.300");

  const buttonSize = useBreakpointValue(["sm", "md", "lg"]);

  return (
    <Container maxW="container.lg" h="100%" py={4}>
      <VStack alignItems="center" textAlign="center" spacing={4} pb={[12, 16]}>
        <Heading as="h2" fontSize={["2xl", "3xl"]} textColor={boxColor}>
          Activities
        </Heading>
        <Text>We also share some of our activities on our youtube channel</Text>
      </VStack>

      <VStack w="100%" spacing={["4rem", "6rem"]}>
        <Flex
          w="100%"
          h="100%"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Flex pos="relative" w={["300px", "560px"]} h={["170px", "315px"]}>
            <Box
              pos="relative"
              left="30px"
              w="100%"
              h="100%"
              borderWidth={["2px", "4px"]}
              borderColor={boxColor}
              my={[4, 8]}
            >
              <YoutubeEmbed embedId="x41OJgZVvmQ" top="-30px" left="-30px" />
            </Box>
          </Flex>
        </Flex>

        <Flex w="100%" h="100%" justifyContent="flex-end" alignItems="flex-end">
          <Flex
            pos="relative"
            right="30px"
            w={["300px", "560px"]}
            h={["170px", "315px"]}
          >
            <Box
              w="100%"
              h="100%"
              borderWidth={["2px", "4px"]}
              borderColor={boxColor}
              my={[4, 8]}
            >
              <YoutubeEmbed embedId="nQa1vVLBH3k" top="0" right="-30px" />
            </Box>
          </Flex>
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
            my={[20, 24]}
            target="_blank"
          >
            See more activities
          </Button>
        </Center>
      </LightMode>
    </Container>
  );
};
