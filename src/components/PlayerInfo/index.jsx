import React from "react";
import image6 from "../../assets/image6.png";
import {
  Container,
  Image,
  Left,
  Player,
  Right,
  Wrapper,
} from "./PlayerInfo.styles";

const PlayerInfo = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Image src={image6} />
        </Left>
        <Right>
          <Player
            title="Borp"
            src="https://www.youtube.com/embed/ywr_Ue-SbXQ?autoplay=1"
            frameBorder="0"
            allow="autoplay"
          ></Player>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default PlayerInfo;
