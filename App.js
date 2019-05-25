import React from 'react';
// TODO: when adding new components, check out the list
// of components in the end of this page under "REACT NATIVE":
// https://docs.expo.io/versions/v30.0.0/react-native/tutorial
// You will need to import the component before using it.

import {
  Animated,
  Image,
  Platform,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
} from 'react-native';
import GameScreen from './screens/GameScreen';
import CheckScreen from './screens/CheckScreen';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import { Font } from 'expo';

class HomeScreen extends React.Component {
  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      'Cochin-Bold': require('./assets/fonts/Cochin-Bold.ttf'),
      'Menlo-Bold': require('./assets/fonts/Menlo-Bold.ttf'),
    });

    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      // The following line does the same thing as the above one, but it uses the stylesheet.
      <View style={{ flex: 1 }}>
        <View style={{ flex: 4, backgroundColor: 'black' }}>

          <FadeInView >
            {
              this.state.fontLoaded ? (
                <Text style={styles.head}>UNDER</Text>
              ) : null
            }
            {
              this.state.fontLoaded ? (
                <Text style={styles.head2}>PRESSURE</Text>
              ) : null
            }
          </FadeInView>

          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={styles.longBox}>
            </View>
            <View style={styles.longBox2}>
            </View>
            <View style={styles.longBox3}>
            </View>

            <View style={styles.centerView}>
              <View style={styles.innerBox}>

                <View style={styles.box}>
                </View>
                <View style={styles.box1}>
                  <Button title="START" color="white"
                    onPress={() => this.props.navigation.navigate('Game')}
                  />
                </View>
                <View style={styles.box2}>
                  <Button title="CONTINUE" color="black" />
                </View>

                <View style={styles.box3}>
                  {
                    this.state.fontLoaded ? (
                      <Text style={{ fontSize: 70, color: '#ffbd13', fontFamily: 'Menlo-Bold' }}>GAME</Text>
                    ) : null
                  }
                  {
                    this.state.fontLoaded ? (
                      <Button
                        title="SURVEY" color="white" fontFamily='Menlo-Bold'
                        onPress={() =>
                          Linking.openURL('https://goo.gl/forms/uyWpRmwba0qKqEUE2')
                        }
                      />) : null
                  }


                </View>
              </View>
            </View>
          </View>
        </View>



      </View>
    );
  }
}

const RootStack = createStackNavigator({
  Home: HomeScreen,
  Game: GameScreen,
  Check: CheckScreen,
});

export default class App extends React.Component {
  componentDidMount() {
    Font.loadAsync({
      'Cochin-Bold': require('./assets/fonts/Cochin-Bold.ttf'),
      'Menlo-Bold': require('./assets/fonts/Menlo-Bold.ttf'),
    });
  }
  render() {
    return <RootStack />;
  }
}

// TODO: add a stylesheet containing "css" elements to style the page
// Check out this css tutorial https://www.w3schools.com/css/
const styles = StyleSheet.create({
  centerView: {
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'white',
    width: 280,
    height: 420,
    marginLeft: 10,
    marginTop: 50,

  },

  longBox: {
    width: 20,
    marginTop: 120,
    height: 350,
    marginLeft: 60,
    backgroundColor: 'white',
  },

  longBox2: {
    width: 20,
    marginTop: 90,
    height: 380,
    marginLeft: 10,
    backgroundColor: 'white',
  },

  longBox3: {
    width: 20,
    marginTop: 50,
    height: 550,
    marginLeft: 10,
    backgroundColor: 'white',
  },

  head: {
    marginTop: 30,
    marginLeft: 20,
    fontSize: 50,
    color: 'white',
    fontFamily: 'Cochin-Bold',
  },

  head2: {
    marginTop: 0,
    marginLeft: 40,
    fontSize: 50,
    color: 'white',
    fontFamily: 'Cochin-Bold',
  },

  innerBox: {
    paddingTop: 190,

  },

  box: {
    marginLeft: 20,
    marginTop: 10,
    width: 80,
    height: 10,
    backgroundColor: 'gray',
  },

  box1: {
    marginLeft: 20,
    marginTop: 10,
    width: 100,
    backgroundColor: 'black',

  },

  box2: {
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 10,
    width: 200,
    backgroundColor: 'gray',

  },

  box3: {
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 10,
    width: 200,
    backgroundColor: 'black',

  },
}

);

class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
  }

  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 1000,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}
