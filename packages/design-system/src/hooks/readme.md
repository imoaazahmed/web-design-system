# Hooks

Set of a helpful hooks used internally to build interactive components.

All hooks are based on more idiomatic to React hooks API, e.g. like `useState`
with array destructuring `const [value, actions] = useBoolean(false)`

> 🚨 Note: These hooks are used internally only, and not exposed to the end
> users

## useBoolean

React hook used to setup common boolean (on/off/toggle) operations

```jsx
const [value, actions] = useBoolean(initialState);
```

Returns:

- `value`: the resolved value of the component
- `actions`: collection of methods to set state
  - `on`: sets state to `true`
  - `off`: sets state to `false`
  - `toggle`: toggles state between `true` and `false`

Options:

- `initialState`: the initial state value (either `true` or `false`)

## useControllable

React hook used to manage controlled and uncontrolled variations of a component.

```jsx
const [value, setValue] = useControllable(options);
```

Returns:

- `value`: the resolved value whether in controlled or uncontrolled mode
- `setValue`: the function to set the new value

Options:

- `value`: the controlled value of the component
- `defaultValue`: the initial or uncontrolled value of the component
- `onChange`: the function called when value changes

To illustrate this hook, let's create a simple counter component

```jsx
function Counter(props) {
  const { value: valueProp, defaultValue, onChange } = props;

  const [value, setValue] = useControllable({
    value: valueProp,
    defaultValue,
    onChange,
  });

  return (
    <div>
      <button onClick={() => setValue(value + 1)}>Decrease</button>
      <span>{value}</span>
      <button onClick={() => setValue(value + 1)}>Increase</button>
    </div>
  );
}
```

Now you can use the `Counter` in both controlled and uncontrolled mode.

```jsx
function Uncontrolled() {
  return <Counter defaultValue={0} />;
}
```

```jsx
function Controlled() {
  const [value, setValue] = React.useState(0);
  return <Counter value={value} onChange={setValue} />;
}
```

## useUpdateEffect

React hook use to execute an effect only when it's dependencies changes. It
skips the mount phase.

```jsx
useUpdateEffect(effect, deps);
```
