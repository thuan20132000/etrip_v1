import React from 'react'
import { Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Caption, Card, Title } from 'react-native-paper'




const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;
const SimpleCard = ({name,image,onPress}) => {
    
    return (
        <TouchableOpacity style={styles.container}
            onPress={onPress}
        >
            <ImageBackground 
                source={{
                    uri: 'https://picsum.photos/700'
                }} 
                style={styles.image}
            >
                <View style={{bottom:0,position:'absolute',marginHorizontal:12}}>
                    <Caption style={{
                        color:'white',
                        fontWeight:'700',
                        fontSize:18
                    }}>{name}</Caption>
                </View>
            </ImageBackground>


        </TouchableOpacity>

    )
}

export default SimpleCard

const styles = StyleSheet.create({
    container: {
        width: deviceWidth / 2,
        height: deviceHeight / 7,
        margin: 8,
        borderRadius:22,
        overflow:'hidden'
    },
    image:{
        width:deviceWidth/2,
        height:deviceWidth/4,

        
    }
})
