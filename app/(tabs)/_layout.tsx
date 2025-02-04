import React from 'react'
import { withLayoutContext } from 'expo-router'
import {
  createNativeBottomTabNavigator,
  NativeBottomTabNavigationOptions,
  NativeBottomTabNavigationEventMap,
} from '@bottom-tabs/react-navigation'
import { ParamListBase, TabNavigationState } from '@react-navigation/native'

const BottomTabNavigator = createNativeBottomTabNavigator().Navigator

const Tabs = withLayoutContext<
  NativeBottomTabNavigationOptions,
  typeof BottomTabNavigator,
  TabNavigationState<ParamListBase>,
  NativeBottomTabNavigationEventMap
>(BottomTabNavigator)

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: () => ({ sfSymbol: 'house.fill' }),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: () => ({ sfSymbol: 'paperplane.fill' }),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'two',
          tabBarIcon: () => ({ sfSymbol: 'paperplane.fill' }),
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          title: 'three',
          tabBarIcon: () => ({ sfSymbol: 'paperplane.fill' }),
        }}
      />
      <Tabs.Screen
        name="four"
        options={{
          title: 'four',
          tabBarIcon: () => ({ sfSymbol: 'paperplane.fill' }),
        }}
      />
      <Tabs.Screen
        name="five"
        options={{
          title: 'five',
          tabBarIcon: () => ({ sfSymbol: 'paperplane.fill' }),
        }}
      />
      <Tabs.Screen
        name="six"
        options={{
          title: 'six',
          tabBarIcon: () => ({ sfSymbol: 'paperplane.fill' }),
        }}
      />
    </Tabs>
  )
}
