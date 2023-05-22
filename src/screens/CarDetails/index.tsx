import React from "react";

import { Container, Header, CarImages } from "./styles";
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
    </Container>
  );
}
