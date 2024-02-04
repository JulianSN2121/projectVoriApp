import React, { useState, useEffect } from "react";
import 'react-native-url-polyfill/auto';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { styles } from "./AppStyles";

import LoginNavigator from "./src/navigators/LoginNavigator";
import AppNavigator from "./src/navigators/AppNavigator";

const RootStack = createStackNavigator();

export default function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);

  const handleLogin = () => {
    setIsUserLoggedIn(true);
  };
  
  useEffect(() => {}, []);

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {isUserLoggedIn ? (
          <RootStack.Screen name="AppNavigator" component={AppNavigator}/>
        ) : (
          <RootStack.Screen name="LoginNavigator" component={LoginNavigator} initialParams={{ onLogin: handleLogin }}/>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}