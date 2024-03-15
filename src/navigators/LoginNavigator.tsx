import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/Auth/WelcomeScreen";
import RegistrationScreen from "../screens/Auth/RegistrationScreen";
import LoginScreen from "../screens/Auth/LoginScreen";

const Stack = createStackNavigator();

export default function LoginNavigator() {
  return (
    <Stack.Navigator initialRouteName="Willkommen" screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen}/>
      <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
    </Stack.Navigator>
  );
}
