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
    var explains = explanation[scene].explain;//cards with explanation
    for(var i; i < answer.length; i++){
      if(param.indexOf(answer[i]) == -1){
        this.missing.push(answer[i]);
      } else{
        this.correct.push(answer[i]);
      }
    }
    return (
      <ScrollView style={styles.container}>
        {/* TODO: Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        {/*<ExpoLinksView/>*/}
        <View style = {styles.scene}>
        <Text adjustsFontSizeToFit>{scenarios[JSON.stringify(scene)]}</Text>
        </View>
        <View style = {styles.cardscontainer}>
        {
          // this.missing.map(( item, key ) =>
          // (
          //   <View key = { key } style = { styles.missingCards }>
          //       <Text>test</Text>
          //   </View>
          // ))
        }
        <ScrollView horizontal={false}>
        <View style={styles.missingCards}>
        <Text>
        {explains[0]}
        </Text>
        </View>
                <View style={styles.missingCards}>
        <Text>
        {explains[1]}
        </Text>
        </View>
                <View style={styles.missingCards}>
        <Text>
        {explains[3]}
        </Text>
        </View>
                <View style={styles.missingCards}>
        <Text>
        {explains[5]}
        </Text>
        </View>
                <View style={styles.missingCards}>
        <Text>
        {explains[7]}
        </Text>
        </View>
                <View style={styles.missingCards}>
        <Text>
        {explains[10]}
        </Text>
        </View>
                
        </ScrollView>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    alignItems:'center',
  },
  scene:{
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
    width:300,
    height: 80,
    top: 5,
    borderColor: '#d6d7da',
    borderWidth:2,
    borderRadius: 8,
    flexDirection:"row",
    alignItems:'center',
    backgroundColor:'rgba(128, 128, 128, 0.8)',
  },
});
