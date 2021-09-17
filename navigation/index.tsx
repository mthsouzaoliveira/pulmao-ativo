/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {
  MaterialIcons, Ionicons, FontAwesome, Entypo, MaterialCommunityIcons,
} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { useContext } from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import AuthContext from '../contexts/auth';
import useColorScheme from '../hooks/useColorScheme';
import Confirmation from '../screens/Confirmation';
import Exercise from '../screens/Exercise';
import Exercises from '../screens/Exercises';
import NotFoundScreen from '../screens/NotFoundScreen';
import Page from '../screens/Page';
import UserIdentification from '../screens/UserIdentification';
import Welcome from '../screens/Welcome';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const { signed } = useContext(AuthContext);

  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      {!signed ? (
        <>
          <Stack.Screen name="UserIdentification" component={UserIdentification} />
          <Stack.Screen name="Confirmation" component={Confirmation} options={{ headerShown: false }} />
        </>
      ) : (
        <>
          <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
          <Stack.Screen name="Exercise" component={Exercise} options={({ navigation, route }) => ({ title: route.params.title, headerShown: true, headerLeft: () => back(navigation) })} />
          <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
        </>
      )}
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Exercises"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >

      <BottomTab.Screen
        name="Exercises"
        component={Exercises}
        options={({ navigation }: RootTabScreenProps<'Exercises'>) => ({
          headerTransparent: true,
          headerTitle: '',
          tabBarLabel: 'Exercícios',
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="account-heart-outline" size={size} color={color} />,
        })}
      />

      <BottomTab.Screen
        name="Symptoms"
        component={Page}
        initialParams={{ title: 'Sintomas' }}
        options={({ navigation }: RootTabScreenProps<'Symptoms'>) => ({
          headerTitle: '',
          tabBarLabel: 'Sintomas',
          tabBarIcon: ({ color, size }) => <FontAwesome name="thermometer-three-quarters" size={size} color={color} />,
          headerLeft: () => back(navigation),
        })}
      />

      <BottomTab.Screen
        name="Diagnosis"
        component={Page}
        initialParams={{ title: 'Diagnóstico' }}
        options={({ navigation }: RootTabScreenProps<'Diagnosis'>) => ({
          headerTitle: '',
          tabBarLabel: 'Diagnóstico',
          tabBarIcon: ({ color, size }) => <Entypo name="magnifying-glass" size={size} color={color} />,
          headerLeft: () => back(navigation),
        })}
      />

      <BottomTab.Screen
        name="Prevention"
        component={Page}
        initialParams={{ title: 'Prevenção' }}
        options={({ navigation }: RootTabScreenProps<'Prevention'>) => ({
          headerTitle: '',
          tabBarLabel: 'Prevenção',
          tabBarIcon: ({ color, size }) => <Ionicons name="shield-outline" size={size} color={color} />,
          headerLeft: () => back(navigation),
        })}
      />

      <BottomTab.Screen
        name="Covid"
        component={Page}
        initialParams={{ title: 'Covid-19' }}
        options={({ navigation }: RootTabScreenProps<'Covid'>) => ({
          headerTitle: '',
          tabBarLabel: 'Sobre Covid-19',
          tabBarIcon: ({ color, size }) => <MaterialIcons name="coronavirus" size={size} color={color} />,
          headerLeft: () => back(navigation),
        })}
      />
    </BottomTab.Navigator>
  );
}

function back(navigation) {
  return (
    <Pressable
      onPress={() => navigation.navigate('Exercises')}
      style={({ pressed }) => ({
        opacity: pressed ? 0.5 : 1,
      })}
    >
      <FontAwesome
        name="chevron-left"
        size={25}
        color={Colors.light.tint}
        style={{ marginRight: 15, marginLeft: 15 }}
      />
    </Pressable>
  );
}
