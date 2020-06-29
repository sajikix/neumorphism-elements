import React, { FC } from 'react';
import styled from '@emotion/styled';
import { BumpBox, DentBox } from '../atoms';

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

export const Atoms: FC<Props> = () => {
  return (
    <Container>
      <BumpBox />
      <BumpBox rounded />
      <DentBox />
      <DentBox rounded />
    </Container>
  );
};
