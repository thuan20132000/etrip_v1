import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Caption } from 'react-native-paper'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CommonIcons from '../../constants/CommonIcons'

const SectionTitle = ({title,icon=CommonIcons.map,backgroundColor,textColor,iconColor='coral',iconSize = 16}) => {
    return (
        <View style={[styles.container]} >
            <MaterialCommunityIcons style={styles.icon}
                name={icon}
                size={iconSize}
                color={iconColor}
            />
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

export default SectionTitle

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        paddingHorizontal:12,
        alignItems:'center',
        marginVertical:4

    },
    text:{
        fontSize:16,
        fontWeight:'400',
        color:'grey'
    },
    icon:{
        marginRight:8
    }
})
