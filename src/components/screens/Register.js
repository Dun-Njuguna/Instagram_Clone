import React, {Component} from 'react' 
import{StyleSheet, View, Text, TouchableOpacity, TextInput, Button} from  'react-native'
import config from '../../config';

class Register extends Component{

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
        fetch(config.baseUrl + 'signup', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state.credentials),
          }).then((response) => response.json())
          .then((jsonResponse) => {
              if(jsonResponse.confirmation ==="success"){
                  this.props.navigation.navigate("main")//navigate to main app
              }
          }).catch(err => {
              alert(err)
          })
            // alert(JSON.stringify(this.state.credentials))
        //else error message
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
            <Text>Register Page</Text>
            
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

            <Button onPress = {() => {this.register();}} title='Signup'/>

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

export default Register;