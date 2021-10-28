import { Facebook, Instagram, Pinterest, Twitter, YouTube } from '@material-ui/icons';
import React from 'react'
import logo from "../../assets/footerLogo.png"
import {
    Container,
    Copyright,
    Icons,
    Image,
    Left,
    List,
    Middle,
    Right,
    Wrapper,
  } from "./Footer.styles";

const Footer = () => {
    return (
        <Container>
        <Wrapper>
          <Left>
            <Image src={logo} />
          </Left>
          <Middle>
              <Copyright>Copyright @ Ozkan Selcuk 2021</Copyright>
          </Middle>
          <Right>
            <List>
                <Icons><Facebook /></Icons>
                <Icons><Instagram /></Icons>
                <Icons><Pinterest /></Icons>
                <Icons><Twitter /></Icons>
                <Icons><YouTube /></Icons>
            </List>
          </Right>
        </Wrapper>
      </Container>
    )
}

export default Footer
