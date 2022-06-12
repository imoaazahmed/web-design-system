## IN STALE (TO BE DEPRECATED) PLEASE OPEN YOUR PRS HERE [FRONTEND-SDK](https://github.com/tradeling/web-frontend)

# Tradeling Components & Storybook

Welcome to the component library for Tradeling.com written in React.js +
TypeScript. This repo exists to:

- Speed up the development process by creating reusable components for the
  frontend team.
- Make it easy to discover existing components that match the UI design (ala
  Storybook).
- Develop responsive and pixel perfect components in isolation.
- Make it easy to review & improve Visual designs.

## Getting Started

To get started:

```bash
git clone git@github.com:tradeling/web-design-system.git
cd web-design-system

# Install and symlink packages (from the root)
yarn && yarn bootstrap

# Build packages
yarn build

# Start Storybook
yarn storybook
```

> WARNING 🚨: Ensure you run `yarn install` from the root NOT from inside the
> `packages` directory\*\*. It might create multiple `yarn.lock` file which
> isn't right for a monorepo

Tradeling's design system uses [Lerna](https://lerna.js.org/) to manage
dependencies when developing locally.

## Commands

| Commands         | Description                                   |
| ---------------- | --------------------------------------------- |
| `yarn bootstrap` | Install dependencies and link local packages. |
| `yarn build`     | Build all packages.                           |
| `yarn clean`     | Remove `node_modules` from all packages.      |
| `yarn lint`      | Lint all packages.                            |
| `yarn css`       | Generate CSS from tradeling theme             |


## Component Status

- Add Status to each component README or at the root README
- Cleanup component styles using the new Chakra API
- Component status:
    - **SelectV2:** complete but has bugs with popper.js (ask Avaneesh)
    - **AutocompleteV2:** review and test thoroughly
    - **Carousel:** cleanup (keen-slider, https://github.com/vercel/commerce/blob/master/components/product/ProductSlider/ProductSlider.tsx)
    - **PinInput:** Cleanup. It’s already in Chakra UI. Replace only “use-pin-input”


## Resources

- Check
  [this handy cheatsheet](https://github.com/sw-yx/react-typescript-cheatsheet/)
- Watch this
  [YouTube TypeScript playlist](https://www.youtube.com/playlist?list=PL6tu16kXT9Pp6XV3L3lrWideBW6Mcwaa5)
- For more in-depth learning, check out this
  [Frontend Masters TypeScript course](https://frontendmasters.com/courses/typescript-v2/)
- Go to [Lerna's Documentation](https://github.com/lerna/lerna)

## Storybook

Storybook is an open source tool for developing UI components in isolation for
React. It makes building UI components organized and efficient.

To learn more about Storybook, [check here](https://storybook.js.org/)

## Have questions?

If you're not sure about anything, kindly reach out the Segun, our Design System
Manager to help you.
