import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import React from 'react'
import ProfileScreen from "./screens/ProfileScreen";
import SearchScreen from "./screens/SearchScreen";
import Icons from 'react-native-vector-icons/Ionicons';
function TabNavigator() {
    const Tab = createBottomTabNavigator() ;
  return (
   <Tab.Navigator   screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }else if(route.name ==='Search'){
                iconName = focused ? 'search' : 'search-outline'
            }

            // You can return any component that you like here!
            return <Icons name={iconName} size={20} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle:{
            margin: 10
          }
        })}>
    <Tab.Screen name="Home" component={HomeScreen}/>
    <Tab.Screen name="Profile"component={ProfileScreen}/>
    <Tab.Screen name="Search" component={SearchScreen}/>

   </Tab.Navigator>
  )
}

export default TabNavigator
