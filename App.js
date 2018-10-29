import React from 'react';
// TODO: when adding new components, check out the list
// of components in the end of this page under "REACT NATIVE":
// https://docs.expo.io/versions/v30.0.0/react-native/tutorial
// You will need to import the component before using it.
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
import GameScreen from './screens/GameScreen';
import CheckScreen from './screens/CheckScreen';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json

class HomeScreen extends React.Component {
  render() {
    return (
      // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      // The following line does the same thing as the above one, but it uses the stylesheet.
      <View style={styles.centerView}>
    {/* TODO: Using <Image> to add logo
              Using <Text> to add plain text
              You can find a sample homescreen inside "screens" folder */}
        <Text>Home Screen</Text>
      
      {/* Learn more about navigation: https://reactnavigation.org/docs/en/navigating.html */}
        <Button
          title="Start"
          onPress={() => this.props.navigation.navigate('Game')}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Game: GameScreen,
    Check: CheckScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

// TODO: add a stylesheet containing "css" elements to style the page
// Check out this css tutorial https://www.w3schools.com/css/
const styles = StyleSheet.create({
  centerView:{
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
});
