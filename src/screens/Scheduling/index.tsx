import React from "react";
import { useTheme } from "styled-components";
import { StatusBar } from "react-native";

import { BackButton } from "../../components/BackButton";

import {
  Container,
  DateInfo,
  DateTitle,
  DateValue,
  Header,
  RentalPeriod,
  Title,
  Content,
  Footer,
} from "./styles";

import ArrowSvg from "../../assets/arrow.svg";
import { Button } from "../../components/Button";
import { Calendar } from "../../components/Calendar";

export function Scheduling() {
  const theme = useTheme();

  return (
    <Container>
      <Header>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <BackButton color={theme.colors.shape} onPress={() => {}} />

        <Title>
          Escolha uma {"\n"} data de inicio e {"\n"} fim de aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>De</DateTitle>
            <DateValue selected={false}>18/06/2023</DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>De</DateTitle>
            <DateValue selected={false}>18/06/2023</DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar />
      </Content>

      <Footer>
        <Button title="Confirmar" />
      </Footer>
    </Container>
  );
}
