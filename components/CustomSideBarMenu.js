import React,{Component} from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity,TextInput, Alert, ScrollView, KeyboardAvoidingView, Modal } from 'react-native';
import firebase from 'firebase';
import {DrawerItems} from 'react-navigation-drawer';

export default class CustomSideBarMenu extends Component {
    render(){
        return(
            <View style = {{flex:1}}>
                <View style = {styles.drawerItemsContainer}>
                    <DrawerItems {...this.props}/>
                </View>
                <View style = {styles.logOutContainer}>
                    <TouchableOpacity style = {styles.logOutButton}
                    onPress = {()=>{
                        this.props.navigation.navigation('WelcomeScreen')
                        firebase.auth().signOut()
                    }}>
                        <Text>
                            Log Out
                        </Text>
                    </TouchableOpacity>
                </View> 
            </View>
        )
    }
}

var styles = Stylesheet.create({
    container:{
        flex:1,
    },
    drawerItemsContainer:{
        flex:0.8,
    },
    logOutContainer:{
        flex:0.2,
        justifyContent:'flex-end',
        paddingBottom:30,
    },
    logOutButton:{
        height:30,
        width:'100%',
        justifyContet:'center',
        padding:10,
    },
    logOutText:{
        fontSize:30,
        fontWeight:'bold',
    }
})