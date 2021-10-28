import React from "react";
import image1 from "../../assets/image1.png";
import {
  Anchor,
  Button,
  ButtonContainer,
  Container,
  Desc,
  Image,
  Left,
  Right,
  Title,
  Wrapper,
} from "./Content.styles";

const Content = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Image src={image1} />
        </Left>
        <Right>
          <Title>GTA V Roleplay Server</Title>
          <Desc>
            Join a massive english <b>Grand Theft Auto V</b> roleplaying
            community. Our voice chat based server will provide you the best
            playing experience! With over <b>200 players</b> you will never feel
            alone in the sunny city of Los Santos! Join a gang or law
            enforcement faction, work as a fisherman, or pursue a professional
            poker playing career. The opportunities are endless! The
            <b> best GTA V RP server</b> is waiting for you! 
            <Anchor> Download & Play</Anchor> now!
          </Desc>
          <ButtonContainer>
            <Button>DISCORD</Button>
            <Button>PLAY</Button>
          </ButtonContainer>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Content;
