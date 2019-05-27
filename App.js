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
  Linking,
} from 'react-native';
import GameScreen from './screens/GameScreen';
import CheckScreen from './screens/CheckScreen';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import { Font } from 'expo'
import { setSpText2, scaleSize } from './screens/ScreenUtil';

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
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: 'skyblue' }}>
          {
            this.state.fontLoaded ? (
              <Text style={{ marginTop: scaleSize(30), marginLeft: scaleSize(20), color: 'white', fontFamily: 'Cochin-Bold', fontSize: setSpText2(50) }}>UNDER</Text>
            ) : null
          }
          {
            this.state.fontLoaded ? (
              <Text style={{
                marginTop: 0,
                marginLeft: scaleSize(40),
                color: 'white',
                fontFamily: 'Cochin-Bold',
                fontSize: setSpText2(50),
              }}>PRESSURE</Text>
            ) : null
          }


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
                  <Button title="Start" color="black"
                    onPress={() => this.props.navigation.navigate('Game')}
                  />
                </View>
                {/* <View style={styles.box2}>
                  <Button title="Continue" color="black" onPress={}
                  />
                </View> */}

                {
                  // this.state.fontLoaded ? (
                  //   <Text style={{ fontSize: setSpText2(70), color: 'steelblue', fontFamily: 'Menlo-Bold', paddingLeft: 10 }}>GAME</Text>
                  // ) : null
                }

                <View style={styles.box2}>
                  {/* <View style={{ alignItems: 'flex-start', marginLeft: scaleSize(10) }}> */}
                    {
                      this.state.fontLoaded ? (
                        <Button
                          title="SURVEY" color="black" fontFamily='Menlo-Bold'
                          onPress={() =>
                            Linking.openURL('https://goo.gl/forms/uyWpRmwba0qKqEUE2')
                          }
                        />) : null
                    }
                  {/* </View> */}
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
    width: scaleSize(280),
    height: scaleSize(420),
    marginLeft: scaleSize(10),
    marginTop: scaleSize(50),

  },

  longBox: {
    width: scaleSize(20),
    marginTop: scaleSize(120),
    height: scaleSize(350),
    marginLeft: scaleSize(60),
    backgroundColor: 'white',
  },

  longBox2: {
    width: scaleSize(20),
    marginTop: scaleSize(90),
    height: scaleSize(380),
    marginLeft: scaleSize(10),
    backgroundColor: 'white',
  },

  longBox3: {
    width: scaleSize(20),
    marginTop: scaleSize(50),
    height: scaleSize(420),
    marginLeft: scaleSize(10),
    backgroundColor: 'white',
  },

  innerBox: {
    paddingTop: scaleSize(190),

  },

  box: {
    marginLeft: scaleSize(55),
    marginTop: scaleSize(10),
    width: scaleSize(120),
    height: scaleSize(10),
    backgroundColor: 'lightblue',
  },

  box1: {
    marginLeft: scaleSize(40),
    marginTop: scaleSize(15),
    width: scaleSize(150),
    backgroundColor: 'lightblue',

  },

  box2: {
    marginLeft: scaleSize(40),
    marginTop: scaleSize(10),
    width: scaleSize(150),
    backgroundColor: 'skyblue',
  },



}

);

