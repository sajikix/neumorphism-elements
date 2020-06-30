import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Button } from '../molecules';
import { useHistory } from 'react-router-dom';

const Container = styled.div`
  background-color: #eef0f4;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;
const Header = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 2vh;
  margin-bottom: 2vh;
`;

const HomeIcon = styled.div`
  color: #505f7c;
  font-size: 1.8rem;
`;

const Icon = styled.img`
  max-height: 3vh;
  max-width: 6vh;
`;

const TitleArea = styled.div`
  width: 70vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 4vh;
`;

const TitleText = styled.div`
  color: #505f7c;
  font-size: 3rem;
  margin-top: 2vh;
  margin-bottom: 2vh;
`;
const DescriptionText = styled.div`
  color: #505f7c;
  font-size: 2rem;
`;

const LinksArea = styled.div`
  width: 70vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3vh;
  margin-bottom: 3vh;
`;

const LinkButtonText = styled.div`
  color: #505f7c;
  font-size: 2.5rem;
`;

interface Props {}

export const Home: FC<Props> = () => {
  const history = useHistory();
  return (
    <Container>
      <Header>
        <Button
          width={'10vh'}
          height={'5vh'}
          dentDepth={5}
          bumpDepth={5}
          borderRadius={'1vh'}
          bumpBoxRender={() => (
            <HomeIcon>
              <i className="fa fa-home "></i>
            </HomeIcon>
          )}
          dentBoxRender={() => (
            <HomeIcon>
              <i className="fa fa-home "></i>
            </HomeIcon>
          )}
          onClick={() => {
            history.push('/');
          }}
        />
        <Button
          width={'10vh'}
          height={'5vh'}
          dentDepth={5}
          bumpDepth={5}
          borderRadius={'1vh'}
          bumpBoxRender={() => <Icon src={'./images/github.png'}></Icon>}
          dentBoxRender={() => <Icon src={'./images/github.png'}></Icon>}
          onClick={() =>
            (window.location.href =
              'https://github.com/saji-ryu/neumorphism-elements')
          }
        />
      </Header>
      <TitleArea>
        <TitleText>{'Neumorphism Elements'}</TitleText>
        <DescriptionText>
          {'React Components for Neumorphism Design'}
        </DescriptionText>
      </TitleArea>
      <LinksArea>
        <Button
          width={'50vh'}
          height={'20vh'}
          borderRadius={'3vh'}
          bumpBoxRender={() => (
            <LinkButtonText>
              <i className="fa fa-mail-forward " />
              {' Atoms'}
            </LinkButtonText>
          )}
          dentBoxRender={() => (
            <LinkButtonText>
              <i className="fa fa-mail-forward " />
              {' Atoms'}
            </LinkButtonText>
          )}
          onClick={() => {
            history.push('/atoms');
          }}
        />
      </LinksArea>
      <LinksArea>
        <Button
          width={'50vh'}
          height={'20vh'}
          borderRadius={'3vh'}
          bumpBoxRender={() => (
            <LinkButtonText>
              <i className="fa fa-mail-forward " />
              {' Molecules'}
            </LinkButtonText>
          )}
          onClick={() => {
            history.push('/molecules');
          }}
          dentBoxRender={() => (
            <LinkButtonText>
              <i className="fa fa-mail-forward " />
              {' Molecules'}
            </LinkButtonText>
          )}
        />
      </LinksArea>
    </Container>
  );
};
