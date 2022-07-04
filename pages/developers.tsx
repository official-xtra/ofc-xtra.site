import type { NextPage } from "next";
import Head from "next/head";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Container, Stack, VStack, Heading, Text } from "@chakra-ui/react";

import teamInfo from "../components/data/teamInfo";
import { ProfileCard } from "../components/cards/ProfileCard";

const TEAM_MEMBER: [string, string, string, string][] = [
  ["Ilham Bara", teamInfo.member[1], teamInfo.socmed[1], "Lead Developer"],
  ["Amin Rizki", teamInfo.member[2], teamInfo.socmed[2], "Internals"],
  ["Sulthan Rafif", teamInfo.member[3], teamInfo.socmed[3], "Externals"],
];

const Developers: NextPage = () => {
  const color = useColorModeValue("gray.800", "yellow.300");

  return (
    <>
      <Head>
        <title>Core Team &ndash; X-TRA</title>
      </Head>

      <Container as="section" maxW="container.lg" minH="90vh" py={4}>
        <VStack
          w="100%"
          spacing="1.5rem"
          alignItems="flex-start"
          mt={[16, 32]}
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

        <Stack direction={["column", "row"]} align="center" spacing={8} py={12}>
          {TEAM_MEMBER.map(([username, avatar, account, role]) => (
            <ProfileCard
              key={username}
              username={username}
              avatar={avatar}
              account={account}
              role={role}
            />
          ))}
        </Stack>

        <Text fontSize="sm" opacity={0.5}>
          {teamInfo.note}
        </Text>
      </Container>
    </>
  );
};

export default Developers;
