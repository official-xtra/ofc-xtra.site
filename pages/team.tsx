import Head from "next/head";
import type { NextPage } from "next";
import {
  Container,
  Stack,
  VStack,
  HStack,
  Heading,
  Text,
  Link,
  Box,
  Center,
  Image as ProfilePic,
  useToken,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import teamInfo from "../components/data/teamInfo";

const TEAM_MEMBER: [string, string, string, string][] = [
  ["Ilham Bara", teamInfo.member[1], teamInfo.socmed[1], "Lead Developer"],
  ["Amin Rizki", teamInfo.member[2], teamInfo.socmed[2], "Internals"],
  ["Sulthan Rafif", teamInfo.member[3], teamInfo.socmed[3], "Externals"],
];

const Team: NextPage = () => {
  const [lightColor, darkColor] = useToken("colors", [
    "gray.900",
    "gray.50",
  ]) as [string, string];

  const bgColor = useColorModeValue(darkColor, lightColor);
  const color = useColorModeValue("gray.800", "yellow.300");
  return (
    <>
      <Head>
        <title>Core Team &ndash; XTRA</title>
      </Head>

      <Container as="section" maxW="container.lg" h="100%" py={4}>
        <VStack
          w="100%"
          spacing="1.5rem"
          alignItems="flex-start"
          mt={["6rem", "17vh"]}
          lineHeight={1.8}
        >
          <Heading
            as="h1"
            fontSize={["1.5rem", "3rem"]}
            lineHeight="1.5"
            textTransform="capitalize"
            textColor={color}
          >
            {teamInfo.title}
          </Heading>

          <Text fontSize={["md", "lg"]}>{teamInfo.desc}</Text>
        </VStack>

        <Stack direction={["column", "row"]} align="center" my={8} spacing={8}>
          {TEAM_MEMBER.map(([name, ava, href, role]) => (
            <Box
              key={name}
              width={["75%", "50%", "50%", "25%"]}
              bg={bgColor}
              p={6}
              lineHeight={1.8}
              boxShadow="lg"
              textAlign={["center", "left"]}
            >
              <Center>
                <ProfilePic
                  borderRadius="full"
                  bgColor="gray.800"
                  boxSize="180px"
                  src={ava}
                  alt={name}
                />
              </Center>
              <Heading as="h2" fontSize="2xl" fontWeight="semibold" py={[2, 4]}>
                <Link href={href} isExternal>
                  {name} <ExternalLinkIcon boxSize={4} mx="2px" />
                </Link>
              </Heading>

              <Text fontSize="sm" opacity={0.65}>
                {role}
              </Text>
            </Box>
          ))}
        </Stack>

        <Text fontSize="sm" opacity={0.5} my={8}>
          {teamInfo.note}
        </Text>
      </Container>
    </>
  );
};

export default Team;
