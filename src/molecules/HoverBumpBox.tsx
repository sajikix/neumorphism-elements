import React, { useState, FC } from 'react';
import { Transition } from 'react-transition-group';
import styled from '@emotion/styled';
import { BumpBox } from '../atoms';

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
  bumpBackgroudColor?: string;
  bumpShadowColor?: string;
  bumpHighlightColor?: string;
  bumpRounded?: boolean;
  bumpDepth?: number;
}

export const HoverBumpBox: FC<Props> = ({
  width = '40vh',
  height = '40vh',
  borderRadius,
  bumpBackgroudColor,
  bumpShadowColor,
  bumpHighlightColor,
  bumpDepth,
  bumpRounded,
  children,
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <Container
      width={width}
      height={height}
      onMouseLeave={() => {
        setHovered(false);
      }}
      onMouseOver={() => {
        setHovered(true);
      }}
    >
      <Transition in={hovered} timeout={100}>
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
              borderRadius={borderRadius}
            >
              {children}
            </BumpBox>
          );
        }}
      </Transition>
    </Container>
  );
};
