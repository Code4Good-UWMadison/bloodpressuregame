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
const scenarios = ["", "", ""];

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
class Scenario{
  id:integer;
  fixIt : integer;
  bigPicNum : integer;
  randomnNumberOfCards() {
    bigPicNum = Math.floor(Math.random(2));
    if (var == 0){
      fixIt = Math.floor(Math.random(3) + 1);
      break;
    } else {
      fixIt = Math.floor(Math.random(2) + 1);
    }
  }
  randomcards(index){
    
  }
}

class Cards{
  id:integer;
  selected:boolean;
  choose:boolean;
  correct:boolean;
  constructor(id){
    this.id = id;
  }
}

export default class GameScreen extends React.Component {
  static navigationOptions = {
    title: 'Game',
  };
  randomnizer(){
  fixIt : Integer;
  bigPicNum : Integer;
  randomnizer() {
	  bigPicNum = Math.floor(Math.random(2));
	  if (bigPicNum == 0){
		fixIt = Math.floor(Math.random(3) + 1);
	  } else {
		fixIt = Math.floor(Math.random(2) + 1);
	  }
  }
  render() {
    var i;
    // var scenarios = new Array();
    // for (i=0;i<16;i++){
    //   scenarios.push(new Scenario(i,'TestQuestion#'+i,[2,3,4]));
    // }
    // var numQ = Math.round(Math.random()*scenarios.length);
  	return (
  		<View style={styles.container}>
  			<View style ={styles.body}>
                {/*scenarios[numQ].content*/}
  				{/* TODO: Add cards here*/}
  	  			<Text>{fixIt}</Text>
  	  		</View>
  	  		<View style={styles.bottonView}>
  	  			<Button
          			title="Check"
          			onPress={() => {this.props.navigation.navigate('Check',{
                  para: "test",
                });
              }}
        		/>
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
    backgroundColor: '#E1FFFF',
  },
  body: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
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
});
