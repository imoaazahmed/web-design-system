/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';

/**
 * React hook use to execute an effect only when it's dependencies
 * changes. It skips the mount phase.
 */
export const useUpdateEffect: typeof React.useEffect = (effect, deps = []) => {
  const isInitialMount = React.useRef(true);

  React.useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      effect();
    }
  }, deps);
};
