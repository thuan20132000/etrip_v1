import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/Home/HomeScreen';
import MapScreen from './screens/Map/MapScreen';
import ScheduleScreen from './screens/TravelSchedule/ScheduleScreen';
import AmenityScreen from './screens/AmenityScreen';
import AccountScreen from './screens/AccountScreen';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import CommonIcons from './constants/CommonIcons';
import DetailScheduleScreen from './screens/TravelSchedule/DetailScheduleScreen';
import DetailDayScheduleScreen from './screens/TravelSchedule/DetailDayScheduleScreen';
import LocationSearchScreen from './screens/TravelSchedule/LocationSearchScreen';
import MySchedulesSreen from './screens/TravelSchedule/MySchedulesSreen';
import DestinationListScreen from './screens/Home/DestinationListScreen';
import DestinationMapScreen from './screens/Home/DestinationMapScreen';
import MapDestinationRouteListScreen from './screens/TravelSchedule/MapDestinationRouteListScreen';
import SettingAccountScreen from './screens/SettingAccount/SettingAccountScreen';
import DestinationDetailScreen from './screens/Home/DestinationDetailScreen';
import SelfDrivingHomeScreen from './screens/SelfDriving/SelfDrivingHomeScreen';
import PlaceSearchScreen from './screens/SelfDriving/PlaceSearchScreen';
import CarDetailScreen from './screens/SelfDriving/CarDetailScreen';
import FilterCarScreen from './screens/SelfDriving/FilterCarScreen';
import ShoppingHomeScreen from './screens/Shopping/ShoppingHomeScreen';
import ShoppingListScreen from './screens/Shopping/ShoppingListScreen';

/**
 * Home Stack
 */
const HomeStackNavigator = createStackNavigator();
const HomeStack = () => {
    return (
        <HomeStackNavigator.Navigator>
            <HomeStackNavigator.Screen
                name="Home"
                component={HomeScreen}
            />
            <HomeStackNavigator.Screen
                name="DestinationList"
                component={DestinationListScreen}
            />
            <HomeStackNavigator.Screen
                name="DestinationMap"
                component={DestinationMapScreen}
            />
            <HomeStackNavigator.Screen
                name="DestinationDetail"
                component={DestinationDetailScreen}
            />
            <HomeStackNavigator.Screen
                name="SelfDrivingStack"
                component={SelfDrivingStack}
            />
            <HomeStackNavigator.Screen
                name="ShoppingStack"
                component={ShoppingStackStack}
            />
        </HomeStackNavigator.Navigator>
    )
}



/**
 * author:thuantruong
 * created_at:11/2020
 * description:Stack of Car for rent
 */
const SelfDrivingStackNavigator = createStackNavigator();
const SelfDrivingStack = () => {
    return (
        <SelfDrivingStackNavigator.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <SelfDrivingStackNavigator.Screen
                name="SelfDrivingHome"
                component={SelfDrivingHomeScreen}
            />
            <SelfDrivingStackNavigator.Screen
                name="PlaceSearchScreen"
                component={PlaceSearchScreen}
            />
            <SelfDrivingStackNavigator.Screen
                name="CarDetail"
                component={CarDetailScreen}
            />
            <SelfDrivingStackNavigator.Screen
                name="FilterCar"
                component={FilterCarScreen}
            />
        </SelfDrivingStackNavigator.Navigator>
    )
}




/**
 * author:thuantruong
 * created_at:30/11/2020
 * description: Stack of Shopping
 */
const ShoppingStackNavigator = createStackNavigator();
const ShoppingStackStack = () => {
    return (
        <ShoppingStackNavigator.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <ShoppingStackNavigator.Screen
                name="ShoppingHome"
                component={ShoppingHomeScreen}
            />
            <ShoppingStackNavigator.Screen
                name="ShoppingList"
                component={ShoppingListScreen}
            />
            
        </ShoppingStackNavigator.Navigator>
    )
}




/**
 * Map Stack
 */
const MapStackNavigator = createStackNavigator();
const MapStack = () => {
    return (
        <MapStackNavigator.Navigator>
            <MapStackNavigator.Screen
                name="Map"
                component={MapScreen}
            />
        </MapStackNavigator.Navigator>
    )
}







/**
 * Schedule Stacj
 */
const ScheduleStackNavigator = createStackNavigator();
const ScheduleStack = () => {
    return (
        <ScheduleStackNavigator.Navigator>

            <ScheduleStackNavigator.Screen
                name="ScheduleList"
                component={MySchedulesSreen}
            />

            {/* Create */}
            <ScheduleStackNavigator.Screen
                name="Schedule"
                component={ScheduleScreen}
            />
            <ScheduleStackNavigator.Screen
                name="LocationSearch"
                component={LocationSearchScreen}
            />

            <ScheduleStackNavigator.Screen
                name="DetailDaySchedule"
                component={DetailDayScheduleScreen}
            />
            <ScheduleStackNavigator.Screen
                name="MySchedule"
                component={MySchedulesSreen}
            />
            <ScheduleStackNavigator.Screen
                name="DetailSchedule" w
                component={DetailScheduleScreen}
            />
            <ScheduleStackNavigator.Screen
                name="MapDestinationRoutesList"
                component={MapDestinationRouteListScreen}
            />

        </ScheduleStackNavigator.Navigator>
    )
}



/**
 * Amentity Screen
 */
const AmenityStackNavigator = createStackNavigator();
const AmenityStack = () => {
    return (
        <AmenityStackNavigator.Navigator>
            <AmenityStackNavigator.Screen
                name="Amenity"
                component={AmenityScreen}
            />
        </AmenityStackNavigator.Navigator>
    )
}



/**
 * Account Stack
 */

const AccountStackNavigator = createStackNavigator();
const AccountStack = () => {
    return (
        <AccountStackNavigator.Navigator>
            <AccountStackNavigator.Screen
                name="Account"
                component={SettingAccountScreen}
            />
        </AccountStackNavigator.Navigator>
    )
}


/**
 * Tabbottom Navigator
 */
const TabBottomNavigator = createBottomTabNavigator();
const TabNavigator = () => {
    return (
        <TabBottomNavigator.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'HomeStack') {
                        iconName = CommonIcons.home
                    } else if (route.name === 'MapStack') {
                        iconName = CommonIcons.map
                    } else if (route.name === 'ScheduleStack') {
                        iconName = CommonIcons.calendar
                    } else if (route.name === 'AmenityStack') {
                        iconName = CommonIcons.compass
                    } else {
                        iconName = CommonIcons.account
                    }

                    // You can return any component that you like here!
                    return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <TabBottomNavigator.Screen name="HomeStack" component={HomeStack} />
            <TabBottomNavigator.Screen name="MapStack" component={MapStack} />
            <TabBottomNavigator.Screen name="ScheduleStack" component={ScheduleStack} />
            <TabBottomNavigator.Screen name="AmenityStack" component={AmenityStack} />
            <TabBottomNavigator.Screen name="AccountStack" component={AccountStack} />
        </TabBottomNavigator.Navigator>
    )
}




const Router = () => {
    return (
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
    )
}

export default Router

const styles = StyleSheet.create({})
