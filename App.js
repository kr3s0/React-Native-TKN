import * as React from 'react';
import { Text, TextInput, ScrollView } from 'react-native';
import { createAppContainer, createStackNavigator} from 'react-navigation';


import LoginScreen from './components/Login';
import HomeScreen from './components/Home';

const AppNavigator = createStackNavigator ({
  LoginScreen: { screen: LoginScreen },
  HomeScreen: { screen: HomeScreen }
})

const AppContainer = createAppContainer(AppNavigator);


export default class App extends React.Component {

  render() {
    return( 
      <AppContainer/>
    );
  }
}







