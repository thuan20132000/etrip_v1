import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import CommonColors from '../../constants/CommonColors'
import CommonIcons from '../../constants/CommonIcons'


const RowItem = ({title,icon,iconColor,titleColor,rowStyle}) => {
    return (
        <View style={[styles.rowContainer,rowStyle]}>
            <MaterialCommunityIcons
                name={icon || CommonIcons.compass}
                color={iconColor || CommonColors.primary}
                size={22}
            />
            <Text style={[styles.text,{color:titleColor}]} >{title}</Text>
        </View>
    )
}

export default RowItem

const styles = StyleSheet.create({
    rowContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        padding:4
    },
    text:{
        fontSize:18,
        marginHorizontal:8
    }
})
