# Tradeling Components & Storybook

Welcome to the component library for Tradeling.com. This repo exists to:

- Speed up the development process by creating reusable components for the
  frontend team.
- Make it easy to discover existing components that match the UI design (ala
  Storybook).
- Develop responsive and pixel perfect components in isolation.
- Make it easy to review & improve Visual designs.

## React & TypeScript

This repo uses React.js and Typescript to improve the quality of components,
provide types and autocomplete for all components.

### If you’re new to TypeScript and React

- Check
  [this handy cheatsheet](https://github.com/sw-yx/react-typescript-cheatsheet/)
- Watch this
  [YouTube TypeScript playlist](https://www.youtube.com/playlist?list=PL6tu16kXT9Pp6XV3L3lrWideBW6Mcwaa5)
- For more in-depth learning, check out this
  [Frontend Masters TypeScript course](https://frontendmasters.com/courses/typescript-v2/)

## Components & Storybook

Storybook is an open source tool for developing UI components in isolation for
React. It makes building UI components organized and efficient.

To learn more about Storybook, [check here](https://storybook.js.org/)

### How do I add a component to storybook?

1. Take a component from the Zeplin design, and create the component like you
   normally would

2. Create a new file in the `[component]` folder and name it
   `[component].stories.tsx`

3. Use this boilerplate:

```jsx
// [component]/[component].stories.tsx

export default {
  title: 'Button',
};

export const Example = () => <Button>Click me</Button>;
```

4. If a component has a data dependency, create a mock data in the story and
   pass it to the component.

5. Run `yarn storybook` to open storybook

6. Check the component styles and test it's responsiveness

### Have questions?

If you're not sure about anything, kindly reach out the Segun, our Design System
Manager to help you.

## Commands

This repo was created using React, TypeScript, Jest and Storybook. The design
system is scaffolded inside `/src`, and also sets up a
[Parcel-based](https://parceljs.org) playground for it inside `/example`.

The recommended workflow is to run TSDX in one terminal:

**`yarn dev`**: Builds to `/dist` and runs the project in watch mode so any
edits you save inside `src` causes a rebuild to `/dist`.

**`yarn storybook`**: This loads the stories from `./stories` or any file that
ends with `.stories.tsx`.

**`yarn test`**: This runs the test watcher (Jest) in an interactive mode

## File Structure

This is the folder structure we set up for you:

```
/example
  index.html
  index.tsx       # playgroud to test components in a demo app
  package.json
  tsconfig.json
/src
  components/
    button/
      index.ts
      button.tsx
      button.stories.tsx
      button.test.tsx
    index.ts
  theme/
    foundations/
    components/
  index.ts        # export new components here
.gitignore
package.json
README.md            # improve this readme
tsconfig.json
```
