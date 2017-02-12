import React, { Component } from 'react';

import {
 Navigator
} from 'react-native';

import Homepage from './Homepage';
import SettingsPage from './SettingsPage';

const routes = [
	    {title: 'Home', index: 0, component: <Homepage navigator={navigator} routes={routes} />},
	    {title: 'Settings', index: 1, component: <SettingsPage navigator={navigator} />},
	  ]
module.exports =routes;