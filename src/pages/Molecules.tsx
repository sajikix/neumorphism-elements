import React, { FC } from 'react';
import styled from '@emotion/styled';
import {
  HoverDentBox,
  HoverBumpBox,
  HoverBumpToDentBox,
  HoverDentToBumpBox,
  Button,
} from '../molecules';

const Container = styled.div`
  background-color: #eef0f4;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

interface Props {}

export const Molecules: FC<Props> = () => {
  return (
    <Container>
      <HoverDentBox />
      <HoverBumpBox />
      <HoverBumpToDentBox />
      <HoverDentToBumpBox />
      <Button />
    </Container>
  );
};
