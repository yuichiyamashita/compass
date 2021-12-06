import React, { FC } from "react";
import styled from "styled-components";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import { Container } from "../../molecules/container";
import { Flexbox } from "../../molecules/layout";

const Footer: FC = () => {
  return (
    <StyledFooter>
      <Container>
        <Flexbox justify="space-around" align="center">
          <a href="/">
            <StyledCopyRight>&copy;COMPASSS-2021</StyledCopyRight>
          </a>
          <StyledNav>
            <a href="./about">About</a>
            <a href="./contact">お問い合わせ</a>
            <a href="./terms">利用規約</a>
            <a href="./privacy">プライバシーポリシー</a>
          </StyledNav>
        </Flexbox>
      </Container>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  z-index: 999;
  background: #333;
  height: 120px;
  color: #fff;
`;
const StyledNav = styled.nav`
  text-align: left;
  font-size: 10px;
  @media screen and (min-width: 600px) {
    font-size: 14px;
  }
  a {
    display: block;
    margin-bottom: 8px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;
const StyledCopyRight = styled.small`
  font-size: 10px;
  @media screen and (min-width: 600px) {
    font-size: 14px;
  }
`;
