export const getBoxShadow = (
  {
    shadowColor,
    highlightColor,
    rounded,
    depth,
  }: {
    shadowColor: string;
    highlightColor: string;
    rounded: boolean;
    depth: number;
  },
  isBump: boolean,
) => {
  if (isBump) {
    return rounded
      ? `inset ${depth}px ${depth}px ${
          depth * 2
        }px ${highlightColor}, inset -${depth}px -${depth}px ${
          depth * 2
        }px ${shadowColor}`
      : `-${depth}px -${depth}px ${
          depth * 2
        }px ${highlightColor}, ${depth}px ${depth}px ${
          depth * 2
        }px ${shadowColor}`;
  } else {
    return rounded
      ? `-${depth}px -${depth}px ${
          depth * 2
        }px ${shadowColor}, ${depth}px ${depth}px ${
          depth * 2
        }px ${highlightColor}`
      : `inset ${depth}px ${depth}px ${
          depth * 2
        }px ${shadowColor}, inset -${depth}px -${depth}px ${
          depth * 2
        }px ${highlightColor}`;
  }
};
