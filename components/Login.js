import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    Button
} from 'react-native';

export default class LoginScreen extends Component {

    render() {
        return (
            <ScrollView>
                <Text>Login</Text>
                <TextInput placeholder='Username' />
                <TextInput placeholder='Password' />
                <Button 
                      onPress={ () => this.props.navigation.navigate('HomeScreen')}
                      title="Submit"
                      />
            </ScrollView>
            );
    }
}