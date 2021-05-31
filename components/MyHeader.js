import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header,Icon} from 'react-native-elements';

const MyHeader = props =>{
  return(
    <Header
      centerComponent = {{text:props.title,style:{color:'orange',fontSize:20,fontWeight:"bold"}}}
      backgroundColor = "yellow"/>
  )  
}
export default MyHeader