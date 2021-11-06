import React, { FC } from "react";
import styled from "styled-components";

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
            <a href="./terms">利用規約</a>
            <a href="./privacy">プライバシーポリシー</a>
            <a href="./contact">お問い合わせ</a>
          </StyledNav>
        </Flexbox>
      </Container>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  background: #f9f9f9;
  height: 120px;
  color: #999;
`;
const StyledNav = styled.nav`
  text-align: left;
  font-size: 12px;
  @media screen and (min-width: 600px) {
    font-size: 14px;
  }
  a {
    display: block;
    margin-bottom: 8px;
  }
`;
const StyledCopyRight = styled.small`
  font-size: 12px;
  @media screen and (min-width: 600px) {
    font-size: 14px;
  }
`;
