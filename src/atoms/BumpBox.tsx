import React, { FC } from 'react';
import styled from '@emotion/styled';
import { InterpolationWithTheme } from '@emotion/core';
import { getBoxShadow } from '../util';

interface BoxProps {
  borderRadius: string;
  backgroudColor: string;
  shadowColor: string;
  highlightColor: string;
  width: string;
  height: string;
  rounded: boolean;
  depth: number;
}

// TODO: 背景色やsizeとか高さでshadowを調整できるようにしたい
const Box = styled.div`
  /* form */
  height: ${({ width }: BoxProps) => width};
  width: ${({ height }: BoxProps) => height};
  border-radius: ${({ borderRadius }: BoxProps) => borderRadius};
  /* color */
  background-color: ${({ backgroudColor }: BoxProps) => backgroudColor};
  box-shadow: ${(props: BoxProps) => getBoxShadow(props, true)};
  /* flex */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

interface Props {
  borderRadius?: string;
  additionalCss?: InterpolationWithTheme<any>;
  backgroudColor?: string;
  shadowColor?: string;
  highlightColor?: string;
  width?: string;
  height?: string;
  rounded?: boolean;
  depth?: number;
}

export const BumpBox: FC<Props> = ({
  backgroudColor = '#eef0f4',
  shadowColor = '#d9dade',
  highlightColor = '#ffffff',
  borderRadius = '10%',
  width = '40vh',
  height = '40vh',
  rounded = false,
  depth = 8,
  children,
  additionalCss,
}) => {
  return (
    <Box
      backgroudColor={backgroudColor}
      shadowColor={shadowColor}
      highlightColor={highlightColor}
      borderRadius={borderRadius}
      css={additionalCss}
      width={width}
      rounded={rounded}
      height={height}
      depth={depth}
    >
      {children}
    </Box>
  );
};
