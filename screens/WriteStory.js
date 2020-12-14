import React from 'react';
import { StyleSheet, Text, View ,TextInput, TouchableOpacity} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class WriteStory extends React.Component {
 constructor () {
   super();
   this.state = {

   }
 }
  submitStory = () => {

  }
    render() {
      return (
        <View style={{flex: 1}}>

          <TextInput
          style={styles.formTextInput}
          placeholder ={"Title of your story"}
        /> 

   <TextInput
          style={styles.formTextInput}
          placeholder ={"Author of the story"}
        /> 

<TextInput
          style={styles.writeStory}
          placeholder ={"Write your story"}
        /> 

        <TouchableOpacity style={styles.submitButton}
        onPress={()=>{this.submitStory()}}
        >
          <Text style={styles.buttonText}> Submit </Text>
        </TouchableOpacity>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    formTextInput : {
      marginTop: 100,
      width: '80%',
      alignSelf: 'center',
      height: 40,
      textAlign: 'center',
      borderWidth: 2,
      outline: 'none',
    } ,
 writeStory : {
        marginTop: 100,
        width: '80%',
        alignSelf: 'center',
        height: 100,
        textAlign: 'center',
        borderWidth: 2,
        outline: 'none',
      } ,
 submitButton:{
      backgroundColor:'#EDC0BF',
      width: 50,
      borderWidth:1.5,
     },
     buttonText : {
       fontSize : 30,
       fontWeight : "bold",
       color : "black"
     }
  })