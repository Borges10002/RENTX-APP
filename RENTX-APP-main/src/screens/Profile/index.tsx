import React, { useState } from "react";

import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import {
  Container,
  Header,
  HeaderTop,
  HeaderTitle,
  LogoutButton,
  PhotoContainer,
  Photo,
  PhotoButton,
  Content,
  Options,
  Option,
  OptionTitle,
} from "./styles";
import { BackButton } from "../../components/BackButton";

export function Profile() {
  const [option, setOption] = useState<"dataEdit" | "passwordEdit">("dataEdit");

  const theme = useTheme();
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  function handleSinOut() {}

  function handleOptionChange(optionSelected: "dataEdit" | "passwordEdit") {
    setOption(optionSelected);
  }

  return (
    <Container>
      <Header>
        <HeaderTop>
          <BackButton color={theme.colors.shape} onPress={handleBack} />
          <HeaderTitle>Editar Perfil</HeaderTitle>
          <LogoutButton onPress={handleSinOut}>
            <Feather name="power" size={24} color={theme.colors.shape} />
          </LogoutButton>
        </HeaderTop>
        <PhotoContainer>
          <Photo
            source={{
              uri: "https://avatars.githubusercontent.com/u/32522338?v=4",
            }}
          />
          <PhotoButton onPress={() => {}}>
            <Feather name="camera" size={24} color={theme.colors.shape} />
          </PhotoButton>
        </PhotoContainer>
      </Header>

      <Content>
        <Options>
          <Option
            active={option === "dataEdit"}
            onPress={() => handleOptionChange("dataEdit")}
          >
            <OptionTitle active={option === "dataEdit"}>Dados</OptionTitle>
          </Option>
          <Option
            active={option === "passwordEdit"}
            onPress={() => handleOptionChange("passwordEdit")}
          >
            <OptionTitle active={option === "passwordEdit"}>
              Trocar senha
            </OptionTitle>
          </Option>
        </Options>
      </Content>
    </Container>
  );
}
