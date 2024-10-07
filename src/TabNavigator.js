import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import React from 'react'
import ProfileScreen from "./screens/ProfileScreen";
import SearchScreen from "./screens/SearchScreen";
function TabNavigator() {
    const Tab = createBottomTabNavigator() ;
  return (
   <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen}/>
    <Tab.Screen name="Profile"component={ProfileScreen}/>
    <Tab.Screen name="Search" component={SearchScreen}/>

   </Tab.Navigator>
  )
}

export default TabNavigator
