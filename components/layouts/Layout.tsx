import * as React from "react";
import { Box } from "@chakra-ui/react";
import { Footer } from "../footer";
import { Navbar } from "../navbar";

type Props = {
  children?: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Box as="main" minH={["70vh", "55vh"]}>
        {children}
      </Box>
      <Footer />
    </>
  );
};
