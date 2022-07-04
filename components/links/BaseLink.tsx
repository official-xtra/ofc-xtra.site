import * as React from "react";
import { Link, useColorModeValue } from "@chakra-ui/react";

interface Props {
  name: string;
  href: string;
}

export const BaseLink: React.FC<Props> = ({ name, href }): JSX.Element => {
  const color = useColorModeValue("gray.800", "yellow.300");

  return (
    <Link textColor={color} fontWeight="medium" href={href} isExternal>
      {name}
    </Link>
  );
};
