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
  View,
  NavigationBar,
  RegisterForm
} from 'react-native';

import * as constants from '../constants/file.js';
const scenarios = constants.scenarios;
const cardsText = constants.cards;
const answers = constants.answers;//0 is fixit and 1 is big pic
const explanation = constants.explanation;

export default class CheckScreen extends React.Component {
  missing: Array;
  correct: Array;
  corresEx: Array;
  wrong: Array;
  static navigationOptions = ({ navigation }) => ({
    title: 'CheckForAnswers',
    headerLeft : (
      <TouchableOpacity onPress={() => {navigation.navigate('Home')}}>
        <View style={{ justifyContent: 'center', headerLayoutPreset: 'center', marginLeft: 15, width: 40, height: 40 }}>
                      <Image source={ require('../assets/images/home.png') }/>
          </View>
      </TouchableOpacity>
    ),
  });
  constructor() {
    super();
    this.missing = new Array();
    this.correct = new Array();
    this.wrong = new Array();
  }
  render() {
    const { navigation } = this.props;
    const param = navigation.getParam('para', 'TEST');
    const answer = navigation.getParam('correct', 'test');// pass in all correct answers
    const scene = navigation.getParam('scene', -1);
    const corresEx = navigation.getParam('corresEx', 'test');
    var isCorrect = false;
    var isMissing = false;
    var isWrong = false;
    var explains = explanation[scene].explain;//cards with explanation
    
    for (var i = 0; i < answer.length; i++) {
      if (param.indexOf(answer[i]) != -1) {
        this.correct.push(corresEx[i]);
        isCorrect = true;
      } else {
        this.missing.push(corresEx[i]);
        isMissing = true;
      }
    }

    for (var j = 0; j < param.length; j++) {
      if (answer.indexOf(param[j]) == -1) {
        this.wrong.push(param[j]);
        isWrong = true;
      }
    }

    return (
      <View style={{ backgroundColor: 'white', flex: 1,alignItems:"center"}}>
        <ScrollView style={{ flexGrow: 1, backgroundColor: 'white'}}>
          <View style={{ flex: 1, justifyContent: 'center'}}>
            <View style={styles.scene}>
              <Text adjustsFontSizeToFit>{scenarios[scene]}</Text>

            </View>

            <Text style={{textAlign:"center",overflow:"scroll"}}>Correct</Text>
            <View>
            {isCorrect ? (
              this.correct.map((item) =>
              (
                <View style={styles.correctCards}>
                  <Text style={{padding:2,overflow:"scroll",margin:2,flexWrap:"wrap"}}>{cardsText[item]}</Text>
                </View>
              ))
              ):(
                <View>
                  <Text style={{textAlign:"center",overflow:"scroll", fontWeight:'bold'}}> None </Text>
                </View>
              )
            }
            </View>

            <Text style={{textAlign:"center",overflow:"scroll"}}>Wrong</Text>
            <View>    
            {isWrong ? (
              this.wrong.map((item) =>
              (
                <View style={styles.wrongCards}>
                  <Text style={{padding:2,overflow:"scroll",margin:2,flexWrap:"wrap"}}>{cardsText[item]}</Text>
                </View>
              ))
              ):(
                <View>
                  <Text style={{textAlign:"center",overflow:"scroll", fontWeight:'bold'}}> None </Text>
                </View>
              )
            }
            </View>
            
            <Text style={{textAlign:"center",overflow:"scroll"}}>Missing</Text>
            <View>
            {isMissing ? (
              this.missing.map((item) =>
              (
                <View style={styles.missingCards}>
                  <Text style={{padding:2,overflow:"scroll",margin:2,flexWrap:"wrap"}}>{explains[item]}</Text>
                </View>
              ))
              ):(
                <View>
                  <Text style={{textAlign:"center",overflow:"scroll", fontWeight:'bold'}}> None </Text>
                </View>
              )
            }
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    flexGrow: 1,
    // paddingTop: 30,
    // paddingVertical: 20,
    // backgroundColor: '#fff',
    // alignItems:'center',
    // height: 400,
  },
  scene: {
    //flex: 1,
    flexDirection:'column',
    width: 300,
    minHeight: 80,
    top: 5,
    padding: 2,
    borderColor: '#d6d7da',
    borderWidth: 2,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: 'center',
    backgroundColor: 'rgba(0, 150, 200, 0.5)',
    margin: 10,
  },
  cardscontainer: {
    top: 25,
    alignItems: 'center',
  },
  missingCards: {
    flexDirection:'column',
    flexGrow:1,
    width: 300,
    minHeight: 50,
    top: 5,
    borderColor: '#d6d7da',
    padding: 2,
    borderWidth: 2,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: 'rgba(128, 128, 128, 0.8)',
    margin: 10,
  },
  wrongCards: {
    flexDirection:'column',
    flexGrow:1,
    width: 300,
    minHeight: 50,
    top: 5,
    borderColor: '#d6d7da',
    padding: 2,
    borderWidth: 2,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: 'rgba(128, 0, 0, 0.8)',
    margin: 10,
  },
  correctCards: {
    flexDirection:'column',
    width: 300,
    minHeight: 50,
    top: 5,
    borderColor: '#d6d7da',
    padding: 2,
    borderWidth: 2,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 255, 5, 0.8)',
    margin: 10,
  },
});
