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
} from 'react-native';
import CheckScreen from './CheckScreen';
import * as constants from '../constants/file.js';
import Scenario from './Scene.js';
import {random} from './helpers';
const scenarios = constants.scenarios;
const cardsText = constants.cards;
const answers = constants.answers;//0 is fixit and 1 is big pic

/*TODO: You may want to add some functions as the backend logic parts here, such as randomnizer*/
// class Scenario {
//   id:String;
//   content:String;
//   correctAnswer:Array;
//   flag:boolean;
//   constructor(id,content,correctAnswer){
//     this.id = id;
//     this.content = content;
//     this.correctAnswer = correctAnswer;
//     this.flag = false;
//   }
// }

export default class GameScreen extends React.Component {
  selected: Array;
  correct: Array;
  corresEx: Array;
  static navigationOptions = {
    title: 'Game',
  };
  constructor(){
    super();
    this.selected = new Array();
    this.correct = new Array();
    this.corresEx = new Array();
  }
  randomnizer(){
    return random(16);
  }
  counting(index){
    this.selected.push(index);
  }
  render() {
    var scenes = new Array(); //check if the scene has been gone through or not
    var sceneNum = this.randomnizer();
    while(scenes.includes(sceneNum)){
      sceneNum = this.randomizer();
    }
    var curr = new Scenario(sceneNum);
    scenes.push(sceneNum);
    this.correct = curr.correct;
    this.corresEx = curr.corresEx;
  	return (
  		<View style={styles.container}>
  			<View style ={styles.body}>
                {/*scenarios[numQ].content*/}
  				{/* TODO: Add cards here*/}
          <View style={{alignItems:'center',  position: 'absolute', marginTop:50}}> 
            <Image style={{width: 30, height: 30}}
          source={require('../assets/images/sign.png')}
         />
          <Text style={{color:'#ffbd13', fontFamily:'Menlo-Bold'}}>UNDER</Text>
           <Text style={{color:'#ffbd13', fontFamily:'Menlo-Bold'}}>PRESSURE </Text>
          </View>
  	  		<View style = {styles.scene}>
          <Text style={{color:'white',   fontFamily:'Arial Rounded MT Bold', fontSize:20}} >{scenarios[sceneNum]}</Text>
          <View style={styles.clockOut}>
          <Image style={styles.clock} source = {require('../assets/images/Timer.jpg')} />
          </View>
  	  		</View>
          <View style={styles.boxes}>
            <View style={styles.col}>
             <TouchableOpacity onPress={()=>this.counting(curr.cards[0].id)}><View style={styles.cards}><Text style={styles.text} adjustsFontSizeToFit>{cardsText[curr.cards[0].id]}</Text></View></TouchableOpacity>
              <TouchableOpacity onPress={()=>this.counting(curr.cards[1].id)}><View style={styles.cards}><Text style={styles.text} adjustsFontSizeToFit>{cardsText[curr.cards[1].id]}</Text></View></TouchableOpacity>
               <TouchableOpacity onPress={()=>this.counting(curr.cards[2].id)}><View style={styles.cards}><Text style={styles.text} adjustsFontSizeToFit>{cardsText[curr.cards[2].id]}</Text></View></TouchableOpacity>
            </View>
            <View style={styles.col}>
             <TouchableOpacity onPress={()=>this.counting(curr.cards[3].id)}><View style={styles.cards}><Text style={styles.text} adjustsFontSizeToFit>{cardsText[curr.cards[3].id]}</Text></View></TouchableOpacity>
              <TouchableOpacity onPress={()=>this.counting(curr.cards[4].id)}><View style={styles.cards}><Text style={styles.text} adjustsFontSizeToFit>{cardsText[curr.cards[4].id]}</Text></View></TouchableOpacity>
               <TouchableOpacity onPress={()=>this.counting(curr.cards[5].id)}><View style={styles.cards}><Text style={styles.text} adjustsFontSizeToFit>{cardsText[curr.cards[5].id]}</Text></View></TouchableOpacity>
            </View>
            <View style={styles.col}>
             <TouchableOpacity onPress={()=>this.counting(curr.cards[6].id)}><View style={styles.cards}><Text style={styles.text} adjustsFontSizeToFit>{cardsText[curr.cards[6].id]}</Text></View></TouchableOpacity>
              <TouchableOpacity onPress={()=>this.counting(curr.cards[7].id)}><View style={styles.cards}><Text style={styles.text}  adjustsFontSizeToFit>{cardsText[curr.cards[7].id]}</Text></View></TouchableOpacity>
              <View style={styles.checkCard}>
              <Button
                  title="CHECK" color="white"  
                  onPress={() => {this.props.navigation.navigate('Check',{
                    para: this.selected,
                    scene: sceneNum,
                    correct:this.correct,
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
  container: {
    flex: 1,
    backgroundColor: 'black',
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
  scene:{
    width:300,
    height: 80,
    position: 'absolute',
    top: 100,
    right: 100,
    borderRadius: 8,
    flexDirection:"row",
    alignItems:'center',
   
  },
  cards:{
    width: 300,
    height: 40,
    margin: 5,
    borderRadius: 8,
    alignItems:'center',
    backgroundColor: 'white',
    
  },

  checkCard:{
    width: 300,
    height: 40,
    margin: 5,
    alignItems:'center',
  
  },

  text:{
      fontFamily:'Cochin-Bold',

    backgroundColor:'transparent',
    color:'black',
  },

  col:{
    flexDirection:"column",
  },
  boxes:{
    top: 200,
  },
  clock:{
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  clockOut:{
    right: -25,
  },
});
