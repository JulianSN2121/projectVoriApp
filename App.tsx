import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Stellen Sie sicher, dass Sie diese Bibliothek installiert haben
import { NavigationContainer } from '@react-navigation/native';
import HomeView from './src/views/HomeView';
import EventsView from './src/views/EventsView';
import AccountView from './src/views/AccountView';


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="Home"
          component={HomeView}
          options={{
            tabBarLabel: 'Entdecken',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="compass-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Events"
          component={EventsView}
          options={{
            tabBarLabel: 'Events',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="calendar" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Konto"
          component={AccountView}
          options={{
            tabBarLabel: 'Konto',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
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

const Tab = createBottomTabNavigator();