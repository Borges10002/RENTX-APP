import React from "react";
import { useWindowDimensions } from "react-native";

import LogSvg from "../../assets/logo_background_gray.svg";
import DoneSvg from "../../assets/done.svg";

import { Container, Content, Title, Message } from "./styles";

export function SchedulingComplete() {
  const { width } = useWindowDimensions();

  return (
    <Container>
      <LogSvg width={width} />

      <Content>
        <DoneSvg width={80} height={80} />

        <Title>Carro alugado!</Title>

        <Message>
          Agora você só precisa ir {"\n"}
          até a concessionária da RENTX {"\n"}
          pegar o seu automóvel.
        </Message>
      </Content>
    </Container>
  );
}
