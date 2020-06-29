import React, { FC } from 'react';
import styled from '@emotion/styled';

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

export const Home: FC<Props> = () => {
  return <Container></Container>;
};
