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

export const Molecules: FC<Props> = () => {
  return (
    <Container>
      <DescriptionArea>
        <TitleText>{'Molecules'}</TitleText>
      </DescriptionArea>
      <ComponentArea>
        <ComponentTitle>
          {'HoverBumpBox '}
          <i
            onClick={() =>
              (window.location.href =
                'https://github.com/saji-ryu/neumorphism-elements/blob/master/src/molecules/HoverBumpBox.tsx')
            }
            className="fa fa-link"
          />
        </ComponentTitle>
        <ComponentRow>
          <BoxWrapper>
            <HoverBumpBox>
              <BoxInnerText>{'Bump'}</BoxInnerText>
            </HoverBumpBox>
          </BoxWrapper>
        </ComponentRow>
      </ComponentArea>
      <ComponentArea>
        <ComponentTitle>
          {'HoverDentBox '}
          <i
            onClick={() =>
              (window.location.href =
                'https://github.com/saji-ryu/neumorphism-elements/blob/master/src/molecules/HoverDentBox.tsx')
            }
            className="fa fa-link"
          />
        </ComponentTitle>
        <ComponentRow>
          <BoxWrapper>
            <HoverDentBox>
              <BoxInnerText>{'Dent'}</BoxInnerText>
            </HoverDentBox>
          </BoxWrapper>
        </ComponentRow>
      </ComponentArea>
      <ComponentArea>
        <ComponentTitle>
          {'HoverDentToBumpBox '}
          <i
            onClick={() =>
              (window.location.href =
                'https://github.com/saji-ryu/neumorphism-elements/blob/master/src/molecules/HoverDentToBumpBox.tsx')
            }
            className="fa fa-link"
          />
        </ComponentTitle>
        <ComponentRow>
          <BoxWrapper>
            <HoverDentToBumpBox
              dentBoxRender={() => (
                <>
                  <BoxInnerText>{'Dent'}</BoxInnerText>
                </>
              )}
              bumpBoxRender={() => (
                <>
                  <BoxInnerText>{'Bump'}</BoxInnerText>
                </>
              )}
            ></HoverDentToBumpBox>
          </BoxWrapper>
        </ComponentRow>
      </ComponentArea>
      <ComponentArea>
        <ComponentTitle>
          {'HoverBumpToDentBox '}
          <i
            onClick={() =>
              (window.location.href =
                'https://github.com/saji-ryu/neumorphism-elements/blob/master/src/molecules/HoverBumpToDentBox.tsx')
            }
            className="fa fa-link"
          />
        </ComponentTitle>
        <ComponentRow>
          <BoxWrapper>
            <HoverBumpToDentBox
              dentBoxRender={() => (
                <>
                  <BoxInnerText>{'Dent'}</BoxInnerText>
                </>
              )}
              bumpBoxRender={() => (
                <>
                  <BoxInnerText>{'Bump'}</BoxInnerText>
                </>
              )}
            ></HoverBumpToDentBox>
          </BoxWrapper>
        </ComponentRow>
      </ComponentArea>
    </Container>
  );
};

// const Container = styled.div`
//   background-color: #eef0f4;
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-evenly;
//   align-items: center;
//   flex-wrap: wrap;
// `;

// interface Props {}

// export const Molecules: FC<Props> = () => {
//   return (
//     <Container>
//       <HoverDentBox />
//       <HoverBumpBox />
//       <HoverBumpToDentBox />
//       <HoverDentToBumpBox />
//       <Button />
//     </Container>
//   );
// };
