import React, { useState, FC, ReactElement } from 'react';
import * as emotion from '@emotion/core';
import { Transition } from 'react-transition-group';
import { TransitionStatus } from 'react-transition-group/Transition';
import styled from '@emotion/styled';
import { BumpBox, DentBox } from '../atoms';

interface ContainerProps {
  width: string;
  height: string;
}

const Container = styled.div`
  /* form */
  height: ${({ width }: ContainerProps) => width};
  width: ${({ height }: ContainerProps) => height};
  /* flex */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

interface Props {
  width?: string;
  height?: string;
  borderRadius?: string;
  dentBackgroudColor?: string;
  dentShadowColor?: string;
  dentHighlightColor?: string;
  dentRounded?: boolean;
  dentDepth?: number;
  bumpBackgroudColor?: string;
  bumpShadowColor?: string;
  bumpHighlightColor?: string;
  bumpRounded?: boolean;
  bumpDepth?: number;
  dentBoxRender?: (transitionStatus: TransitionStatus) => ReactElement;
  bumpBoxRender?: (transitionStatus: TransitionStatus) => ReactElement;
}

export const HoverBumpToDentBox: FC<Props> = ({
  width = '40vh',
  height = '40vh',
  dentBackgroudColor,
  dentShadowColor,
  dentHighlightColor,
  dentRounded,
  dentDepth,
  bumpBackgroudColor,
  bumpShadowColor,
  bumpHighlightColor,
  bumpRounded,
  bumpDepth,
  dentBoxRender,
  bumpBoxRender,
}) => {
  const [hovered, setHovered] = useState(false);
  const [leaved, setLeaved] = useState(false);
  return (
    <Container
      width={width}
      height={height}
      onMouseLeave={() => {
        setLeaved(false);
      }}
      onMouseOver={() => {
        setHovered(true);
      }}
    >
      <Transition in={!hovered} timeout={100} onExited={() => setLeaved(true)}>
        {(state) => {
          return (
            <BumpBox
              additionalCss={{
                position: 'absolute',
                transition: '0.5s',
                opacity: state === 'entered' ? 1 : 0,
                zIndex: state === 'entered' ? 2 : 1,
              }}
              backgroudColor={bumpBackgroudColor}
              shadowColor={bumpShadowColor}
              highlightColor={bumpHighlightColor}
              rounded={bumpRounded}
              depth={bumpDepth}
              width={width}
              height={height}
            >
              {bumpBoxRender?.(state)}
            </BumpBox>
          );
        }}
      </Transition>
      <Transition in={leaved} timeout={100} onExited={() => setHovered(false)}>
        {(state) => {
          return (
            <DentBox
              additionalCss={{
                position: 'absolute',
                transition: '0.5s',
                opacity: state === 'entered' ? 1 : 0,
                zIndex: state === 'entered' ? 2 : 1,
              }}
              backgroudColor={dentBackgroudColor}
              shadowColor={dentShadowColor}
              highlightColor={dentHighlightColor}
              rounded={dentRounded}
              depth={dentDepth}
              width={width}
              height={height}
            >
              {dentBoxRender?.(state)}
            </DentBox>
          );
        }}
      </Transition>
    </Container>
  );
};
