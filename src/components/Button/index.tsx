import React from "react";
import { Container, Title } from "./styles";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useTheme } from "styled-components";

interface Props {
  title: string;
  color?: string;
  onPress: () => void;
}

export function Button({ title, color, onPress }: Props) {
  const theme = useTheme();

  return (
    <GestureHandlerRootView>
      <Container color={color ? color : theme.colors.main} onPress={onPress}>
        <Title>{title}</Title>
      </Container>
    </GestureHandlerRootView>
  );
}
