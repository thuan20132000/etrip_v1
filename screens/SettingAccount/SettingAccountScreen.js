import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'

const SettingAccountScreen = () => {
    return (
        <View>
            <ImageBackground style={{width:'100%',height:100}}
                source={{
                    uri:'https://dulichcanhdieu.com.vn/wp-content/uploads/cau-rong-phun-nuoc.jpg'
                }} 
            >
                <Text style={styles.text}>Inside</Text>
            </ImageBackground>
            <Text></Text>
        </View>
    )
}

export default SettingAccountScreen

const styles = StyleSheet.create({})
