import { Placement } from '@popperjs/core';

const oppositeDirections = {
  top: 'bottom',
  bottom: 'top',
  right: 'left',
  left: 'right',
};

type Direction = keyof typeof oppositeDirections;

export const getOppositePosition = (position: Direction) =>
  oppositeDirections[position];

const splitPlacement = (placement: Placement) =>
  placement.split('-') as Direction[];


export function getArrowStyles(
  placement: Placement | undefined,
  arrowSize: number
): React.CSSProperties {
  if (typeof placement !== 'string') return {};

  const [position] = splitPlacement(placement);
  const oppositePosition = getOppositePosition(position);

  if (!oppositePosition) return {};

  const styles: React.CSSProperties = {
    [oppositePosition]: `-${arrowSize / 2}px`,
    width: arrowSize,
    height: arrowSize,
    zIndex: -1,
  };

  return styles;
}

export function getBoxShadow(placement: Placement, color: string) {
  if (placement.includes('top')) {
    return `2px 2px 2px 0 ${color}`;
  }

  if (placement.includes('bottom')) {
    return `-1px -1px 1px 0 ${color}`;
  }

  if (placement.includes('right')) {
    return `-1px 1px 1px 0 ${color}`;
  }

  if (placement.includes('left')) {
    return `1px -1px 1px 0 ${color}`;
  }
}
