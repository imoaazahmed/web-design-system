# Radio

Radio component can be used within the forms as a form element to render radio
buttons.
[View Component](https://design-system.tradelingdev.com/?path=/story/form-elements--radio).

## Installation

Design System can be added as a dependency from
[here](https://github.com/tradeling/web-design-system-sdk/releases).

## Import

```jsx
import { Radio } from '@tradeling/web-design-system';
```

## Usage

### Uncontrolled radio

```jsx
<Radio value="one">Radio 1</Radio>
```

### Controlled checked radio

```jsx
<Radio isChecked value="one">
  Radio 1
</Radio>
```

### Disabled radio

```jsx
<Radio isDisabled value="one">
  Radio 1
</Radio>
```

## Props

It accepts all the props accepted by [`<Radio />`](https://chakra-ui.com/radio)
component.
