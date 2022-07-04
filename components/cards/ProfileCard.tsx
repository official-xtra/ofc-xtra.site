import * as React from "react";
import {
  Box,
  Button,
  Center,
  Heading,
  Image as ProfilePic,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

interface Props {
  avatar: string;
  username: string;
  account: string;
  role: string;
}

export const ProfileCard: React.FC<Props> = ({
  avatar,
  username,
  account,
  role,
}): JSX.Element => {
  const bgAvatar = useColorModeValue("white", "gray.800");
  const bgColor = useColorModeValue("gray.100", "gray.900");

  return (
    <Box
      width={["full", "50%", "50%", "25%"]}
      bg={bgColor}
      p={6}
      lineHeight={1.8}
      boxShadow="lg"
      textAlign={["center", "left"]}
    >
      <Center>
        <ProfilePic
          src={avatar}
          alt={username}
          bgColor={bgAvatar}
          boxSize="180px"
          borderRadius="full"
        />
      </Center>
      <Heading as="h2" fontSize="2xl" fontWeight="semibold" py={[4, 6]}>
        <Link href={account} isExternal>
          {username} <ExternalLinkIcon boxSize={4} mx="2px" />
        </Link>
      </Heading>

      <Text fontSize="sm" opacity={0.65}>
        {role}
      </Text>
    </Box>
  );
};
