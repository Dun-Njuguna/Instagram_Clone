import React, {Component} from 'react'

import{View, StyleSheet} from 'react-native'
import{MainFeed, Login, Camera, Profile, Register} from './components/screens'
import { SwitchNavigator, TabNavigator, StackNavigator } from 'react-navigation';

const Tabs = TabNavigator({
	feed: MainFeed,
	camera: Camera,
	profile: Profile,
}, {
	tabBarPosition: 'bottom',
  tabBarOptions : {
    style: {
			// backgroundColor: '#fff',
		}
	}
});

const IntroStack = StackNavigator({
	login: Login,
	register: Register
})

const MainStack = SwitchNavigator({
		intro: IntroStack,
		 main: Tabs
});

class InstaClone extends Component{
    render(){
        return <MainStack />
    }
}

export default InstaClone;
