import { Placement } from '@popperjs/core';
import { useId } from '@reach/auto-id';
import { useInteractOutside } from '@react-aria/interactions';
import React, { useRef, useState } from 'react';
import { usePopper } from 'react-popper';
import { useControllable, useUpdateEffect } from '../../hooks';
import { callAllHandlers, mergeRefs } from '../../utils';
import { getPlacementBasedOnDirection } from '../../utils/get-placement';
import { useIsRTL } from '../theme-provider';
import { getArrowStyles, getBoxShadow } from './popover.utils';

export type UsePopoverReturnType = ReturnType<typeof usePopover>;

export interface UsePopoverProps {
  id?: string;
  trigger?: 'click' | 'hover';
  isOpen?: boolean;
  defaultIsOpen?: boolean;
  placement?: Placement;
  closeOnBlur?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  strategy?: 'fixed' | 'absolute';
  gutter?: number;
  arrowSize?: number;
  closeDelay?: number;
  arrowShadowColor?: string;
}

type HTMLProps = React.HTMLAttributes<any> & React.RefAttributes<any>;
type PropGetter<P = {}> = (props?: HTMLProps & P) => HTMLProps;

export function usePopover(props: UsePopoverProps = {}) {
  const {
    isOpen: isOpenProp,
    trigger = 'click',
    defaultIsOpen,
    placement: originalPlacement = 'bottom-start',
    closeOnBlur = true,
    onOpen,
    onClose,
    strategy,
    gutter: gutterProp = 0,
    id: idProp,
    arrowShadowColor,
    arrowSize = 10,
    closeDelay = 100,
  } = props;

  /**
   * Placement
   */
  const isRtl = useIsRTL();
  const placement = getPlacementBasedOnDirection(originalPlacement, isRtl);

  /**
   * Get the minimum gutter based on arrow size
   */
  const minGutter = Number((1.414 * arrowSize) / 2).toFixed(3);
  const gutter =
    gutterProp < Number(minGutter) ? Number(minGutter) : gutterProp;

  const [triggerElement, setTriggerElement] = useState<HTMLElement | null>(
    null
  );
  const [popoverElement, setPopoverElement] = useState<HTMLElement | null>(
    null
  );
  const [arrowElement, setArrowElement] = useState<HTMLElement | null>(null);

  const isHoveringRef = useRef(false);

  const { styles, attributes, state } = usePopper(
    triggerElement,
    popoverElement,
    {
      modifiers: [
        {
          name: 'flip',
          options: {
            fallbackPlacements: ['top-start', 'bottom-start'],
          },
        },
        {
          name: 'computeStyles',
          options: { gpuAcceleration: false },
        },
        {
          name: 'offset',
          options: {
            offset: [0, gutter],
          },
        },
        {
          name: 'arrow',
          options: {
            element: arrowElement,
          },
        },
      ],
      placement,
      strategy,
    }
  );

  const uuid = useId();
  const id = idProp || uuid;
  const triggerId = `trigger-${id}`;
  const popoverId = `popover-${id}`;

  const [isOpen, setIsOpen] = useControllable({
    value: isOpenProp,
    defaultValue: defaultIsOpen,
    onChange: isOpen => {
      if (isOpen) {
        onOpen?.();
      } else {
        onClose?.();
      }
    },
  });

  const closeTimeout = useRef<any>();

  useUpdateEffect(() => {
    if (trigger === 'hover') return;
    if (isOpen) {
      popoverElement?.focus();
    }
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useInteractOutside({
    ref: { current: popoverElement },
    onInteractOutside: event => {
      if (
        trigger === 'click' &&
        closeOnBlur &&
        !triggerElement?.contains(event.target as HTMLElement)
      ) {
        handleClose();
      }
    },
  });

  const getContentProps: PropGetter = (props = {}) => {
    const contentProps: HTMLProps = {
      ...props,
      ...attributes.popper,
      tabIndex: -1,
      role: trigger === 'hover' ? 'tooltip' : 'dialog',
      ref: mergeRefs(setPopoverElement, props.ref),
      id: popoverId,
      hidden: !isOpen,
      style: {
        ...styles.popper,
        ...props.style,
      },
    };

    if (trigger === 'hover') {
      contentProps.role = 'tooltip';
      contentProps.onMouseEnter = callAllHandlers(props.onMouseEnter, () => {
        if (closeTimeout.current) {
          clearTimeout(closeTimeout.current);
        }
        isHoveringRef.current = true;
      });
      contentProps.onMouseLeave = callAllHandlers(props.onMouseLeave, () => {
        isHoveringRef.current = false;
        handleClose();
      });
    }

    return contentProps;
  };

  const getArrowProps: PropGetter = (props = {}) => {
    const computedStyles = getArrowStyles(state?.placement, arrowSize);

    return {
      ...props,
      ref: mergeRefs(setArrowElement, props.ref),
      style: {
        ...styles.arrow,
        ...computedStyles,
      },
    };
  };

  const getInnerArrowProps: PropGetter = (props = {}) => {
    return {
      style: {
        ...getArrowProps(props).style,
        transform: 'rotate(45deg)',
        boxShadow: arrowShadowColor
          ? getBoxShadow(state?.placement ?? placement, arrowShadowColor)
          : undefined,
        width: arrowSize,
        height: arrowSize,
        top: 0,
        left: 0,
      },
    };
  };

  const getTriggerProps: PropGetter = (props = {}) => {
    const triggerProps: HTMLProps = {
      ...props,
      is: triggerId,
      ref: setTriggerElement,
      'aria-haspopup': 'dialog',
      'aria-expanded': isOpen,
      'aria-controls': popoverId,
    };

    if (trigger === 'hover') {
      triggerProps.onMouseEnter = callAllHandlers(props.onMouseEnter, () => {
        isHoveringRef.current = true;
        handleOpen();
      });

      triggerProps.onFocus = callAllHandlers(props.onFocus, handleOpen);
      triggerProps.onBlur = callAllHandlers(props.onBlur, () => {
        closeTimeout.current = setTimeout(handleClose, closeDelay);
      });

      triggerProps.onMouseLeave = callAllHandlers(props.onMouseLeave, () => {
        isHoveringRef.current = false;
        closeTimeout.current = setTimeout(() => {
          if (isHoveringRef.current === false) {
            handleClose();
          }
        }, closeDelay);
      });
    }

    if (trigger === 'click') {
      triggerProps.onClick = callAllHandlers(props.onClick, handleToggle);
    }

    return triggerProps;
  };

  React.useEffect(() => {
    return () => {
      if (closeTimeout.current) {
        clearTimeout(closeTimeout.current);
      }
    };
  });

  return {
    isOpen,
    setIsOpen,
    getTriggerProps,
    getContentProps,
    getArrowProps,
    getInnerArrowProps,
  };
}
