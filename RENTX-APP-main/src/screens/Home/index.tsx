import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import Logo from "../../assets/logo.svg";

import { CarList, Container, Header, HeaderContent, TotalCars } from "./styles";

import { Car } from "../../components/Car";
import { LoadAnimation } from "../../components/LoadAnimation";
import { CarDTO } from "../../dtos/CarDTO";
import { api } from "../../services/api";

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  function handleCardDetails(car: CarDTO) {
    navigation.navigate("CarDetails", { car });
  }

  useEffect(() => {
    let isMounted = true;

    async function fetchCars() {
      try {
        const response = await api.get("/cars");
        if (isMounted) {
          setCars(response.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchCars();

    return () => {
      isMounted = false;
    };
  }, []);

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
          {!loading && <TotalCars>Total de {cars.length} carros</TotalCars>}
        </HeaderContent>
      </Header>
      {loading ? (
        <LoadAnimation />
      ) : (
        <CarList
          data={cars}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Car data={item} onPress={() => handleCardDetails(item)} />
          )}
        />
      )}

      {/* <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View
          style={[
            myCarsButtonStyle,
            {
              position: "absolute",
              bottom: 13,
              right: 22,
            },
          ]}
        >
          <ButtonAnimated
            onPress={handleMyCars}
            style={[styles.button, { backgroundColor: theme.colors.main }]}
          >
            <Ionicons
              name="ios-car-sport"
              size={32}
              color={theme.colors.shape}
            />
          </ButtonAnimated>
        </Animated.View>
      </PanGestureHandler> */}
    </Container>
  );
}
