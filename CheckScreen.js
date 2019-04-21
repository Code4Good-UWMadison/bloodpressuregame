import React from 'react';

import {
  Image,
  Platform,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  View, } from 'react-native';

import * as constants from '../constants/file.js';
const scenarios = constants.scenarios;
const cardsText = constants.cards;
const answers = constants.answers;//0 is fixit and 1 is big pic
const explanation = constants.explanation;

export default class CheckScreen extends React.Component {
  missing:Array;
  correct:Array;
  corresEx: Array;
  static navigationOptions = {
    title: 'CheckForAnswers',
  };
  constructor(){
    super();
    this.missing = new Array();
    this.correct = new Array();
  }
  render() {
    const {navigation} = this.props;
    const param = navigation.getParam('para', 'TEST');
    const answer = navigation.getParam('correct', 'test');// pass in all correct answers
    const scene = navigation.getParam('scene', -1);
    const corresEx = navigation.getParam('corresEx', 'test');
    var explains = explanation[scene].explain;//cards with explanation
    for(var i = 0; i < answer.length; i++){
      if(param.indexOf(answer[i]) != -1){
        this.correct.push(corresEx[i]);
      } else{
        this.missing.push(corresEx[i]);
      }
    }
    return (
      <View style = {{flex:1}}>
        <ScrollView contentContainerStyle = {styles.container}>
          <View style = {styles.scene}>
            <Text buttonStyle={styles.button}>{scenarios[JSON.stringify(scene)]}</Text>
          </View>
          <View style = {styles.cardscontainer}>
            <Text>Missing</Text>
            {
              this.missing.map((item) =>
              (
              <View style = { styles.missingCards }>
                  <Text>{explains[item]}</Text>
              </View>
              ))
            }
            <Text>Correct</Text>
            {
              this.correct.map((item) =>
              (
              <View style = { styles.correctCards }>
                  <Text>{explains[item]}</Text>
              </View>
              ))
            }
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 30,
    paddingVertical: 20,
    backgroundColor: '#fff',
    alignItems:'center',
    height: 400,
  },
  scene:{
    //flex: 1,
    width:300,
    height: 80,
    top: 5,
    borderColor: '#d6d7da',
    borderWidth:2,
    borderRadius: 8,
    flexDirection:"row",
    alignItems:'center',
    backgroundColor:'rgba(0, 150, 200, 0.5)',
  },
  cardscontainer:{
    top: 25,
    alignItems:'center',
  },
  missingCards:{
    flex: 1,
    width:300,
    height: 80,
    top: 5,
    borderColor: '#d6d7da',
    borderWidth:2,
    borderRadius: 8,
    flexDirection:"row",
    alignItems:'center',
    backgroundColor:'rgba(128, 128, 128, 0.8)',
    margin:10,
  },
  correctCards:{
    flex: 1,
    width:300,
    height: 80,
    top: 5,
    borderColor: '#d6d7da',
    borderWidth:2,
    borderRadius: 8,
    flexDirection:"row",
    alignItems:'center',
    backgroundColor:'rgba(0, 255, 5, 0.8)',
    margin:10,
  },
});
