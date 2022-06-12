# Country Flag

Country Flag can be used to render a country flag.
[View Component](https://design-system.tradelingdev.com/?path=/story/countryflag--basic).

## Installation

Design System can be added as a dependency from
[here](https://github.com/tradeling/web-design-system-sdk/releases).

## Import

```jsx
import { CountryFlag } from '@tradeling/web-design-system';
```

## Usage

### Default country flag

```jsx
<CountryFlag countryCode="AE" />
```

### SVG country flag

```jsx
<CountryFlag svg countryCode="AE" />
```

## Props

It accepts all the props accepted by [`<Box />`](https://chakra-ui.com/box)
component. Additionally, following props can be passed to it:

| Name        |  Type   | Default |                                                                Description                                                                 | Required |
| ----------- | :-----: | :-----: | :----------------------------------------------------------------------------------------------------------------------------------------: | :------: |
| countryCode | string  |    -    | Two character country code like AE, CN etc [here](https://github.com/lukes/ISO-3166-Countries-with-Regional-Codes/blob/master/all/all.csv) |   yes    |
| svg         | boolean |  true   |                                               Whether to use svg image (true) or not (false)                                               |    -     |
