import React, { TouchEvent } from 'react';

export interface EventData {
  event: MouseEvent | TouchEvent;
  deltaX: number;
  deltaY: number;
  absX: number;
  absY: number;
  first: boolean;
  initial: [number, number];
  velocity: number;
  dir: 'Left' | 'Right' | 'Up' | 'Down';
}

type SwipeEventType =
  | 'onSwipedLeft'
  | 'onSwipedRight'
  | 'onSwipedUp'
  | 'onSwipedDown';

type SwipeCallback = (eventData: EventData) => void;

interface UseSwipableState {
  el?: HTMLElement;
  xy: [number, number];
  swiping: boolean;
  eventData: EventData;
  start?: any;
  cleanUpTouch?: null | (() => void);
}

//@ts-ignore
const initialState: UseSwipableState = {
  xy: [0, 0],
  swiping: false,
};

export enum SwipeDirection {
  LEFT = 'Left',
  RIGHT = 'Right',
  UP = 'Up',
  DOWN = 'Down',
}

function getDirection(
  absX: number,
  absY: number,
  deltaX: number,
  deltaY: number
) {
  const isLeft = absX > absY;

  if (isLeft) {
    return deltaX > 0 ? SwipeDirection.LEFT : SwipeDirection.RIGHT;
  }

  return deltaY > 0 ? SwipeDirection.UP : SwipeDirection.DOWN;
}

function rotateXYByAngle(
  pos: [number, number],
  angle?: number
): [number, number] {
  if (!angle || angle === 0) {
    return pos;
  }

  const angleInRadians = (Math.PI / 180) * angle;

  const x =
    pos[0] * Math.cos(angleInRadians) + pos[1] * Math.sin(angleInRadians);
  const y =
    pos[1] * Math.cos(angleInRadians) - pos[0] * Math.sin(angleInRadians);

  return [x, y];
}

type SetterFn = (
  state: UseSwipableState,
  props: UseSwipableProps
) => UseSwipableState;

type Setter = (fn: SetterFn) => void;

function getHandlers(set: Setter, handlerProps: UseSwipableProps) {
  const onStart = (event: any) => {
    // if more than a single touch don't track, for now...
    if (event.touches?.length > 1) return;

    //@ts-expect-error
    set((state, props) => {
      const { trackMouse } = props;
      // setup mouse listeners on document to track swipe since swipe can leave container
      if (trackMouse) {
        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseup', onUp);
      }

      const _event = event.touches ? event.touches[0] : event;
      const { clientX, clientY } = _event as React.Touch;

      const xy = rotateXYByAngle([clientX, clientY], props.rotationAngle);

      return {
        ...state,
        ...initialState,
        eventData: {
          initial: [...xy],
          first: true,
        },
        xy,
        start: event.timeStamp || 0,
      };
    });
  };

  const onMove = (event: any) => {
    set((state, props) => {
      if (!state.xy[0] || !state.xy[1] || event.touches?.length > 1) {
        return state;
      }
      const _event = event.touches ? event.touches[0] : event;
      const { clientX, clientY } = _event as React.Touch;
      const [x, y] = rotateXYByAngle([clientX, clientY], props.rotationAngle);

      const deltaX = state.xy[0] - x;
      const deltaY = state.xy[1] - y;

      const absX = Math.abs(deltaX);
      const absY = Math.abs(deltaY);

      const time = (event.timeStamp || 0) - state.start;
      const velocity = Math.sqrt(absX * absX + absY * absY) / (time || 1);

      // if swipe is under delta and we have not started to track a swipe: skip update
      if (
        props.delta &&
        absX < props.delta &&
        absY < props.delta &&
        !state.swiping
      ) {
        return state;
      }

      const dir = getDirection(absX, absY, deltaX, deltaY);

      //@ts-ignore
      const eventData: EventData = {
        ...state.eventData,
        event,
        absX,
        absY,
        deltaX,
        deltaY,
        velocity,
        dir,
      };

      props.onSwiping?.(eventData);

      // track if a swipe is cancelable(handler for swiping or swiped(dir) exists)
      // so we can call preventDefault if needed
      let cancelablePageSwipe = false;
      const swipeEventType = `onSwiped${dir}` as SwipeEventType;
      if (props.onSwiping || props.onSwiped || props[swipeEventType]) {
        cancelablePageSwipe = true;
      }

      const preventDefault = props.preventDefaultTouchmoveEvent?.(event, dir);

      if (
        cancelablePageSwipe &&
        preventDefault &&
        props.trackTouch &&
        event.cancelable
      ) {
        event.preventDefault();
      }

      // first is now always false
      return {
        ...state,
        eventData: {
          ...eventData,
          first: false,
        },
        swiping: true,
      };
    });
  };

  const onEnd = (event: any) => {
    set((state, props) => {
      let eventData = {} as EventData;
      if (state.swiping) {
        eventData = { ...state.eventData, event };

        props.onSwiped?.(eventData);

        const handler = `onSwiped${eventData.dir}` as SwipeEventType;

        props[handler]?.(eventData);
      }

      return {
        ...state,
        ...initialState,
        eventData,
      };
    });
  };

  const cleanUpMouse = () => {
    // safe to just call removeEventListener
    document.removeEventListener('mousemove', onMove);
    document.removeEventListener('mouseup', onUp);
  };

  const onUp = (event: any) => {
    cleanUpMouse();
    onEnd(event);
  };

  const attachTouch = (el: HTMLElement) => {
    if (!el?.addEventListener) return;

    // attach touch event listeners and handlers
    const handlers = {
      touchstart: onStart,
      touchmove: onMove,
      touchend: onEnd,
    };

    Object.entries(handlers).forEach(([evt, handler]) =>
      el.addEventListener(evt, handler)
    );

    // return properly scoped cleanup method for removing listeners
    return () => {
      Object.entries(handlers).forEach(([evt, handler]) =>
        el.removeEventListener(evt, handler)
      );
    };
  };

  const onRef = (el: HTMLElement | null) => {
    // "inline" ref functions are called twice on render, once with null then again with DOM element
    // ignore null here
    if (el === null) return;
    set((state, props) => {
      // if the same DOM el as previous just return state
      if (state.el === el) return state;

      const addState = {} as UseSwipableState;
      // if new DOM el clean up old DOM and reset cleanUpTouch
      if (state.el && state.el !== el && state.cleanUpTouch) {
        state.cleanUpTouch();
        addState.cleanUpTouch = null;
      }
      // only attach if we want to track touch
      if (props.trackTouch && el) {
        addState.cleanUpTouch = attachTouch(el);
      }

      // store event attached DOM el for comparison, clean up, and re-attachment
      return { ...state, el, ...addState };
    });
  };

  // set ref callback to attach touch event listeners
  const output: any = { ref: onRef };

  // if track mouse attach mouse down listener
  if (handlerProps.trackMouse) {
    output.onMouseDown = onStart;
  }

  return [output, attachTouch];
}

function updateTransientState(
  state: UseSwipableState,
  props: UseSwipableProps,
  attachTouch: (el: HTMLElement) => (() => void) | undefined
) {
  const addState = {} as UseSwipableState;
  // clean up touch handlers if no longer tracking touches
  if (!props.trackTouch && state.cleanUpTouch) {
    state.cleanUpTouch();
    addState.cleanUpTouch = null;
  } else if (props.trackTouch && !state.cleanUpTouch) {
    // attach/re-attach touch handlers
    if (state.el) {
      addState.cleanUpTouch = attachTouch(state.el);
    }
  }
  return { ...state, ...addState };
}

export interface UseSwipableProps {
  // Event handler/callbacks
  onSwiped?: SwipeCallback;
  onSwipedLeft?: SwipeCallback;
  onSwipedRight?: SwipeCallback;
  onSwipedUp?: SwipeCallback;
  onSwipedDown?: SwipeCallback;
  onSwiping?: SwipeCallback;

  // Configuration Props
  delta?: number;
  preventDefaultTouchmoveEvent?: (
    event: TouchEvent,
    dir: SwipeDirection
  ) => boolean;
  trackTouch?: boolean;
  trackMouse?: boolean;
  rotationAngle?: number;
}

const defaultProps: UseSwipableProps = {
  preventDefaultTouchmoveEvent: () => false,
  delta: 10,
  rotationAngle: 0,
  trackTouch: true,
};

export function useSwipeable(props: UseSwipableProps) {
  const transientState = React.useRef(initialState);
  const transientProps = React.useRef<UseSwipableProps>();

  transientProps.current = { ...defaultProps, ...props };

  const [handlers, attachTouch] = React.useMemo(
    () =>
      getHandlers(
        function (cb) {
          if (!transientProps.current) return;

          transientState.current = cb(
            transientState.current,
            transientProps.current
          );
        },
        { trackMouse: props.trackMouse }
      ),
    [props.trackMouse]
  );

  transientState.current = updateTransientState(
    transientState.current,
    transientProps.current,
    attachTouch
  );

  return handlers;
}
