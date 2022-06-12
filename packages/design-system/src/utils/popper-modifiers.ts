import { Modifier } from '@popperjs/core';

const matchWidthModifier: Modifier<'sameWidth', any> = {
  name: 'sameWidth',
  enabled: true,
  phase: 'beforeWrite',
  requires: ['computeStyles'],
  fn: ({ state }) => {
    state.styles.popper.width = `${state.rects.reference.width}px`;
  },
  //@ts-ignore This is wrong typing from `react-popper`
  effect: ({ state }) => {
    state.elements.popper.style.width = `${
      (state.elements.reference as HTMLElement).offsetWidth
    }px`;
  },
};

export interface GetModifierOptions {
  matchWidth?: boolean;
  offset?: [number, number];
  gutter?: number;
}

export function getModifiers(options: GetModifierOptions = {}) {
  const { matchWidth, offset, gutter = 8 } = options;

  const offsetModifier = {
    name: 'offset',
    options: {
      offset: offset ?? [0, gutter],
    },
  };

  const flipModifier = {
    name: 'flip',
    options: {
      fallbackPlacements: ['top-start', 'bottom-start'],
    },
  };

  const eventListenerModifier = {
    name: 'eventListener',
    options: {
      scroll: true,
      resize: true,
    },
  };

  const modifiers: any[] = [
    offsetModifier,
    flipModifier,
    eventListenerModifier,
  ];

  if (matchWidth) {
    modifiers.push(matchWidthModifier);
  }

  return modifiers;
}
