import React from "react";

import { SvgProps } from "react-native-svg";

import { Container, Name } from "./styles";
import { useTheme } from "styled-components";

interface Props {
  name: string;
  icon: React.FC<SvgProps>;
}

export function Accessory({ name, icon: Icon }: Props) {
  const theme = useTheme();

  return (
    <Container>
      <Icon width={32} height={32} fill={theme.colors.header} />
      <Name>{name}</Name>
    </Container>
  );
}
