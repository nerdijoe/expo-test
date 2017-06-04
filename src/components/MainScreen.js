import React from 'react'
import {
  Button,
  View
} from 'react-native'

class MainScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Button
          title="Go to Setup Tab"
          onPress={() => navigate('Setup')}
        />
        <Button
          title="Card"
          onPress={() => navigate('Card')}
        />
      </View>
    );
  }
}

export default MainScreen
