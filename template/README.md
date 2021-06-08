# React Native Template

Our official template for starting new React Native projects.

## What's Included

* Typescript
* ESLint & Prettier
* Babel Module Resolution (using `babel-plugin-module-resolver`)
* React Navigation
* [Flipper](https://fbflipper.com/) Support
* [Hermes](https://hermesengine.dev/) enabled on iOS and Android (to disable see  [disabling hermes](#disabling-hermes))
* ENV Support
* Scripts for Updating Packages, Finding Dead Code and Cleaning Temporary Files (see [keeping things clean](#keeping-things-clean))

## Getting Started

### Pre-requisites

* Make sure you have the latest Node LTS Installed (v.14.15.1)
* Make sure you have Yarn installed (`npm install -g yarn`)
* [For Android] Install [Android Studio](https://developer.android.com/studio) and Android SDK
* [For Debugging] Install [Flipper](https://fbflipper.com/)

### Running on iOS

* Install Pods using `npx pod-install ios`
* Run the project: `yarn ios`
* Alternatively you can open the `iOS` folder in Xcode and run that way

### Running on Android

* Run the project using `yarn android`
* Alternatively, open the `android` folder in Android Studio and run that way



## Installing Pods for iOS

One common pain point in building React Native applications for iOS is Cocoapods dependencies. It can be difficult to maintain the correct dependencies and lock file version across developer machines using `pod install`. To solve this problem this project uses the  [`pod-install` package](https://www.npmjs.com/package/pod-install). This tool makes sure that everyone is on the same page regarding Ruby and Cocoapods versions. Usage:

```bash
Usage: pod-install <project-directory> [options]

Install pods in your project

Options:
  -V, --version      output the version number
  --quiet            Only print errors
  --non-interactive  Disable interactive prompts
  -h, --help         output usage information
```

```bash
$ npx pod-install ios
```



## Disabling Hermes

[Hemes](https://hermesengine.dev/) is a new Javascript engine developed by Facebook that is optimized for React Native applications. By default this template has Hermes enabled for both iOS and Android. 

### Disabling on iOS

In `ios/Podfile`, look for the following code block:

```ruby
  use_react_native!(
    :path => config[:reactNativePath],
    # to enable hermes on iOS, change `false` to `true` and then install pods
    :hermes_enabled => true 
  )
```

Set `:hermes_enabled` to `false`

### Disabling on Android

In `android/app/build.gradle` and look for the following code block:

```groovy
project.ext.react = [
    enableHermes: true,  // clean and rebuild if changing
]
```

Set `enableHermes` to `false`



## Environment Variables

This template ships with [react-native-dotenv](https://www.npmjs.com/package/react-native-dotenv) out of the box. By default, the module will read variables from `.env` at the root of the project and allow them to be imported from `@env`. So if you have a variable called `API_KEY` in your `.env` file, you can import it into your code like so:

```js
import { API_KEY } from '@env'
```

You will notice when importing new variables that Typescript complains. To fix the error, add the variable to `typings/env.d.ts`



## Keeping Things Clean

This template includes several scripts that make it easier to maintain the project as it grows.

* **Updating Dependencies**: Run `yarn dep-update` to check for outdated dependencies in the project. Running `yarn dep-update -u` will update the packages. This script uses [npm-check-updates](https://www.npmjs.com/package/npm-check-updates).
* **Finding Unused Code**: Run `yarn find-deadcode` to check if there is any exported code that is not being used. **Please use with care, there will be false positives**. This script uses [ts-prune](https://github.com/nadeesha/ts-prune)
* **Clearing Temporary Files**: Run `yarn clean-project` to clean out any temporary files related to the project. This script uses [react-native-clean-project](https://www.npmjs.com/package/react-native-clean-project)



