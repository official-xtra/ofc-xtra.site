import * as React from "react";
import { Box, Container, Divider } from "@chakra-ui/react";

type Props = {
  children?: React.ReactNode;
};

export const HeaderLayout: React.FC<Props> = ({ children }) => {
  return (
    <Box
      as="header"
      w="full"
      position="fixed"
      zIndex={100}
      backdropFilter="blur(14px)"
    >
      <Container as="nav" maxW="container.lg" maxH={["full", "100vh"]} h="72px">
        {children}
      </Container>

      <Divider />
    </Box>
  );
};
