# Google Place Auto Completer(React Native + Redux Saga)

### Requirements (A Mac is required to build projects with native code for iOS)
- react-native cli
- yarn
- node
- watchman
- openjdk
- Homebrew
- Xcode
- Android studio with emiulator

### Installation - 
- initially run through folowing codes (on macOS)
`brew install yarn`  
`brew install node`  
`brew install watchman`  
`brew tap AdoptOpenJDK/openjdk`  
`brew cask install adoptopenjdk8`  
- next install reac-native-cli
`npm install -g react-native-cli`

### Run application
- open terminal and got to **auto-complete/** project directory.
- run followings  
`yarn` - this will install all node frameworks to your project node modules.  
`yarn start -- --reset-cache` - this will start the react packager/server.  
`react-native run-ios` - this will build application and run on ios simiulator.  
`react-native run-android` - this will build application and run on android  emulator.  
### (react-native link error)
when you run the application you will see **error React Native CLI uses autolinking for native dependencies, but the following modules are linked manually** bla bla. don't worry it doesn't effect to the applicaiton for now ;).
### clean and run server
```
watchman watch-del-all &&
rm -rf $TMPDIR/react-native-packager-cache-* &&
rm -rf $TMPDIR/metro-bundler-cache-* && 
rm -rf node_modules/ && 
yarn cache clean &&
yarn install && 
yarn start -- --reset-cache
```

