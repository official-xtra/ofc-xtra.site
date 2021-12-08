import * as React from "react";
import { Box } from "@chakra-ui/react";
import { Footer } from "../footer";
import { Navbar } from "../navbar";

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <Box minH={["70vh", "55vh"]}>{children}</Box>
      <Footer />
    </>
  );
};
