import React from "react";
import logo from "../../assets/logo.png";
import {
  Container,
  Left,
  Links,
  LiveStatus,
  Logo,
  Right,
  Status,
  StatusContainer,
  Wrapper,
} from "./Header.styles";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo src={logo} />
          <StatusContainer>
            <Status>
              <b>Server Status</b> Players: <b>242/1000</b>
              <LiveStatus>Online</LiveStatus>
            </Status>
          </StatusContainer>
        </Left>
        <Right>
          <Links>HOME</Links>
          <Links>DISCORD</Links>
          <Links>DOWNLOAD & PLAY</Links>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Header;
