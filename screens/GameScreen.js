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
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import CheckScreen from './CheckScreen';

export default class GameScreen extends React.Component {
	render() {
    return <RootStack />;
  }
}

class Game extends React.Component{
  static navigationOptions = {
    title: 'Game',
  };

  render() {
  	return (
  		<View>
  			<View style={styles.centerView}>
  	  			<Text>Hello World</Text>
  	  		</View>
  	  		<View style={styles.bottomView}>
  	  			<Button
          			title="Check"
          			onPress={() => this.props.navigation.navigate('CheckScreen')}
        		/>
  	  		</View>
  	  	</View>
    );
  }
}


const RootStack = createStackNavigator(
  {
    Game: Game,
    Check: CheckScreen,
  },
  {
    initialRouteName: 'Game',
  }
);

// TODO: add a stylesheet containing "css" elements to style the page
// Check out this css tutorial https://www.w3schools.com/css/
const styles = StyleSheet.create({
  centerView:{
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  bottonView: {
  	justifyContent: 'flex-end',
  },
});
