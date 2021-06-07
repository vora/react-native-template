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
- Flipper Support enabled out of the box
- Hermes on iOS and Android enabled out of the box. (See [disabling hermes](#disabling-hermes) for more info)
- ENV support with `react-native-dotenv` (WIP)

### A Note About iOS Pods

One common issue with React Native projects is different developers will have different version of Ruby which will cause `Podfile.lock` to change even when there are no changes to Pods. The solution to this is to use `npx pod-install ios` instead of just running `pod install` in the iOS directory. **Please do not run `pod install` in the iOS directory**, use `npx pod-install ios` instead.

### Disabling Hermes

**iOS**: In `/ios/Podfile`, in the `use_react_native` function, set `:hermes_enabled => ` to `false`

**Android**: In `/android/app/build.gradle`, set the `enableHermes` flag in `project.ext.react` to `false`
