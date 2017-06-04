import React from 'react'
import {
  Button,

} from 'react-native'

class SetupScreen extends React.Component {
  static navigationOptions = {
    title: 'Setup',
  };
  render() {
    const { goBack } = this.props.navigation;
    return (
      <Button
        title="Go back to home tab"
        onPress={() => goBack()}
      />
    );
  }
}

export default SetupScreen
