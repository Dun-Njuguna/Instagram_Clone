import React, {Component} from 'react'
import{View, Text, TouchableOpacity, TextInput, Button, StyleSheet} from  'react-native'
import config from '../../config';


class Login extends Component{

    constructor(){
        super()
        this.state = {
            credentials: {
                email: "",
                password: ""
            }
        }
    }

    updateText(text, field){
        let newCredentials = Object.assign(this.state.credentials)
        newCredentials[field] = text
        this.setState({
            credentials: newCredentials
        })
    }

    register(){
        let credentials = this.state.credentials
        credentials.email =this.state.credentials.email.toLowerCase();
        console.log(JSON.stringify(credentials));
        fetch(config.baseUrl + "login", {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
          }).then(response => response.json())
          .then((jsonResponse) => {
              console.log(JSON.stringify(jsonResponse));
              if(jsonResponse.confirmation === "success"){
                  this.props.navigation.navigate("main")//navigate to main app
              }else{
                  throw new Error(jsonResponse.message)
              }
          }).catch(err => {
              alert(JSON.stringify(err.message))
          })
    }

    render(){
        return(
            <View 
            style={{
                    height: 100+"%",
                    width: 100+"%",
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: "rgb(252,61,57)"
                }}
            >
            <Text>Login Page</Text>
            
            <TextInput 
                value={this.state.email}
                placeholder="Username" 
                autoCorrect = {false}
                onChangeText={text => this.updateText(text, "email")} 
                style={styles.input}/>

            <TextInput 
                value={this.state.password}
                placeholder="Password" 
                secureTextEntry 
                autoCorrect = {false}
                onChangeText={text => this.updateText(text, "password")} 
                style={styles.input}/>   

            <Button onPress = {() => {this.register();}} title='Signin'/>
            <Button onPress = {() => this.props.navigation.navigate("register")} title='No account? Sign up here!'/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        width: 100+'%',
        height: 40, 
        paddingHorizontal: 50,
        backgroundColor: 'white',
        marginBottom: 10
    }
})


export default Login;