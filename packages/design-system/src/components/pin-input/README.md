# PinInput component

The PinCode component is optimized for entering sequences of digits. The most
common application is for entering security or verification codes. It is
optimized for entering digits quickly.

## Basic Example

Each input collects one digit at a time. When a digit is entered, focus
transfers to the next input in the sequence, until every input is filled in.

```jsx
<PinInput
  onChange={value => {
    console.log(value);
  }}
/>
```

## Changing the field length

PinCode expects you to pass a `noOfFields` prop to determine the number of
inputs rendered. This value is `4` by default.

```jsx
<PinInput
  noOfFields={6}
  onChange={value => {
    console.log(value);
  }}
/>
```

## Changing the placeholder

If you donʼt like the default placeholder (○), you can change that too. Notice
how each placeholder disappears when any of the inputs have focus.

```jsx
<PinInput noOfFields={6} placeholder="*" />
```

## Autofocus

There is a decent chance that if you are using `PinCode` you want it to be
focused on mount. Pass `autoFocus` prop to focus the first input on mount.

```jsx
<PinInput autoFocus noOfFields={6} placeholder="*" />
```

## The complete callback

You might need to submit the values when the user types through all the fields,
or pastes a value that populates all fields. Pass the `onComplete` prop to
achieve this.

```jsx
<PinInput
  autoFocus
  noOfFields={6}
  placeholder="*"
  onComplete={value => {
    console.log(value);
  }}
/>
```

## Controlled usage

As always, you can also control the value in the input fields programmatically
using the `value` and `onChange` prop.

```jsx
function Example() {
  const [value, setValue] = React.useState('');
  return <PinInput value={value} onChange={setValue} />;
}
```

## Enforcing only number

To allow only numbers in the pin input, pass the `type` prop and set it to
`number`

```jsx
<PinInput type="number" />
```
