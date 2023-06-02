import React from "react";
import { Container, Title } from "./styles";
import { GestureHandlerRootView } from "react-native-gesture-handler";

interface Props {
  title: string;
  color?: string;
}

export function Button({ title, color, ...rest }: Props) {
  return (
    <GestureHandlerRootView>
      <Container {...rest} color={color}>
        <Title>{title}</Title>
      </Container>
    </GestureHandlerRootView>
  );
}
