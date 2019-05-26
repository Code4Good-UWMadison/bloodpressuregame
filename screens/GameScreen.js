import React from 'react';
import {
  Image,
  Platform,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  CheckBox,
} from 'react-native';
import CheckScreen from './CheckScreen';
import * as constants from '../constants/file.js';
import Scenario from './Scene.js';
import { random } from './helpers';
// import TimerCountdown from "react-native-timer-countdown";
import CountDown from 'react-native-countdown-component';

const scenarios = constants.scenarios;
const cardsText = constants.cards;
const answers = constants.answers;//0 is fixit and 1 is big pic

export default class GameScreen extends React.Component {
  selected: Array;
  correct: Array;
  corresEx: Array;
  static navigationOptions = {
    title: 'Game',
  };
  constructor() {
    super();
    this.selected = new Array();
    this.correct = new Array();
    this.corresEx = new Array();
  }
  randomnizer() {
    return random(16);
  }
  counting(index) {
    this.selected.push(index);
  }
  render() {
    var scenes = new Array(); //check if the scene has been gone through or not
    var sceneNum = this.randomnizer();
    while (scenes.includes(sceneNum)) {
      sceneNum = this.randomizer();
    }
    var curr = new Scenario(sceneNum);
    scenes.push(sceneNum);
    this.correct = curr.correct;
    this.corresEx = curr.corresEx;
    return (
      <View style={styles.container}>
          {
            <CountDown
              until={60 * 3}
              size={20}
              onFinish={() => Alert.alert(
                'Time is up',
                'Please submit your answer',
                [
                  {
                    text: 'Submit', onPress: () => {
                      this.props.navigation.navigate('Check', {
                        para: this.selected,
                        scene: sceneNum,
                        correct: this.correct,
                        corresEx: this.corresEx,
                      });
                    }
                  },
                ],
                { cancelable: false }
              )}
              digitStyle={{ backgroundColor: '#FFF' }}
              digitTxtStyle={{ color: '#1CC625' }}
              timeToShow={['M', 'S']}
              timeLabels={{ m: 'MM', s: 'SS' }}
            />

            /* <TimerCountdown
            initialMilliseconds={1000 * 180}
            onTick={(milliseconds) => console.log("tick", milliseconds)}
            onExpire={() => Alert.alert(
              'Time is up',
              'Please submit your answer',
              [
                {text: 'Submit', onPress: () => {this.props.navigation.navigate('Check',{
                  para: this.selected,
                  scene: sceneNum,
                  correct:this.correct,
                  corresEx: this.corresEx,
                });
              }},
              ],
              { cancelable: false }
            )}
            formatMilliseconds={(milliseconds) => {
              const remainingSec = Math.round(milliseconds / 1000);
              const seconds = parseInt((remainingSec % 60).toString(), 10);
              const minutes = parseInt(((remainingSec / 60) % 60).toString(), 10);
              const hours = parseInt((remainingSec / 3600).toString(), 10);
              const s = seconds < 10 ? '0' + seconds : seconds;
              const m = minutes < 10 ? '0' + minutes : minutes;
              let h = hours < 10 ? '0' + hours : hours;
              h = h === '00' ? '' : h + ':';
              return h + m + ':' + s;
            }}
            allowFontScaling={true}
            style={{ fontSize: 20 }}
            /> */}
        <View style={styles.body}>
          {/*scenarios[numQ].content*/}
          {/* TODO: Add cards here*/}
          <View style={styles.scene}>
            <Text adjustsFontSizeToFit>{scenarios[sceneNum]}</Text>
            <View style={styles.clockOut}>
              <Image style={styles.clock} source={require('../assets/images/Timer.jpg')} />
            </View>
          </View>
          <View style={styles.boxes}>
            <View style={styles.rows}>
              <TouchableOpacity onPress={() => this.counting(curr.cards[0].id)}><View style={styles.cards}><Text adjustsFontSizeToFit>{cardsText[curr.cards[0].id]}</Text></View></TouchableOpacity>
              <TouchableOpacity onPress={() => this.counting(curr.cards[1].id)}><View style={styles.cards}><Text adjustsFontSizeToFit>{cardsText[curr.cards[1].id]}</Text></View></TouchableOpacity>
              <TouchableOpacity onPress={() => this.counting(curr.cards[2].id)}><View style={styles.cards}><Text adjustsFontSizeToFit>{cardsText[curr.cards[2].id]}</Text></View></TouchableOpacity>
            </View>
            <View style={styles.rows}>
              <TouchableOpacity onPress={() => this.counting(curr.cards[3].id)}><View style={styles.cards}><Text adjustsFontSizeToFit>{cardsText[curr.cards[3].id]}</Text></View></TouchableOpacity>
              <TouchableOpacity onPress={() => this.counting(curr.cards[4].id)}><View style={styles.cards}><Text adjustsFontSizeToFit>{cardsText[curr.cards[4].id]}</Text></View></TouchableOpacity>
              <TouchableOpacity onPress={() => this.counting(curr.cards[5].id)}><View style={styles.cards}><Text adjustsFontSizeToFit>{cardsText[curr.cards[5].id]}</Text></View></TouchableOpacity>
            </View>
            <View style={styles.rows}>
              <TouchableOpacity onPress={() => this.counting(curr.cards[6].id)}><View style={styles.cards}><Text adjustsFontSizeToFit>{cardsText[curr.cards[6].id]}</Text></View></TouchableOpacity>
              <TouchableOpacity onPress={() => this.counting(curr.cards[7].id)}><View style={styles.cards}><Text adjustsFontSizeToFit>{cardsText[curr.cards[7].id]}</Text></View></TouchableOpacity>
              <View style={styles.cards}>
                <Button
                  title="Check"
                  onPress={() => {
                    this.props.navigation.navigate('Check', {
                      para: this.selected,
                      scene: sceneNum,
                      correct: this.correct,
                      corresEx: this.corresEx,
                    });
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    );

  }
}

// TODO: add a stylesheet containing "css" elements to style the page
// Check out this css tutorial https://www.w3schools.com/css/
const styles = StyleSheet.create({
  timer: {
    alignItems: "center",
    margin: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#E1FFFF',
  },
  body: {
    alignItems: 'center',
  },
  bottonView: {
    width: 100,
    height: 80,
    flex: 1,
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#AFEEEE',
  },
  scene: {
    width: 200,
    height: 80,
    position: 'absolute',
    top: 20,
    //right: 100,
    borderColor: '#d6d7da',
    borderWidth: 2,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: 'center',
    backgroundColor: 'rgba(0, 150, 200, 0.5)',
  },
  cards: {
    width: 80,
    height: 100,
    margin: 10,
    borderColor: '#d6d7da',
    borderWidth: 2,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#AFEEEE',
  },
  rows: {
    flexDirection: "row",
  },
  boxes: {
    top: 110,
  },
  clock: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  clockOut: {
    right: -25,
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   body: {
//     alignItems: 'center',
//   },
//   bottonView: {
//   	width: 100,
//     height: 80,
//   	flex: 1,
//   	position: 'absolute',
//     bottom: 0,
//     right: 0,
//     backgroundColor: '#AFEEEE',
//   },
//   scene:{
//     width:300,
//     height: 80,
//     position: 'absolute',
//     top: 100,
//     right: 100,
//     borderRadius: 8,
//     flexDirection:"row",
//     alignItems:'center',

//   },
//   cards:{
//     width: 300,
//     height: 40,
//     margin: 5,
//     borderRadius: 8,
//     alignItems:'center',
//     backgroundColor: 'white',

//   },

//   checkCard:{
//     width: 300,
//     height: 40,
//     margin: 5,
//     alignItems:'center',

//   },

//   text:{
//       fontFamily:'Cochin-Bold',

//     backgroundColor:'transparent',
//     color:'black',
//   },

//   col:{
//     flexDirection:"column",
//   },
//   boxes:{
//     top: 200,
//   },
//   clock:{
//     width: 80,
//     height: 80,
//     borderRadius: 8,
//   },
//   clockOut:{
//     right: -25,
//   },
// });