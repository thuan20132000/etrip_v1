import React, { useState,useEffect } from 'react'
import { StyleSheet, Text, View,TextInput } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import CommonColors from '../../constants/CommonColors';
import CommonIcons from '../../constants/CommonIcons';

const SearchBar = () => {

    const [searchValue,setSearchValue] = useState('');


    useEffect(() => {
        console.warn('ds');
    }, []);

    return (
        <View style={styles.searchContainer}>

            <MaterialCommunityIcons style={{flex:1,textAlign:'center'}}
                name={CommonIcons.googleMap}
                size={26}
                color={CommonColors.primary}
            />
            <TextInput
                style={{ height: 40, borderColor: 'gray', flex:8}}
                onChangeText={text => setSearchValue(text)}
                value={searchValue}
                placeholder={`Nhập địa chỉ nhận xe hoặc vị trí của bạn`}
            />

        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    searchContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        margin:6


    }
})
