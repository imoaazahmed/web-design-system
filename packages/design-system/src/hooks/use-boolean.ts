import React from 'react';

export function useBoolean(initial?: boolean) {
  const [value, setValue] = React.useState(!!initial);

  const actions = React.useMemo(
    () => ({
      on: () => setValue(true),
      off: () => setValue(false),
      toggle: () => setValue(prevValue => !prevValue),
    }),
    []
  );

  return [value, actions] as const;
}
