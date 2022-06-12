# Progress Steps

Progress is used to display the progress status for a task that have several
steps.
result.[View component](https://design-system.tradelingdev.com/?path=/story/progress-steps--step)

## Import

```jsx
import { Steps } from '@tradeling/web-design-system';
```

> Make sure that [design system](https://github.com/tradeling/web-design-system)
> is installed in your application.

## Usage

### Basic usage

to make the Steps all together you can use :

```jsx
export const steps = () => (
  <Steps current={number('current', 1)}>
    <Steps.Step>Business type</Steps.Step>
    <Steps.Step>Business information</Steps.Step>
    <Steps.Step>Identity verification</Steps.Step>
    <Steps.Step>Business documents</Steps.Step>
  </Steps>
);
```

[View component](https://design-system.tradelingdev.com/?path=/story/progress-steps--step)

### Single step

You can pass the step number from `index={1}` and select the status as there are
3 status which is

```jsx
export const step = () => (
  <Steps.Step
    index={1}
    status={select('status', ['unvisited', 'complete', 'active'], 'unvisited')}
  >
    Business type
  </Steps.Step>
);
```

`'unvisited'`,
![image](https://user-images.githubusercontent.com/22845697/82356670-f47bd100-9a14-11ea-811c-3d55fc8a1d85.png)
`'complete'`,
![image](https://user-images.githubusercontent.com/22845697/82359613-27c05f00-9a19-11ea-8321-2129ae480408.png)
`'active'`
![image](https://user-images.githubusercontent.com/22845697/82359470-f9428400-9a18-11ea-89f4-eab4151ce1ea.png)
[View component](https://design-system.tradelingdev.com/?path=/story/progress-steps--step)

### Props

| Name  | Type   | Description                                                                                                                                           | Required? |
| ----- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| value | number | the status indpence of the number you gave for EXAMPLE: if you gave the index 2 it will move to next step and make the status for step 1 is completed | - ---     |
