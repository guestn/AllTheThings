/**
 * AllTheThings App
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
  Image

} from 'react-native';
import S from './styles';
import Homepage from './components/Homepage';
import SettingsPage from './components/SettingsPage';
import FilmsPage from './components/FilmsPage';

//import routes from './components/routes';
/*
export const routes = [
	    {title: 'Home', index: 0, component: <Homepage nav={(value) => this.handleExternalNav(value)}/>},
	    {title: 'Settings', index: 1, component: <SettingsPage/>},
	  ]
*/

export class AllTheThings extends Component {
	constructor(props) {
		super(props) 
		
	}
	
	handleExternalNav(value,routes,navigator) {
		console.log(value)
		this.refs.navigator.push(routes[value])
	}
/*
	static defaultProps = {
		routes : [
	    {title: 'Home', index: 0, component: <Homepage/>},
	    {title: 'Settings', index: 1, component: <SettingsPage/>},
	  ]
	}
*/
	
	renderScene(route, navigator) {
		return route.component
	}	
  render() {
	  const routes = [
	    {title: 'Home', index: 0, component: <Homepage nav={(value) => this.handleExternalNav(value,routes,navigator)}/>},
	    {title: 'Settings', index: 1, component: <SettingsPage/>},
	    {title: 'Films', index: 2, component: <FilmsPage/>},

	  ]
	  
	  
	  
		console.log('rootstate',this.state)
	  
		console.log('rootprops',this.props)
		console.log(routes)
	  
	  return (
	    <Navigator
	      initialRoute={routes[0]}
	      initialRouteStack={routes}
	      renderScene={this.renderScene}
	      style={S.navigator}
				ref="navigator"

	      navigationBar={
					<Navigator.NavigationBar
						style={S.navbar}
						routeMapper={{
							LeftButton: (route, navigator, index, navState) => {
								if (route.index === 0) {
									return null;
								} else {
									return (
										<TouchableHighlight style={S.navbarIcon} onPress={() => navigator.pop()}
										activeOpacity={0.5}
										underlayColor='transparent'>
											<Image style={{width: 32, height: 32,}} source={require('./assets/arrow-icon.png')}/>
										</TouchableHighlight>
									);
								}
							},
							RightButton: (route, navigator, index, navState) => {
								if (route.index === 1) {
									return null;
								} else {
									return (
										<TouchableHighlight style={S.navbarIcon} onPress={() => navigator.push(routes[1])}
										activeOpacity={0.5}
										underlayColor='transparent'>
											<Image style={{width: 32, height: 32,}} source={require('./assets/settings-icon.png')}/>
										</TouchableHighlight>
									);
								}
							},
							Title: (route, navigator, index, navState) => {
								return (<Text style={S.navbarText}>AllTheThings</Text>); 
							},
						}}
					/>

			  }
	    />
	    

	  );
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AllTheThings', () => AllTheThings);
