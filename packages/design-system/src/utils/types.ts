export type Nullish<T> = T | null;

export type ResponsiveValue<T> = T | Nullish<T>[] | { [breakpoint: string]: T };

export type FunctionArguments<T extends Function> = T extends (
  ...args: infer R
) => any
  ? R
  : never;

export type PropsOf<T extends React.ElementType = any> = Omit<
  React.ComponentPropsWithRef<T>,
  'color'
>;

export type PropGetter<T extends React.ElementType, P = {}> = (
  props?: PropsOf<T> & P,
  ref?: React.Ref<any>
) => PropsOf<T>;
