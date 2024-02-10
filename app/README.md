# Reactive Native Cheat Sheet

1. Create Project

2. Install Dependencies :
	
3. App Landing Page

4. Add Footer In the Screen

4. Button Creation in the Landing Page

5. Create Signin,Signup Page,AdminDashboard,UserDashboard

6. Navigation Bar Add.

7. Add Icon in Footer Menu

8. Footer Menue in the Dashboard.

9. Create Form (Login and Registration)

10. Save Data From App (Registration Form)

11. Context API For User and Admin

12. Menu Distribute for user and Admin

13. Profile Page Design


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

## 4. Button Creation Title and Image Attach in the Landing Page 

LandingPage.js

```js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Copyright } from '../../components/copyright/Copyright';
import { BrandTitle } from '../../components/BrandTitle/BrandTitle';
import { base } from './../../style';

export const LandingPage = () => {
    return (
        <View style={{ flexDirection: 'column' }}>
            <View style={styles.landingPageHeader}>
                <BrandTitle />
            </View>
            <View style={styles.middleSection}>
                <View style={styles.middleContainer}>
                    <View style={{
                        alignItems: 'center',
                        paddingBottom: 20
                    }}>
                        <Image
                            source={require("../../img/login-v2.png")}
                            style={base.authImage}
                        />
                    </View>

                    <View>
                        <TouchableOpacity
                            style={styles.btnSignin}
                        >
                            <Text
                                style={styles.btnText}
                            >Signin</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.btnSignup}
                        >
                            <Text
                                style={styles.btnText}
                            >Signup</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>


            <Copyright />
        </View>
    );
};

const styles = StyleSheet.create({
    landingPageHeader:
    {
        height: '30%',
        backgroundColor: 'powderblue', // Please Comment this line
        justifyContent: 'center',
        alignItems: 'center'
    },
    middleSection: {
        height: '65%',
        backgroundColor: 'skyblue', // Please Comment this line
        justifyContent: 'flex-start',
    },
    middleContainer: {
        backgroundColor: 'red', // Please Comment this line
        flexDirection: 'column',
        paddingLeft: 40,
        paddingRight: 40
    },

    btnSignin: {
        height: 46,
        backgroundColor: "#696cff",
        borderRadius: 20,
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 10
    },

    btnSignup: {
        height: 46,
        backgroundColor: '#ff7272',
        borderRadius: 20,
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10
    },

    btnText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center'
    }

})
```
<img src='https://github.com/maainul/Starter-Files/assets/37740006/3dcfc58f-f843-4683-a8d9-189804044a02' width='300' />

The layout : Background Color Suggested that Which component takes how many portion of screen

<img src='https://github.com/maainul/Starter-Files/assets/37740006/704cc2df-af88-4b6c-b871-7b63f236343b' width='300' />

## 5. Create Signin,Signup Page,AdminDashboard,UserDashboard
screens/auth/Signin.js
```js

import { Text, View } from 'react-native';

export const Signin = () => {
    return (
        <View>
            <Text >Sign in Page</Text>
        </View>
    )
}
```

screens/auth/Signup.js
```js

import { Text, View } from 'react-native';

export const Signup = () => {
    return (
        <View>
            <Text >Sign in Page</Text>
        </View>
    )
}
```

screens/Profile.js
```js
import { Text, View } from "react-native"

export const Profile = () => {
    return (
        <View>
            <Text>Profile</Text>
        </View>
    )
}

```
screens/dashboard/AdminDashboard.js
```js
import { Text, View } from "react-native"

export const AdminDashboard = () => {
    return (
        <View>
            <Text>Admin Dashboard</Text>
        </View>
    )
}
```
screens/dashboard/UserDashboard.js
```js
import { Text, View } from "react-native"

export const UserDashboard = () => {
    return (
        <View>
            <Text>User Dashboard</Text>
        </View>
    )
}
```
<img src='https://github.com/maainul/Starter-Files/assets/37740006/c13b4ed9-4f81-45dc-83dd-73e4e6fd4713' width='300' />

## 6.Navigation Bar Add and With Icon Rightside of Navigation Bar (Logout).

1. Install Package :

    npm i @react-navigation/native

    npm i @react-navigation/native-stack


2. Make Sure Your App is in that stage. Because After add nabar . you have to test. so add two button admin dashbord and user dashboard

<img src='https://github.com/maainul/Starter-Files/assets/37740006/bd1ab756-a0f6-4e80-ba61-173c4a245ae0' width='300' />

Update App.js

```js
import { View } from "react-native";
import { base } from "./components/styles";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LandingPage } from "./screens/LandingPage/LandingPage";
import { Signup } from "./screens/auth/Signup";
import { Signin } from "./screens/auth/Signin";
import { ForgotPassword } from "./screens/auth/ForgotPassword";
import { ResetPassword } from "./screens/auth/ResetPassword";
import { TwoStepVerification } from "./screens/auth/TwoStepVerification";
import { VerifyEmail } from "./screens/auth/VerifyEmail";
import { UserDashboard } from "./screens/dashboard/UserDashboard";
import { AdminDashboard } from "./screens/dashboard/AdminDashboard";
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <View style={base.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LandingPage">
          <Stack.Screen
            name="LandingPage"
            component={LandingPage}
            options={{
              headerShown: false, // Hide the header for the LandingPage
            }}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{
              headerShown: false, // Hide the header for the LandingPage
            }}
          />
          <Stack.Screen
            name="Signin"
            component={Signin}
            options={{
              headerShown: false, // Hide the header for the LandingPage
            }}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
          />
          <Stack.Screen
            name="ResetPassword"
            component={ResetPassword}
          />
          <Stack.Screen
            name="TwoStepVerification"
            component={TwoStepVerification}
          />
          <Stack.Screen
            name="VerifyEmail"
            component={VerifyEmail}
          />
          <Stack.Screen
            name="UserDashboard"
            component={UserDashboard}
            options={{
              headerRight: () => <HeaderMenu />
            }}
          />
          <Stack.Screen
            name="AdminDashboard"
            component={AdminDashboard}
            options={{
              headerRight: () => <HeaderMenu />
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

```

### HeaderMenu.js

```js
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { } from 'react-native';

export const HeaderMenu = () => {
    return (
        <View>
            <TouchableOpacity>
                <FontAwesome5 name='sign-out-alt' style={styles.iconStyle} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    iconStyle: {
        marginBottom: 3,
        alignSelf: 'center',
        fontSize: 25
    },
});

```
Import Header Menu in App.js


### Update LandingPage Like this . So that Can button submit is enable

```js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Copyright } from '../../components/copyright/Copyright';
import { BrandTitle } from '../../components/BrandTitle/BrandTitle';
import { base } from './../../style';

export const LandingPage = ({ navigation }) => {

    // Go to Home Page
    const handleNavigateToSignup = () => {
        navigation.navigate("Signup", {
            headerTitle: "Signup",
        });
    };

    const handleNavigateToSignin = () => {
        navigation.navigate("Signin", {
            headerTitle: "Signin",
        });
    };

    const handleNavigateToUserDashboard = () => {
        navigation.navigate("UserDashboard", {
            headerTitle: "Home",
        });
    };
    const handleNavigateToAdminDashboard = () => {
        navigation.navigate("AdminDashboard", {
            headerTitle: "Admin",
        });
    };


    return (
        <View style={{ flexDirection: 'column' }}>
            <View style={styles.landingPageHeader}>
                <BrandTitle />
            </View>
            <View style={styles.middleSection}>
                <View style={styles.middleContainer}>
                    <View style={{
                        alignItems: 'center',
                        paddingBottom: 20
                    }}>
                        <Image
                            source={require("../../img/login-v2.png")}
                            style={base.authImage}
                        />
                    </View>

                    <View>
                        <TouchableOpacity
                            onPress={handleNavigateToSignin}
                            style={styles.btnSignin}
                        >
                            <Text
                                style={styles.btnText}
                            >Signin</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={handleNavigateToSignup}
                            style={styles.btnSignup}
                        >
                            <Text
                                style={styles.btnText}
                            >Signup</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            title="Admin"
                            onPress={handleNavigateToAdminDashboard}
                            style={styles.btnSignup}
                        >
                            <Text
                                style={styles.btnText}
                            >
                                Admin Dashboard
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            title="Home"
                            onPress={handleNavigateToUserDashboard}
                            style={styles.btnSignup}
                        >
                            <Text
                                style={styles.btnText}
                            >
                                User Dashboard
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <Copyright />
        </View>
    );
};

const styles = StyleSheet.create({
    landingPageHeader:
    {
        height: '30%',
        // backgroundColor: 'powderblue', // Please Comment this line
        justifyContent: 'center',
        alignItems: 'center'
    },
    middleSection: {
        height: '65%',
        // backgroundColor: 'skyblue', // Please Comment this line
        justifyContent: 'flex-start',
    },
    middleContainer: {
        // backgroundColor: 'red', // Please Comment this line
        flexDirection: 'column',
        paddingLeft: 40,
        paddingRight: 40
    },

    btnSignin: {
        height: 46,
        backgroundColor: "#696cff",
        borderRadius: 20,
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 10
    },

    btnSignup: {
        height: 46,
        backgroundColor: '#ff7272',
        borderRadius: 20,
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10
    },

    btnText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center'
    }

})
```



### Organize Files :

1. Create New file in components/menus/ScreenMenus.js
```js
// import { CustomHeader } from '../../components/CustomHeader/CustomHeader'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LandingPage } from '../../screens/LandingPage/LandingPage'
import { Signup } from '../../screens/auth/Signup'
import { Signin } from '../../screens/auth/Signin'
import { ForgotPassword } from '../../screens/auth/ForgotPassword'
import { ResetPassword } from '../../screens/auth/ResetPassword'
import { TwoStepVerification } from '../../screens/auth/TwoStepVerification'
import { VerifyEmail } from '../../screens/auth/VerifyEmail'
import { UserDashboard } from '../../screens/dashboard/UserDashboard'
import { AdminDashboard } from '../../screens/dashboard/AdminDashboard'
import React from 'react'
import { HeaderMenu } from "./HeaderMenu";

export const ScreenMenus = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName="LandingPage">
            <Stack.Screen
                name="LandingPage"
                component={LandingPage}
                options={{
                    headerShown: false, // Hide the header for the LandingPage
                }}
            />
            <Stack.Screen
                name="Signup"
                component={Signup}
                options={{
                    headerShown: false, // Hide the header for the LandingPage
                }}
            />
            <Stack.Screen
                name="Signin"
                component={Signin}
                options={{
                    headerShown: false, // Hide the header for the LandingPage
                }}
            />
            <Stack.Screen
                name="ForgotPassword"
                component={ForgotPassword}
            />
            <Stack.Screen
                name="ResetPassword"
                component={ResetPassword}
            />
            <Stack.Screen
                name="TwoStepVerification"
                component={TwoStepVerification}
            />
            <Stack.Screen
                name="VerifyEmail"
                component={VerifyEmail}
            />
            <Stack.Screen
                name="UserDashboard"
                component={UserDashboard}
                options={{
                    headerRight: () => <HeaderMenu />
                }}
            />
            <Stack.Screen
                name="AdminDashboard"
                component={AdminDashboard}
                options={{
                    headerRight: () => <HeaderMenu />
                }}
            />
        </Stack.Navigator>
    )
}

```

2. Create File. navigation.js and add ScreenMenus
```js
import React from 'react'
import { ScreenMenus } from './components/menus/ScreenMenus'


export const RootNavigation = () => {
    return (
        // <AuthContextProvider>
        <ScreenMenus />
        // </AuthContextProvider> 
    )
}
```

3. Update App.js
```js
import { View } from "react-native";
import { base } from "./components/styles";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootNavigation } from "./navigation";
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <View style={base.container}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </View>
  );
}
```

<img src='https://github.com/maainul/Starter-Files/assets/37740006/9ed82c50-841e-4ee7-ab64-87bad676ed42' width='300' />

Then Click Sign in button
<img src='https://github.com/maainul/Starter-Files/assets/37740006/e1f1bc3a-d688-474e-aade-158ff04feb35' width='300' />

Admin Dashboard:

<img src='https://github.com/maainul/Starter-Files/assets/37740006/01132368-4177-4695-8dac-b291b545bf09' width='300' />






## 7. Add Icon React Native Vector Icons :

Go to NPM JS to install the package : 

https://www.npmjs.com/package/react-native-vector-icons

  npm i react-native-vector-icons

Select Icon From this Website :

https://oblador.github.io/react-native-vector-icons/

components/menus/FooterMenue.js
```js


import { View, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export const FooterMenu = ({ navigation }) => {
    return (
        <View style={styles.container} >
            <TouchableOpacity>
                <FontAwesome5 name='user' style={styles.iconStyle} />
            </TouchableOpacity>
            <TouchableOpacity>
                <FontAwesome5 name='home' style={styles.iconStyle} />
            </TouchableOpacity>
            <TouchableOpacity>
                <FontAwesome5 name='cog' style={styles.iconStyle} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: "#696cff",
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20
    },
    iconStyle: {
        fontSize: 25,
        color: '#FFF'
    },
});

```
<img src="https://github.com/maainul/Starter-Files/assets/37740006/ace4cca2-dfb7-4a4e-bf9c-8700a02b7989" width="300" />



## 8. Footer Menue in the Dashboard :
Output :
<img src="https://github.com/maainul/Starter-Files/assets/37740006/c656023e-41ea-4f4c-b39e-413cf81cf8fc" alt="Footer Menu Screenshot" width="300" />

1. Create New Componet in compnents/menus/footerMenu/FooterMenu.js

FooterMenu.js
```js

import { View, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export const FooterMenu = ({ navigation }) => {
    return (
        <View style={styles.container} >
            <TouchableOpacity>
                <FontAwesome5 name='user' style={styles.iconStyle} />
            </TouchableOpacity>
            <TouchableOpacity>
                <FontAwesome5 name='home' style={styles.iconStyle} />
            </TouchableOpacity>
            <TouchableOpacity>
                <FontAwesome5 name='cog' style={styles.iconStyle} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: "#696cff",
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20
    },
    iconStyle: {
        fontSize: 25,
        color: '#FFF'
    },
});


```
    flexDirection: 'row' : It will allign item Left to Right <----->

    JusfifyContent : 'space-between' : It will space between component


<img src="https://github.com/maainul/Starter-Files/assets/37740006/ace4cca2-dfb7-4a4e-bf9c-8700a02b7989" width="300" />

AdminDashboard.js
```js
import { StyleSheet, Text, View } from "react-native"
import { FooterMenu } from "../../components/menus/FooterMenu"

export const AdminDashboard = () => {
    return (
        <View style={styles.adminDashboardContainer}>
            <View style={styles.adminDashboardContent}>
                <Text >Admin Dashboard</Text>
            </View>
            <FooterMenu />
        </View>
    )
}

const styles = StyleSheet.create({
    adminDashboardContainer: {
        flex: 1,
        flexDirection: 'column',
        // backgroundColor: 'brown'
    },
    adminDashboardContent: {
        height: '94%'
    }

})
```
With Layout Background:
<img src="https://github.com/maainul/Starter-Files/assets/37740006/03f0787f-0f02-4a0a-abdb-0b8a5ba5c5d8" width="300" />

Without Layout Background :

<img src="https://github.com/maainul/Starter-Files/assets/37740006/f0322300-9d39-48c0-8b40-c8498b771cdd" width="300" />

Add more content to Dashboard :

### Create DashboardCard.js to components/dashboardCard/DashboardCard.js
```js
import { StyleSheet, Text, View } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';

export const DashboardCard = ({ icon, title, value }) => {
    return (
        <View style={styles.card}>
            <View >
                <Text style={styles.cardValue}>{value}</Text>
                <Text style={styles.cardTitle}>{title}</Text>
            </View>
            <View>
                <Icon name={`${icon}`} size={20} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#FFF",
        width: '30%',
        height: 80,
        padding: 10,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardValue: {
        fontSize: 18,
        fontWeight: '700',
        color: '#685DD8'
    },
    cardTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        color: "#5D596C"
    }
})
```

AdminDashboard.js
```js
import { StyleSheet, Text, View } from "react-native"
import { FooterMenu } from "../../components/menus/FooterMenu"
import { DashboardCard } from "../../components/dashboardCard/DashoardCard"
import { base } from './../../style';

export const AdminDashboard = () => {
    return (
        <View style={styles.adminDashboardContainer}>
            <View style={styles.adminDashboardContent}>
                <View style={base.cards}>
                    <DashboardCard icon={'user'} title={'Total Users'} value={'20231'} />
                    <DashboardCard icon={'user-plus'} title={'Active Users'} value={'20231'} />
                    <DashboardCard icon={'user-times'} title={'Paid Users'} value={'20231'} />
                </View>
            </View>
            <FooterMenu />
        </View>
    )
}

const styles = StyleSheet.create({
    adminDashboardContainer: {
        flex: 1,
        flexDirection: 'column',
        // backgroundColor: 'brown'
    },
    adminDashboardContent: {
        height: '93%'
    }

})


// base 

/*
    cards: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20

    },
*/


```
<img src="https://github.com/maainul/Starter-Files/assets/37740006/095443bc-6f55-4767-9b10-0b239549dfc1" width="300" />

## 9. Create Form (Signup and Signin Form)

### Create Component :

### components/Form/SubmitBtnCmp.js
```js
import { TextInput, View, Text, StyleSheet } from "react-native";

export const TextInputComp = ({
  value,
  setValue,
  labelTitle,
  placeholder,
  autoComplete,
  keyboardType,
  label = true,
  autoCorrect = false,
  secureTextEntry = false,
  placeholderTextColor = "#E7EAED",
}) => {
  return (
    <View>
      {label && <Text style={styles.labelTitle}>{labelTitle}</Text>}
      <TextInput
        style={styles.inputBox}
        keyboardType={keyboardType}
        autoComplete={autoComplete}
        autoCorrect={autoCorrect}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={(text) => setValue(text)}
        placeholderTextColor={placeholderTextColor}
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    height: 40,
    fontSize: 14,
    marginTop: 5,
    marginBottom: 5,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 15,
    color: "#576B80",
    borderColor: "#d9dee3",
    backgroundColor: "#FFFFFF",
  },
  labelTitle: {
    color: "#576B80",
    fontSize: 12,
    fontWeight: "500",
  },
});


```
#### components/Form/SubmitBtnComp.js
```js
import { TouchableOpacity, StyleSheet, Text } from "react-native";

export const SubmitBtnComp = ({ btnTitle, loading }) => {
  return (
    <TouchableOpacity style={styles.submitBtn}>
      <Text style={styles.btnText}>
        {loading ? "Please Wait..." : btnTitle}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  submitBtn: {
    height: 36,
    borderRadius: 20,
    justifyContent: "center",
    backgroundColor: "#696cff",
    borderColor: "#696cff",
    marginTop: 10,
    marginBottom: 10,
  },

  btnText: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 12,
    fontWeight: "500",
  },
});

```

#### screens/auth/Signin.js

```js

import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BrandTitle } from '../../components/brandTitle/BrandTitle';
import { base } from '../../style';
import { TextInputComp } from '../../components/form/TextInput';
import { useState } from 'react';
import { SubmitBtnComp } from '../../components/form/SubmitBtnCmp';

export const Signin = ({navigation}) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleNavigateToSignup = () => {
        navigation.navigate("Signup", {
          headerTitle: "Signup",
        });
      };
    return (
      <View style={styles.container}>
        <View style={{flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
      }}>
        <View style={styles.pageImge} >
          <BrandTitle/>
          <View
          style={{
            alignItems: 'center',
            paddingBottom: 20
        }}
          >
          <Image
            source={require("../../img/login-v2.png")}
            style={base.authImage}
            />
            </View>

            
<TextInputComp
            label={true}
            labelTitle={"USERNAME"}
            placeholder="Enter your username"
            value={username}
            autoCorrect={false}
            setValue={setUsername}
          />
           <TextInputComp
            label={true}
            labelTitle={"PASSWORD"}
            placeholder="Enter your password"
            value={password}
            autoCorrect={false}
            setValue={setPassword}
          />
          <View style={base.privacyPolicyBox}>
            <Text style={base.titleSubHeading}>I agree to</Text>
            <Text style={base.privacyPolicyLink}>privacy policy & terms</Text>
          </View>
        <SubmitBtnComp  btnTitle={"Submit"} loading={loading} />
          <View style={base.createAccountLink}>
            <Text style={base.titleSubHeadingColor}>
              Don't have any account?{" "}
            </Text>
            <TouchableOpacity onPress={handleNavigateToSignup}>
              <Text style={base.titleSubHeadingColor}> Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
        </View>
        </View>
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  pageImge:{
    backgroundColor:'#FFF',
    height:'80%',
    paddingLeft:30,
    paddingRight:30
  },
})
```
<img src="https://github.com/maainul/Starter-Files/assets/37740006/d33be5b7-9fa7-436c-8d43-c425495dafcc" width="300" />


## 10. Save Data From App (Registration Form)

1. Create Input Component : components/form/TextInputComp.js
```js
import { TextInput, View, Text, StyleSheet } from "react-native";

export const TextInputComp = ({
  state,
  setState,
  labelTitle,
  placeholder,
  fieldName,
  autoComplete,
  keyboardType,
  label = true,
  autoCorrect = false,
  secureTextEntry = false,
  errorState,
  placeholderTextColor = "#E7EAED",
}) => {


  return (
    <View>
      {label && <Text style={styles.labelTitle}>{labelTitle}</Text>}
      <TextInput
        style={styles.inputBox}
        keyboardType={keyboardType}
        autoComplete={autoComplete}
        autoCorrect={autoCorrect}
        secureTextEntry={secureTextEntry}
        value={state}
        onChangeText={(text) => setState(text)}
        placeholderTextColor={placeholderTextColor}
        placeholder={placeholder}
      />
      {errorState &&
        errorState
          .filter((error) => error.field === fieldName)
          .map((filteredError) => (
            <Text key={filteredError.error} style={{ color: 'red' }}>
              {filteredError.error}
            </Text>
          ))}
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    height: 40,
    fontSize: 14,
    marginTop: 5,
    marginBottom: 5,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 15,
    color: "#576B80",
    borderColor: "#d9dee3",
    backgroundColor: "#FFFFFF",
  },
  labelTitle: {
    color: "#576B80",
    fontSize: 12,
    fontWeight: "500",
  },
});


```

2. Sign up form 

## handleSubmit Function
//  const SIGNUP_URL = 'http://192.168.0.194:8081/api/v1/auth/signup'

```js
 const handleSubmit = async () => {
    try {
      setLoading(true)
      const res = await axios.post(API.SIGNUP_URL, {
        email,
        username,
        password
      })
      if (res.data.errors) {
        setErrors(res.data.errors)
      } else {
        setEmail('')
        setPassword('')
        setUsername('')
        setErrors([])
        navigation.navigate('Signin')

      }

    } catch (error) {
      setLoading(false)
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

```



```js

import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BrandTitle } from '../../components/brandTitle/BrandTitle';
import { base } from '../../style';
import { TextInputComp } from '../../components/form/TextInputComp';
import { useState } from 'react';
import { SubmitBtnComp } from '../../components/form/SubmitBtnCmp';
import axios from 'axios';
import API from '../../API';

export const Signup = ({ navigation }) => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([])
  const [loading, setLoading] = useState(false);

  const handleNavigateToSignin = () => {
    navigation.navigate("Signin", {
      headerTitle: "Signin",
    });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true)
      const res = await axios.post(API.SIGNUP_URL, {
        email,
        username,
        password
      })
      if (res.data.errors) {
        setErrors(res.data.errors)
      } else {
        setEmail('')
        setPassword('')
        setUsername('')
        setErrors([])
        navigation.navigate('Signin')

      }

    } catch (error) {
      setLoading(false)
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      <View style={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <View style={styles.pageImge} >
          <BrandTitle />
          <View
            style={{
              alignItems: 'center',
              paddingBottom: 20
            }}
          >
            <Image
              source={require("../../img/login-v2.png")}
              style={base.authImage}
            />
          </View>


          <TextInputComp
            label={true}
            labelTitle={"EMAIL"}
            placeholder="Enter your email"
            state={email}
            autoComplete="email"
            keyboardType="email-address"
            autoCorrect={false}
            setState={setEmail}
            fieldName={'email'}
            errorState={errors}
          />
          <TextInputComp
            label={true}
            labelTitle={"USERNAME"}
            placeholder="Enter your username"
            state={username}
            autoCorrect={false}
            setState={setUsername}
            fieldName={'username'}
            errorState={errors}
          />
          <TextInputComp
            label={true}
            labelTitle={"PASSWORD"}
            placeholder="Enter your password"
            state={password}
            autoCorrect={false}
            setState={setPassword}
            fieldName={'password'}
            errorState={errors}
          />

          <View style={base.privacyPolicyBox}>
            <Text style={base.titleSubHeading}>I agree to</Text>
            <Text style={base.privacyPolicyLink}>privacy policy & terms</Text>
          </View>

          <SubmitBtnComp
            btnTitle={"Submit"}
            loading={loading}
            handleSubmit={handleSubmit}
          />

          <View style={base.createAccountLink}>
            <Text style={base.titleSubHeadingColor}>
              Already have an account?{" "}
            </Text>
            <TouchableOpacity onPress={handleNavigateToSignin}>
              <Text style={base.titleSubHeadingColor}> Signin</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  pageImge: {
    backgroundColor: '#FFF',
    height: '90%',
    paddingLeft: 30,
    paddingRight: 30
  },
})

```

## 9. Signin (Login)

app/screens/auth/Signin.js

```js

import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BrandTitle } from '../../components/brandTitle/BrandTitle';
import { base } from '../../style';
import { TextInputComp } from '../../components/form/TextInputComp';
import { useState } from 'react';
import { SubmitBtnComp } from '../../components/form/SubmitBtnCmp';
import axios from 'axios';
import API from '../../API';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Signin = ({ navigation }) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([])

  const handleNavigateToSignup = () => {
    navigation.navigate("Signup", {
      headerTitle: "Signup",
    });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true)
      console.log('UserName :', username)
      console.log("Password :", password)

      const res = await axios.post(API.SIGNIN_URL, {
        username,
        password
      })
      if (res.data.errors) {
        setErrors(res.data.errors)
        setLoading(false)
      } else {
        await AsyncStorage.setItem('@auth', JSON.stringify(res.data))
        setUsername('')
        setPassword('')
        setErrors([])
        if (res.data.user.role == 'user') {
          navigation.navigate('UserDashboard')
        }
        else if (res.data.user.role == 'admin') {
          navigation.navigate('AdminDashboard')
        }
      }
    } catch (error) {
      setLoading(false)
      setErrors(errors)
    }
  }

  return (
    <View style={styles.container}>
      <View style={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <View style={styles.pageImge} >
          <BrandTitle />
          <View
            style={{
              alignItems: 'center',
              paddingBottom: 20
            }}
          >
            <Image
              source={require("../../img/login-v2.png")}
              style={base.authImage}
            />
          </View>


          <TextInputComp
            label={true}
            labelTitle={"USERNAME"}
            placeholder="Enter your username"
            state={username}
            autoCorrect={false}
            setState={setUsername}
            fieldName={'username'}
            errorState={errors}
          />
          <TextInputComp
            label={true}
            labelTitle={"PASSWORD"}
            placeholder="Enter your password"
            state={password}
            autoCorrect={false}
            setState={setPassword}
            fieldName={'password'}
            errorState={errors}
          />
          <View style={base.privacyPolicyBox}>
            <Text style={base.titleSubHeading}>I agree to</Text>
            <Text style={base.privacyPolicyLink}>privacy policy & terms</Text>
          </View>
          <SubmitBtnComp
            btnTitle={"Submit"}
            loading={loading}
            handleSubmit={handleSubmit}
          />
          <View style={base.createAccountLink}>
            <Text style={base.titleSubHeadingColor}>
              Don't have any account?{" "}
            </Text>
            <TouchableOpacity onPress={handleNavigateToSignup}>
              <Text style={base.titleSubHeadingColor}> Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  pageImge: {
    backgroundColor: '#FFF',
    height: '80%',
    paddingLeft: 30,
    paddingRight: 30
  },
})

```
## 10. Context API: Authentication
