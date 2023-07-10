import React from "react";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Logo from "../../assets/logo.svg";
import { RFValue } from "react-native-responsive-fontsize";

import { Container, Header, TotalCars, HeaderContent, CarList } from "./styles";

import { Car } from "../../components/Car";

export function Home() {
  const navigation = useNavigation();

  const carDataOne = {
    brand: "Audi",
    name: "Rs 5 Coupe",
    rent: {
      period: "AO DIA",
      price: 120,
    },

    thumbnail:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gratispng.com%2Fbaixar%2Faudi-cars.html&psig=AOvVaw3BLdl9LKgpkcpBivwvpPgq&ust=1684494111707000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNicotrb_v4CFQAAAAAdAAAAABAJ",
  };

  function handleCardDetails() {
    navigation.navigate("CarDetails");
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>

      <CarList
        data={[1, 2, 3]}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => (
          <Car data={carDataOne} onPress={handleCardDetails} />
        )}
      />
    </Container>
  );
}
