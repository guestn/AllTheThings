/**
 * Homepage
 * 
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Navigator,
  TouchableHighlight,
  Image
} from 'react-native';
import S from '../styles';

export default class Homepage extends Component {
	constructor(props) {
		super(props);
		this.navigate = this.navigate.bind(this)
	}
	navigate(value) {
		console.log(value)
		this.props.nav(value)
	}
	render() {
		console.log(this.props)
		return (
			<View>
				<Text>Homepage</Text>
				<TouchableHighlight style={S.button} onPress={() => {this.navigate(2)}}>
					<Text >Films</Text>
				</TouchableHighlight>
			</View>
			
		)
	}
}