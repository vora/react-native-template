## React Native Template

### Getting Started

**Pre-requisites**

- Make sure you have the latest NodeJS LTS Installed (v14.15.1)
- Make sure you have Yarn installed (`npm install -g yarn`)

**Running on iOS:**

1. Install Pods: `npx pod-install ios`
2. Run the Project from the terminal: `yarn ios`

### What's Included

- Typescript
- ESLint & Prettier
- Babel Module Resolution using `babel-plugin-module-resolver`
- React Navigation
- Optional Redux & Redux Persist Setup (WIP)
- Flipper Support enabled out of the box
- Hermes on iOS and Android enabled out of the box. (See [disabling hermes](#disabling-hermes) for more info)
- ENV support with `react-native-dotenv` (WIP)

### Disabling Hermes

**iOS**: In `/ios/Podfile`, in the `use_react_native` function, set `:hermes_enabled => ` to `false`

**Android**: In `/android/app/build.gradle`, set the `enableHermes` flag in `project.ext.react` to `false`
