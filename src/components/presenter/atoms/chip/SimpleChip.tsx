import React from "react";
import styled from "styled-components";

type DataProps = {
  text: string;
};
type StyleProps = {
  background: string;
  color: string;
  fontSize?: string;
};
type Props = DataProps & StyleProps;

const SimpleChip: React.FC<Props> = React.memo((props) => {
  const { background, color, fontSize, text } = props;
  return (
    <StyledChip background={background} color={color} fontSize={fontSize}>
      {text}
    </StyledChip>
  );
});

export default SimpleChip;

const StyledChip = styled.span<StyleProps>`
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
`;
