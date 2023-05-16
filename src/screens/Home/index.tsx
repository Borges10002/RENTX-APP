import React from "react";
import { StatusBar } from "react-native";

import Logo from "../../assets/logo.svg";
import { RFValue } from "react-native-responsive-fontsize";

import { Container, Header, TotalCars, HeaderContent } from "./styles";

export function Home() {
  return (
    <Container>
      <HeaderContent>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <Header>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de 12 carros</TotalCars>
        </Header>
      </HeaderContent>
    </Container>
  );
}
