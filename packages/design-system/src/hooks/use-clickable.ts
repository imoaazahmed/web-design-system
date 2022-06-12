import React from 'react';

export interface UseClickableProps {
  disabled?: boolean;
  onClick?: React.MouseEventHandler;
  onKeyDown?: React.KeyboardEventHandler;
}

export function useClickable(props: UseClickableProps) {
  const { disabled, onClick, onKeyDown } = props;

  const handleClick = React.useCallback(
    (event: React.MouseEvent) => {
      if (disabled) {
        event.stopPropagation();
        event.preventDefault();
        return;
      }

      (event.currentTarget as HTMLElement).focus();

      onClick?.(event);
    },
    [disabled, onClick]
  );

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent) => {
      onKeyDown?.(event);

      if (disabled) return;

      if (event.key === 'Enter' || event.key === ' ') {
        (event.currentTarget as HTMLElement).click();
      }
    },
    [disabled, onKeyDown]
  );

  return { onClick: handleClick, onKeyDown: handleKeyDown, tabIndex: 0 };
}
