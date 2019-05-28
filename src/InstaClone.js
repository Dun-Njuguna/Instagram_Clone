import React, {Component} from 'react'

import{View, StyleSheet} from 'react-native'
import{MainFeed, Login} from './components/screens'
import { SwitchNavigator } from 'react-navigation';

const MainStack = SwitchNavigator({
    login: Login, main: MainFeed
});

class InstaClone extends Component{
    render(){
        return <MainStack />
    }
}

export default InstaClone;
