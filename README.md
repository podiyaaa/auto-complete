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

### Installation - macOS
- initially run through folowing codes 
`brew install node`  
`brew install yarn`  
`brew install watchman`  
`brew tap AdoptOpenJDK/openjdk`  
`brew cask install adoptopenjdk8`  
- next install react-native-cli
`npm install -g react-native-cli`  

### Installation - Windows
- install java JDK - SET environment variables to PATH ( JAVA_HOME & ANDROID_HOME)
- install node [Node Download](https://nodejs.org/en/download/ "Node Download")
- install yarn [Yarn Download](https://yarnpkg.com/lang/en/docs/install/#windows-stable "Yarn Download")
- next install react-native-cli
`npm install -g react-native-cli` 

### Run application
- open terminal and got to **auto-complete/** project directory.  
- open **android/local.properties** and set Android Sdk path to **sdk.dir**  
- run followings  
`yarn` - this will install all node frameworks to your project node modules.  
`react-native link` = this will link all asserts to both android and ios projects.    
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

