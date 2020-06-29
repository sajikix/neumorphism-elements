import React, { useState, FC, ReactElement } from 'react';
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
  dentBoxRender?: () => ReactElement;
  bumpBoxRender?: () => ReactElement;
}

export const Button: FC<Props> = ({
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
  const [clicked, setClicked] = useState(false);
  return (
    <Container
      width={width}
      height={height}
      onMouseDown={() => setClicked(true)}
      onMouseUp={() => setClicked(false)}
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
        >
          {bumpBoxRender?.()}
        </BumpBox>
      )}
    </Container>
  );
};
