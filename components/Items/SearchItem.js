import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CommonColors from '../../constants/CommonColors';
import CommonIcons from '../../constants/CommonIcons';


const SearchItem = ({index,item,onPress}) => {


    return (
        <TouchableOpacity style={styles.container}
            onPress={()=>onPress(item)}
        >
            <MaterialCommunityIcons
                name={CommonIcons.searchLabel}
                size={24}
                color={CommonColors.primary}
            />
            <Text style={styles.textSearch}>{item.name}</Text>
        </TouchableOpacity>
    )
}

export default SearchItem

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        padding:12,
        alignItems:'center',
        backgroundColor:CommonColors.secondary

    },
    textSearch:{
        fontSize:16,
        marginLeft:8,

    }
})
