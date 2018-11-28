import React from 'react';
import { 
  Image,
  Platform,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View, } from 'react-native';

export default class CheckScreen extends React.Component {
  static navigationOptions = {
    title: 'CheckForAnswers',
  };
  render() {
    const {navigation} = this.props;
    const param = navigation.getParam('para', 'TEST');
    return (
      <ScrollView style={styles.container}>
        {/* TODO: Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        {/*<ExpoLinksView/>*/}
        <Text>para: {JSON.stringify(param)}</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
