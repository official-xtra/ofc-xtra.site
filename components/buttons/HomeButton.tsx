import * as React from "react";
import NextLink from "next/link";
import { Button, useColorModeValue } from "@chakra-ui/react";

export const HomeButton: React.FC = () => {
  const color = useColorModeValue("gray.800", "yellow.300");

  return (
    <NextLink href="/" passHref>
      <Button as="a" variant="ghost" color={color}>
        Home
      </Button>
    </NextLink>
  );
};
