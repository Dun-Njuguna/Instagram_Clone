import React, {Component} from 'react'

import{View, Text, StyleSheet, Image, Dimensions, TouchableOpacity} from 'react-native'
import config from '../../config';

class Post extends Component{

    constructor(){
        super()
        this.state={
            screenWidth: Dimensions.get("window").width,
            liked: false            
        }
    }

    likedToggled(){
        this.setState({
            liked: !this.state.liked
        })
    }

    render(){
        
        const imgHeight = Math.floor(this.state.screenWidth * 1.1);
        const imgUri = "https://lh3.googleusercontent.com/e2OB14_bRslyGa6GqRnmRYE1jkfNVxWPGkoOBM6Jl-jqTuI8kI2pgvI6K9oBCr5lV0TkfYh0Eb8UezjgUZ7ed4myJQ" + "=s" + imgHeight + "-c";
        
        const heartIconColor = this.state.liked ? "rgb(252,61,57)" : null;

        return(
            <View style={{flex: 1, width: 100+"%", height: 100+"%"}}>
                <View style={styles.userBar}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image 
                            style = {styles.userPic}
                            source={{uri: "https://lh3.googleusercontent.com/olxNvMb3Kwy_CS_wVqe3QEXJBFCPt4kbijGUR8H0H5WI0q60Aw9S_GR9Ovpvof9LV9F5O8xMvmcy-hn-9iyNe9SC"}}/>
                        <Text >Ann</Text>
                    </View>
                    <View>
                        <Text style={{fontSize: 35, paddingRight: 7}}>...</Text>
                    </View>
                </View>

                <TouchableOpacity onPress={() => this.likedToggled()}>
                    <Image 
                    style = {{ width: this.state.screenWidth, height: imgHeight}}
                    source={{uri: imgUri}} />
                </TouchableOpacity>

                <View style={styles.iconBar}>
                    <Image style={[styles.icon, {tintColor: heartIconColor}]} source={config.images.heartIcon}/>
                    <Image style={styles.icon} source={config.images.chartIcon}/>
                    <Image style={styles.icon} source={config.images.arrowIcon}/>
                </View>

                <View style={styles.commentBar}>
                <Image style={[styles.icon, {width: 15, height: 15}]} source={config.images.heartIcon}/>
                <Text>120 Likes</Text>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({


userBar: {
    width: 100+"%", 
    height: config.styleConstants.rowHeight , 
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between'
},
userPic: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginHorizontal: 10
},
iconBar: {
    height: config.styleConstants.rowHeight , 
    width: 100+'%',
    borderColor: 'rgb(233,233,233)',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center'
},
icon: {
    height: 25,
    width: 25,
    marginHorizontal: 5,
},
commentBar: {
    width: 100+'%',
    borderColor: 'rgb(233,233,233)',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row'
}

})

export default Post;

