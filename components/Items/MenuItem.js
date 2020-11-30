import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import CommonColors from '../../constants/CommonColors'
import CommonIcons from '../../constants/CommonIcons'

const MenuItem = ({icon,iconSize=24,name,_onPress,id,itemStyle}) => {
    return (
        <TouchableOpacity style={[styles.container,itemStyle]}
            onPress={()=>_onPress(id)}
        >
            <MaterialCommunityIcons
                name={icon}
                size={iconSize}
                color={CommonColors.primary}
            />
            <Text style={styles.text}>{name}</Text>
        </TouchableOpacity>
    )
}

export default MenuItem

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 8,
        margin: 6,
        borderRadius:8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        width:110

    },
    text: {
        fontSize: 12,
        fontWeight: '600',
        color:'gray'
    }
})
