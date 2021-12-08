import * as React from "react";
import { NavbarMobile } from "../navbar/Navbar-mobile";
import { NavbarDesktop } from "../navbar/Navbar-desktop";
import { useBreakpointValue } from "@chakra-ui/react";

export const Navbar: React.FC = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  if (isMobile) {
    return <NavbarMobile />;
  }

  return <NavbarDesktop />;
};
