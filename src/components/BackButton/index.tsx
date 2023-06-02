import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import {
  BorderlessButtonProps,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { useTheme } from "styled-components";

import { Container } from "./styles";

interface Props extends BorderlessButtonProps {
  color?: string;
}

export function BackButton({ color, ...rest }: Props) {
  const theme = useTheme();

  return (
    <GestureHandlerRootView>
      <Container {...rest}>
        <MaterialIcons
          name="chevron-left"
          size={24}
          color={color ? color : theme.colors.text}
        />
      </Container>
    </GestureHandlerRootView>
  );
}
