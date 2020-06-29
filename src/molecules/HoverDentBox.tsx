import React, { useState, FC } from 'react';
import { Transition } from 'react-transition-group';
import styled from '@emotion/styled';
import { DentBox } from '../atoms';

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
}

export const HoverDentBox: FC<Props> = ({
  width = '40vh',
  height = '40vh',
  dentBackgroudColor,
  dentShadowColor,
  dentHighlightColor,
  dentRounded,
  dentDepth,
  children,
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <Container
      width={width}
      height={height}
      onMouseOver={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
    >
      <Transition in={hovered} timeout={100}>
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
              {children}
            </DentBox>
          );
        }}
      </Transition>
    </Container>
  );
};
