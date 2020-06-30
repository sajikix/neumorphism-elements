import React, { useState, FC, ReactElement } from 'react';
import styled from '@emotion/styled';
import { BumpBox, DentBox } from '../atoms';

interface ContainerProps {
  width: string;
  height: string;
}

const Container = styled.div`
  /* form */
  height: ${({ height }: ContainerProps) => height};
  width: ${({ width }: ContainerProps) => width};
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
  dentBoxRender?: () => ReactElement;
  bumpBoxRender?: () => ReactElement;
  onClick?: () => void;
}

export const Button: FC<Props> = ({
  width = '40vh',
  height = '40vh',
  borderRadius = '10%',
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
  onClick,
}) => {
  const [clicked, setClicked] = useState(false);
  return (
    <Container
      width={width}
      height={height}
      onMouseDown={() => setClicked(true)}
      onMouseUp={() => {
        setClicked(false);
        onClick?.();
      }}
    >
      {clicked ? (
        <DentBox
          backgroudColor={dentBackgroudColor}
          shadowColor={dentShadowColor}
          highlightColor={dentHighlightColor}
          rounded={dentRounded}
          depth={dentDepth}
          width={width}
          height={height}
          borderRadius={borderRadius}
        >
          {dentBoxRender?.()}
        </DentBox>
      ) : (
        <BumpBox
          backgroudColor={bumpBackgroudColor}
          shadowColor={bumpShadowColor}
          highlightColor={bumpHighlightColor}
          rounded={bumpRounded}
          depth={bumpDepth}
          width={width}
          height={height}
          borderRadius={borderRadius}
        >
          {bumpBoxRender?.()}
        </BumpBox>
      )}
    </Container>
  );
};
