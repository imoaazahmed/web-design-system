# Checkbox

Checkbox component can be used within the forms as a form element to render
checkboxes.
[View Component](https://design-system.tradelingdev.com/?path=/story/form-elements--checkbox).

## Installation

Design System can be added as a dependency from
[here](https://github.com/tradeling/web-design-system-sdk/releases).

## Import

```jsx
import { Checkbox } from '@tradeling/web-design-system';
```

## Usage

### Uncontrolled checkbox

```jsx
<Checkbox value="one">Checkbox 1</Checkbox>
```

### Controlled checked checkbox

```jsx
<Checkbox isChecked value="one">
  Checkbox 1
</Checkbox>
```

### Disabled checkbox

```jsx
<Checkbox isDisabled value="one">
  Checkbox 1
</Checkbox>
```

## Props

It accepts all the props accepted by
[`<Checkbox />`](https://chakra-ui.com/checkbox) component.
