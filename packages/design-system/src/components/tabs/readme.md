# Tabs

[View component](https://design-system.tradelingdev.com/?path=/story/tabs-tabs-example)

## Import

```jsx
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@tradeling/web-design-system';
```

> Make sure that [design system](https://github.com/tradeling/web-design-system)
> is installed in your application.

## Usage

```jsx
<Tabs>
  <TabList>
    <Tab>Tab 1</Tab>
    <Tab>Tab 2</Tab>
    <Tab>Tab 3</Tab>
    <Tab>Tab 4</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>Panel 1</TabPanel>
    <TabPanel>Panel 2</TabPanel>
    <TabPanel>Panel 3</TabPanel>
    <TabPanel>Panel 4</TabPanel>
  </TabPanels>
</Tabs>
```

## Props

`Tabs`

| Name    |          Type          |  Default   |     Description     | Required |
| ------- | :--------------------: | :--------: | :-----------------: | :------: |
| variant | `unstyled`, `enclosed` | `unstyled` | variant of the tabs |    -     |

> `Tabs` , `TabList`, `Tab`, `TabPanels` and `TabPanel` inherits chakra-ui
> components and accepts theirs chakra props. see chakra-ui tabs documentations
> [here](https://chakra-ui.com/tabs)
