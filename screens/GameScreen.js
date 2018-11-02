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

/*TODO: You may want to add some functions as the backend logic parts here, such as randomnizer*/

export default class GameScreen extends React.Component {
  static navigationOptions = {
    title: 'Game',
  };
  render() {
  	return (
  		<View style={styles.container}>
  			<View style ={styles.body}>
  				{/* TODO: Add cards here*/}
  	  			<Text>Hello World</Text>
  	  		</View>
  	  		<View style={styles.bottonView}>
  	  			<Button
          			title="Check"
          			onPress={() => this.props.navigation.navigate('Check')}
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
