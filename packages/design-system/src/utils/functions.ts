import * as React from 'react';
import { FunctionArguments } from './types';

export function callAllHandlers<T extends (event: any) => void>(
  ...fns: (T | undefined)[]
) {
  return function (event: FunctionArguments<T>[0]) {
    fns.some(fn => {
      fn && fn(event);
      return event && event.defaultPrevented;
    });
  };
}

export function createContext<T>({
  strict = true,
  message = 'useContext must be inside a Provider with a value',
}) {
  const Context = React.createContext<T | undefined>(undefined);

  function useContext() {
    const context = React.useContext(Context);
    if (!context && strict) throw new Error(message);
    return context;
  }

  return [Context.Provider, useContext, Context] as [
    React.Provider<T>,
    () => T,
    React.Context<T>
  ];
}

type Ref<T> = React.Ref<T> | React.RefObject<T> | React.MutableRefObject<T>;

export function setRef<T>(ref: Ref<T>, node: T) {
  if (typeof ref === 'function') {
    ref(node);
  } else if (Object(ref) === ref) {
    (ref as React.MutableRefObject<T>).current = node;
  }
}

export function mergeRefs<T>(...refs: Array<Ref<T> | undefined>) {
  return (node: T | null) => {
    refs.forEach(ref => {
      if (ref) {
        setRef(ref, node);
      }
    });
  };
}
