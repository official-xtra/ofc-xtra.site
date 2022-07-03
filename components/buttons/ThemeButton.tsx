import * as React from "react";
import {
  Icon,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

interface Props {
  variant: string;
}

export const ThemeButton: React.FC<Props> = ({ variant }): JSX.Element => {
  const { colorMode, toggleColorMode } = useColorMode();
  const IconMode = colorMode === "dark" ? FaSun : FaMoon;
  const ButtonColor = useColorModeValue("gray.800", "yellow.300");

  return (
    <IconButton
      aria-label="Theme Switcher 🌓"
      icon={<Icon as={IconMode} color={ButtonColor} />}
      onClick={toggleColorMode}
      variant={variant}
    />
  );
};
