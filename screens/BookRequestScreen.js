import React,{Component} from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity,TextInput, Alert, ScrollView, KeyboardAvoidingView, Modal } from 'react-native';
import SantaAnimation from '../components/SantaClaus.js';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader';

export default class BookRequestScreen extends Component {
    constructor(){
        super()
        this.state={
          userID : firebase.auth().currentUser.email,
          bookName: " " ,
          reasonToRequest: " ",
        }}
        createUniqueID(){
            return Math.random().toString(36).substring(7)
        }
        addRequest = (bookName, reasonToRequest)=>{
            var userID = this.state.userID
            var randomRequestID = this.createUniqueID()
            db.collection('requested_books').add({
                "user_ID":userID,
                "book_Name": bookName,
                "reason_To_Request": reasonToRequest,
                "request_ID": randomRequestID
            })
            this.setState({
                bookName:" ",
                reasonToRequest: " "
            })
            return Alert.alert("Book has been requested")
        }
        render(){ 
            return( 
            <View style={{flex:1}}> 
            <MyHeader title="Request Book"/> 
            <KeyboardAvoidingView style={styles.keyBoardStyle}> 
            <TextInput style ={
                styles.formTextInput
            } 
            placeholder={"enter book name"} 
            onChangeText={(text)=>{ 
                this.setState({ bookName:text }) 
            }} 
            value={this.state.bookName} 
            /> 
            <TextInput 
            style ={[styles.formTextInput,{height:300}]} 
            multiline numberOfLines ={8} 
            placeholder={"Why do you need the book"} 
            onChangeText ={(text)=>{ 
                this.setState({ reasonToRequest:text }) 
            }} 
            value ={this.state.reasonToRequest} 
            /> 
            <TouchableOpacity style={styles.button} 
            onPress={()=>{
                this.addRequest(this.state.bookName,this.state.reasonToRequest)}} > 
                <Text>
                    Request
                </Text> 
                </TouchableOpacity> 
                </KeyboardAvoidingView> 
                </View> 
                ) } }