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

class HomeScreen extends React.Component {
    render() {
        return (
            // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            // The following line does the same thing as the above one, but it uses the stylesheet.
            <View style={styles.centerView}>
       
        <Text style={styles.head}>Under Pressure</Text>
        <View style={styles.biggerbox}>
         <View style={styles.box}>
            <Button title="Start" color="white" 
            onPress={() => this.props.navigation.navigate('Game')}
            />
         </View>


         <View style={styles.box}>     
            <Button title="Continue" color="white" />
         </View>
         </View>

        <Button
          title="Survey"
          onPress={() => 
            Linking.openURL('https://goo.gl/forms/uyWpRmwba0qKqEUE2')
          }
        />

      </View>
        );
    }
}

const RootStack = createStackNavigator({
    Game: GameScreen,
    Check: CheckScreen,
});

export default class App extends React.Component {
    render() {
        return <RootStack />;
    }
}

// TODO: add a stylesheet containing "css" elements to style the page
// Check out this css tutorial https://www.w3schools.com/css/
const styles = StyleSheet.create({
        centerView: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },

        head: {
            fontSize: 24,

        },

        box: {
            margin: 7.5,
            width: 100,
            backgroundColor: 'steelblue',
        },

        biggerbox: {
            flexDirection: "row",
        }


    }

);