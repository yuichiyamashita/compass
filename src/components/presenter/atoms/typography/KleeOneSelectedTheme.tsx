import React from "react";
import styled from "styled-components";

type Props = { theme: string };

const KleeOneSelectedTheme: React.FC<Props> = React.memo((props) => {
  const { theme } = props;
  return <StyledTheme>{theme}</StyledTheme>;
});

export default KleeOneSelectedTheme;

const StyledTheme = styled.h2`
  color: #555;
  font-size: 20px;
  font-weight: 600;
  font-family: "Klee One", cursive;
  letter-spacing: 1.5px;
  text-align: left;
  margin-bottom: 16px;
  word-break: break-all;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    text-align: center;
  }
`;
