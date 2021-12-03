import React, { FC } from "react";
import styled from "styled-components";

import { Container } from "../../molecules/container";

const Introduction: FC = () => {
  return (
    <StyledContainer>
      <Container>
        <StyledDl>
          <dt>COMPASSとは？</dt>
          <dd>
            {/* COMPASSは「SELF DEBATE」や「FAST
            THINKING」という方法を用いて、論理的思考力を強化することができるアプリです。 */}
            COMPASSは「Self debate」や「Fast
            thinking」という方法を用いて、論理的思考力を強化することができるアプリです。
          </dd>
        </StyledDl>
      </Container>
    </StyledContainer>
  );
};

export default Introduction;

const StyledContainer = styled.div`
  background: #ececec;
  // background: rgba(0, 0, 0, 0.8);
  // color: rgba(255, 255, 255, 0.8);
  color: #333;
  font-size: 24px;
  text-align: left;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
`;

const StyledDl = styled.dl`
  padding: 64px 0;
  letter-spacing: 3px;

  dt {
    font-size: 32px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 32px;
  }
`;
