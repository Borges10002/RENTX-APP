import React from "react";

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
} from "./styles";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";

export function CarDetails() {
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>

      <CarImages>
        <ImageSlider
          imagesUrl={[
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gratispng.com%2Fbaixar%2Faudi-cars.html&psig=AOvVaw3BLdl9LKgpkcpBivwvpPgq&ust=1684494111707000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNicotrb_v4CFQAAAAAdAAAAABAJ",
          ]}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>

          <Rent>
            <Period>Ao Dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>

        <About>
          Este é automóvel desportivo. Surgiu do lendário touro de ider
          indultado na praça Real Maestranza de Servilla. È um belissimo carro
          para quem gosta de acelerar.
        </About>
      </Content>
    </Container>
  );
}
