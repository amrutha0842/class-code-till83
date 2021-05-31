import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import BookDonateScreen from '../screens/BookDonateScreen';
import BookRequestScreen from '../screens/BookRequestScreen';

export const AppTabNavigator =  createBottomTabNavigator({
    donateBooks:{
    screen: BookDonateScreen,
    navigationOption:{
    tabBarIcon:<Image source = {require("../assets/request-list.png")}style = {{width:20,height:20}}/>,
    tabBarLabel:"Donate Books",
    }
    },
    bookRequest:{
        screen: BookRequestScreen,
        navigationOption:{
        tabBarIcon:<Image source = {require("../assets/request-book.png")}style = {{width:20,height:20}}/>,
        tabBarLabel:"Book Requests"
        }
        }
})
