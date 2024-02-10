## 1. Create Project

1. Software : 

    1. Nodejs
    2. Android Studio
    3. VSCode
    4. ExpressJS
    5. Mongodb


2. Create Project : 

  create Folder : 

      Full-Stack-React-Native-App

          npx create-expo-app app

          Press (Y)

It will create <strong>app</strong> folder

### Run Project : 

    cd app

    npm start

## 2. Install Dependencies :

    npm i @react-navigation/native @react-navigation/native-stack axios react-native-vector-icons @react-native-async-storage/async-storage


## 3. App Landing Page

### create folder :

  1. screens (folder) --->
      landingPage (folder) --->
        LandingPage.js (file)

<img  src='https://github.com/maainul/Starter-Files/assets/37740006/0bbb096c-3e6e-4433-a67b-5c1655baebb2'  width="200" />

LandingPage.js :
```js
import { Text, View } from "react-native"

export const LandingPage = () => {
    return (
        <View>
            <Text>Landing Page</Text>
            <Text>Welcome to the App</Text>
        </View>
    )
}

```
Remove all data from app.js and update with these data.

## App.js
```js
import { StyleSheet, Text, View } from 'react-native';
import { LandingPage } from './screens/landingPage/LandingPage';

export default function App() {
  return (
    <View style={styles.container}>
      <LandingPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

```  
Preview :

<img src='https://github.com/maainul/Starter-Files/assets/37740006/3796fa04-012c-4032-a854-6821153fa3fe' width='300' />


## 4. Add Footer In the Landing Page(Stick bottom part of the screen)
Before you go the Footer Section : Plese Read this:

```js
import { StyleSheet, Text, View } from 'react-native';
import { LandingPage } from './screens/landingPage/LandingPage';

export default function App() {
  return (
    <View style={styles.container}>
      <LandingPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    // alignItems:'center' // if you uncomment this then 
    it will take only the text screen.
  },

});

```

```js
import React from 'react';
import { View, Text } from 'react-native';

export const LandingPage = () => {
    return (
        <View style={{ flexDirection: 'column' }}>
            <View style={{ height: '15%', backgroundColor: 'powderblue', justifyContent: 'center', alignItems: 'center' }}>
                <Text>Section 1</Text>
            </View>
            <View style={{ height: '80%', backgroundColor: 'skyblue', justifyContent: 'center', alignItems: 'center' }}>
                <Text>Section 2</Text>
            </View>
            <View style={{ height: '5%', backgroundColor: 'steelblue', justifyContent: 'center', alignItems: 'center' }}>
                <Text>Section 3</Text>
            </View>
        </View>
    );
};

```
This is how we can divided the screen .
<img src='https://github.com/maainul/Starter-Files/assets/37740006/3af3cd49-4468-4863-8f93-0adc4ec7f9fc' width='300' />



You Can Read This :

https://reactnative.dev/docs/height-and-width

## Width : Vertical Gap
```js
import React from 'react';
import { View, Text } from 'react-native';

export const LandingPage = () => {
    return (
        <View style={{ flexDirection: 'row', height: '100%', gap: 10 }}>
            <View style={{ width: '20%', backgroundColor: 'powderblue', justifyContent: 'center', alignItems: 'center' }}>
                <Text>Section 1</Text>
            </View>
            <View style={{ width: '60%', backgroundColor: 'skyblue', justifyContent: 'center', alignItems: 'center' }}>
                <Text>Section 2</Text>
            </View>
            <View style={{ width: '20%', backgroundColor: 'steelblue', justifyContent: 'center', alignItems: 'center' }}>
                <Text>Section 3</Text>
            </View>
        </View>
    );
};

```

<img src='https://github.com/maainul/Starter-Files/assets/37740006/640711b1-7113-46ac-818d-baeccc785a21' width='300' />


Please Read This For All FlexBox Concepts:

https://reactnative.dev/docs/flexbox



### Now, Let's Design our Landing Page:
```js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const LandingPage = () => {
    return (
        <View style={{ flexDirection: 'column' }}>
            <View style={styles.landingPageHeader}>
                <Text>Landing Page</Text>
            </View>
            <View style={styles.middleSection}>
                <Text>Section 2</Text>
            </View>
            <View style={styles.footerSection}>
                <Text>Copyright © 2024 Butterfly Tech</Text>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    landingPageHeader:
    {
        height: '15%',
        // backgroundColor: 'powderblue',
        justifyContent: 'center',
        alignItems: 'center'
    },
    middleSection: {
        height: '80%',
        // backgroundColor: 'skyblue',
        justifyContent: 'center',
        alignItems: 'center'
    },
    footerSection: {
        height: '5%',
        backgroundColor: '#a0ccf0',
        justifyContent: 'center',
        alignItems: 'center'
    }

})
```

<img src='https://github.com/maainul/Starter-Files/assets/37740006/e275ea7f-92ea-496c-8b16-c975bf6b809b' width='300' />
