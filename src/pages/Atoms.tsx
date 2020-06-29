import React, { FC } from 'react';
import styled from '@emotion/styled';
import { BumpBox, DentBox } from '../atoms';

const Container = styled.div`
  background-color: #eef0f4;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const DescriptionArea = styled.div`
  width: 75vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3vh;
  margin-bottom: 3vh;
`;

const TitleText = styled.div`
  color: #505f7c;
  font-size: 3rem;
  margin-top: 1vh;
  margin-bottom: 1vh;
`;

const ComponentArea = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  margin-bottom: 10vh;
  margin-left: 20vw;
`;
const ComponentTitle = styled.div`
  color: #505f7c;
  font-size: 2rem;
  margin-top: 2vh;
  margin-bottom: 2vh;
`;
const ComponentRow = styled.div`
  background-color: #eef0f4;
  width: 80vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const BoxWrapper = styled.div`
  margin-right: 5vw;
`;

const BoxInnerText = styled.div`
  color: #505f7c;
  font-size: 1.8rem;
  margin-bottom: 1vh;
`;

interface Props {}

export const Atoms: FC<Props> = () => {
  return (
    <Container>
      <DescriptionArea>
        <TitleText>{'Atoms'}</TitleText>
      </DescriptionArea>
      <ComponentArea>
        <ComponentTitle>
          {'BumpBox '}
          <i
            onClick={() =>
              (window.location.href =
                'https://github.com/saji-ryu/neumorphism-elements/blob/master/src/atoms/BumpBox.tsx')
            }
            className="fa fa-link"
          />
        </ComponentTitle>
        <ComponentRow>
          <BoxWrapper>
            <BumpBox>
              <BoxInnerText>{'BumpBox'}</BoxInnerText>
            </BumpBox>
          </BoxWrapper>
          <BoxWrapper>
            <BumpBox rounded flexDirection={'column'}>
              <BoxInnerText>{'BumpBox'}</BoxInnerText>
              <BoxInnerText>{'(rounded)'}</BoxInnerText>
            </BumpBox>
          </BoxWrapper>
        </ComponentRow>
      </ComponentArea>
      <ComponentArea>
        <ComponentTitle>
          {'DentBox '}
          <i
            onClick={() =>
              (window.location.href =
                'https://github.com/saji-ryu/neumorphism-elements/blob/master/src/atoms/DentBox.tsx')
            }
            className="fa fa-link"
          />
        </ComponentTitle>
        <ComponentRow>
          <BoxWrapper>
            <DentBox>
              <BoxInnerText>{'DentBox'}</BoxInnerText>
            </DentBox>
          </BoxWrapper>
          <BoxWrapper>
            <DentBox rounded>
              <BoxInnerText>{'DentBox'}</BoxInnerText>
              <BoxInnerText>{'(rounded)'}</BoxInnerText>
            </DentBox>
          </BoxWrapper>
        </ComponentRow>
      </ComponentArea>
    </Container>
  );
};
