## React Native Template

### Usage

```bash
npx react-native init MyApp --template https://github.com/vora/react-native-template.git

```

### What's Included

- Typescript
- ESLint & Prettier
- Babel Module Resolution using `babel-plugin-module-resolver`
- React Navigation
- Optional Redux & Redux Persist Setup
- Flipper Support enabled out of the box
- Hermes on iOS and Android enabled out of the box. (See [disabling hermes](#disabling-hermes) for more info)
- ENV support with `react-native-dotenv`

### Disabling Hermes

**iOS**: In `/ios/Podfile`, in the `use_react_native` function, set `:hermes_enabled => ` to `false`

**Android**: In `/android/app/build.gradle`, set the `enableHermes` flag in `project.ext.react` to `false`
