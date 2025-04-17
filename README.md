This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# CashFlow - PRMTBNK

## Folder Structure

```
├── src
│   ├── components
│   │   ├── AddTransactionModal.tsx
│   │   ├── TotalBalance.tsx
│   │   └── TransactionItem.tsx
│   ├── data
│   │   ├── actions
│   │   │   └── financialActions.ts
│   │   ├── reducers
│   │   │   └── financialReducers.ts
│   │   └── store
│   │       └── index.ts
│   ├── screens
│   │   └── MainScreen.tsx
│   ├── types
│   │   └── index.ts
│   └── utils
│       └── format.ts
└── App.tsx
```

## Tech Stack

- [`React Native`](https://reactnative.dev/)
- [`Redux`](https://redux-toolkit.js.org/)

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Preparation

```bash
git clone https://github.com/mirfanfad/MyCashFlow.git
```

```bash
cd MyCashFlow
```

## Step 2: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 3: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## ScreenShot Apps

![Screenshot](/screenshots/IMG_3380D21136D3-1.jpeg)
