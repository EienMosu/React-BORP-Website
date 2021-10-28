import React from "react";
import {
  Container,
  Desc,
  Image,
  Left,
  Right,
  Title,
  Wrapper,
} from "./Info.styles";

const Info = ({
  image,
  title,
  desc,
  imageSide,
  width,
  marginRight,
  marginLeft,
  background,
  text
}) => {
  return (
    <Container background={background}>
      <Wrapper>
        {imageSide === "left" ? (
          <>
            <Left marginRight={marginRight} marginLeft={marginLeft}>
              <Image src={image} width={width} />
            </Left>
            <Right>
              <Title>{title}</Title>
              <Desc dangerouslySetInnerHTML={{ __html: desc }}></Desc>
            </Right>
          </>
        ) : (
          <>
            <Right text={text}>
              <Title>{title}</Title>
              <Desc dangerouslySetInnerHTML={{ __html: desc }}></Desc>
            </Right>
            <Left marginRight={marginRight} marginLeft={marginLeft}>
              <Image src={image} width={width} />
            </Left>
          </>
        )}
      </Wrapper>
    </Container>
  );
};

export default Info;
