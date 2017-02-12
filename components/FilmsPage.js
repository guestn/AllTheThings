/**
 * Settings Page
 * 
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  Image,
  TextInput
} from 'react-native';
import S from '../styles';

export default class FilmsPage extends Component {
	constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }

	render() {
		return (
			<View>
				<Text>Films Page</Text>
				<TextInput
				style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}/>
			</View>
			
		)
	}
}