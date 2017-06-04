// @flow
import React from 'react'
import {
  TabNavigator,
  StackNavigator,
} from 'react-navigation'

import MainScreen from './components/MainScreen'
import SetupScreen from './components/SetupScreen'
import CardList from './components/CardList'

const BasicApp = StackNavigator({
  Main: {screen: MainScreen},
  Setup: {screen: SetupScreen},
  Card: {screen: CardList},

})

export default BasicApp
