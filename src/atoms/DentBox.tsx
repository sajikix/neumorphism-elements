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
  box-shadow: ${(props: BoxProps) => getBoxShadow(props, false)};
  /* flex */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

interface Props {
  borderRadius?: string;
  backgroudColor?: string;
  shadowColor?: string;
  highlightColor?: string;
  additionalCss?: InterpolationWithTheme<any>;
  width?: string;
  height?: string;
  rounded?: boolean;
  depth?: number;
}

export const DentBox: FC<Props> = ({
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
      height={height}
      rounded={rounded}
      depth={depth}
    >
      {children}
    </Box>
  );
};
