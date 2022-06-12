import * as React from 'react';

const hasComplexChildren = (
  element: React.ReactNode
): element is React.ReactElement<{ children: React.ReactNode[] }> =>
  React.isValidElement(element) &&
  hasChildren(element) &&
  React.Children.toArray(element.props.children).reduce(
    (response: boolean, child: React.ReactNode): boolean =>
      response || React.isValidElement(child),
    false
  );

const hasChildren = (
  element: React.ReactNode
): element is React.ReactElement<{ children: React.ReactNode[] }> =>
  React.isValidElement<{ children?: React.ReactNode[] }>(element) &&
  Boolean(element.props.children);

export type MapFunction = (
  child: React.ReactNode,
  index?: number,
  children?: readonly React.ReactNode[]
) => React.ReactNode;

export function deepMap(
  children: React.ReactNode,
  deepMapFn: MapFunction
): React.ReactNode[] {
  return React.Children.toArray(children).map(
    (
      child: React.ReactNode,
      index: number,
      mapChildren: readonly React.ReactNode[]
    ) => {
      if (React.isValidElement(child) && hasComplexChildren(child)) {
        // Clone the child that has children and map them too
        return deepMapFn(
          React.cloneElement(child, {
            ...child.props,
            children: deepMap(child.props.children, deepMapFn),
          })
        );
      }
      return deepMapFn(child, index, mapChildren);
    }
  );
}

export default deepMap;
