import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';

import DiscoverScreen from "../screens/App/DiscoverScreen";
import EventsScreen from "../screens/App/EventsScreen";
import AccountScreen from "../screens/App/AccountScreen";
import { createStackNavigator } from "@react-navigation/stack";
import EntityInfoScreen from "../screens/App/EntityInfoScreen";
import CategoryEntitiesScreen from "../screens/App/CategoryEntitiesScreen";
import EventInfoScreen from "../screens/App/EventInfoScreen";
import FeedScreen from "../screens/App/FeedScreen";

const Tab = createBottomTabNavigator();
const DiscoverStack = createStackNavigator();

function DiscoverStackNavigator() {
  return (
    <DiscoverStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
      <DiscoverStack.Screen name="DiscoverScreen" component={DiscoverScreen}/>
      <DiscoverStack.Screen name="CategoryEntitiesScreen" component={CategoryEntitiesScreen}/>
      <DiscoverStack.Screen name="EntityInfoScreen" component={EntityInfoScreen}/>
      <DiscoverStack.Screen name="EventsScreen" component={EventsScreen}/>
      <DiscoverStack.Screen name="EventInfoScreen" component={EventInfoScreen}/>
    </DiscoverStack.Navigator>
  );
}
function EventsStackNavigator() {
  return (
    <DiscoverStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
      <DiscoverStack.Screen name="EventsScreen" component={EventsScreen}/>
      <DiscoverStack.Screen name="EventInfoScreen" component={EventInfoScreen}/>
    </DiscoverStack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#000" },
      }}
    >
      <Tab.Screen
        name="Discover"
        component={DiscoverStackNavigator}
        options={{
          tabBarLabel: "Entdecken",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="compass-outline"
              color={color}
              size={size}
            />
          ),
          tabBarActiveTintColor: "#ce1119",
          tabBarInactiveTintColor: "#ffffff",
        }}
      />
      <Tab.Screen
        name="Events"
        component={EventsStackNavigator}
        options={{
          tabBarLabel: "Events",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calendar" color={color} size={size} />
          ),
          tabBarActiveTintColor: "#ce1119",
          tabBarInactiveTintColor: "#ffffff",
        }}
      />
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarLabel: "Feed",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="feed" color={color} size={size} />
          ),
          tabBarActiveTintColor: "#ce1119",
          tabBarInactiveTintColor: "#ffffff",
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: "Konto",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
          tabBarActiveTintColor: "#ce1119",
          tabBarInactiveTintColor: "#ffffff",
        }}
      />
      {/* <Tab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          tabBarLabel: "Login",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="login" color={color} size={size} />
          ),
          tabBarActiveTintColor: "#ce1119",
          tabBarInactiveTintColor: "#ffffff",
        }}
      />
      <Tab.Screen
        name="Registration"
        component={RegistrationScreen}
        options={{
          tabBarLabel: "Registration",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="login" color={color} size={size} />
          ),
          tabBarActiveTintColor: "#ce1119",
          tabBarInactiveTintColor: "#ffffff",
        }}
      /> */}
      
    </Tab.Navigator>
  );
}
