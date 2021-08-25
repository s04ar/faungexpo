import {StatusBar} from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View } from 'react-native';
import {auth} from './firebase'; 
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './Screen/sessions/LoginScreen';
import RegisterScreen from './Screen/sessions/RegisterScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
/*import {FontAwesome} from '@expo/vector-icons';
import {SafeAreaView} from 'react-native'; 
import ShopmindersTab from './screens/ShopmindersTab';
import SettingsTab from './screens/SettingsTab';
*/
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [signedIn, setsignedIn] = useState(false);
  const forFade = ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
      backgroundColor: 'transparent',
    },
  });

/* <SafeAreaView style={{flex: 1, backgroundColor: '#29434e'}}>
  <Tab.Navigator
    screenOptions={({ route }) => ({
    tabBarIcon: ({ color, size }) => {
      if (route.name === 'shopminders') {
        return (
          <FontAwesome 
            name='list-ul'
            size={size}
            color={color}
          />
        )
      } 
      if (route.name === 'settings') {
        return (
          <FontAwesome 
            name="cogs"
            size={size}
            color={color}
          />
        )
      }
    },
  })}
  tabBarOptions={{
    activeTintColor: 'white',
    inactiveTintColor: '#819ca9',
    style: {
      backgroundColor: '#29434e'
    }
  }}
  >
    <Tab.Screen 
      name="shopminders"
      component={ShopmindersTab}
      options={{
        title: 'Shopminders'
      }}
    />
    <Tab.Screen 
      name="settings"
      component={SettingsTab}
      options={{
        title: 'Settings'
      }}
     />
   </Tab.Navigator>
</SafeAreaView> 
*/
  auth.onAuthStateChanged((user) => {
    if (user) {
      setsignedIn(true);
    } else {
      setsignedIn(false);
    }
  });

  return (
    <NavigationContainer theme={DefaultTheme}>
      {signedIn
        ? (
          <Text>Signed In</Text>
        ) : (
          <>
          <StatusBar style="light" />
          <Stack.Navigator
          mode="card"
          screenOptions={{}}
          >
            <Stack.Screen
            name="signIn"
            component={LoginScreen}
            options={{
              title: 'Sign In',
              cardStyleInterpolator: forFade,
              headerStyle: {
                backgroundColor: '#29434e',
                borderBottomColor: '#29434e',
              },
              headerTintColor: '#fff'
            }}/>
              <Stack.Screen
              name='register'
              component={RegisterScreen}
              options={{
                title: 'Register',
                cardStyleInterpolator: forFade,
                headerStyle: {
                  backgroundColor: '#29434e',
                  borderBottomColor: '#29434e',
                },
                headerTintColor: '#fff',
              }}
              />
            </Stack.Navigator>
            </>
        )
      }
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    alignItems: 'center',
    justifyContent: 'center',
  },
)
