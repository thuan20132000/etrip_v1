import React, { useState } from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const FilterBar = ({}) => {

    const [area, setArea] = useState('all');
    const [price,setPrice] = useState('any');


    let districts = [
        {
            label:'Tất cả',
            value:'all'
        },
        {
            label:'Quận Liên Chiểu',
            value:'490'
        },
        {
            label:'Quận Thanh Khê',
            value:'491'
        },
        {
            label:'Quận Hải Châu',
            value:'492'
        },
        {
            label:'Quận Sơn Trà',
            value:'493'
        },
        {
            label:'Quận Ngũ Hành sơn',
            value:'494'
        },
        {
            label:'Quận Cẩm Lệ',
            value:'495'
        },
        {
            label:'Huyện Hoà Vang',
            value:'496'
        },
    ]
    



    return (

        <View style={styles.container}>

            <DropDownPicker style={styles.dropdownWrap}
                
                items={districts}
                defaultValue={area}
                containerStyle={{ height: 40 }}
                itemStyle={{
                    justifyContent: 'flex-start'
                }}
                
                dropDownStyle={{ backgroundColor: '#fafafa' }}
                onChangeItem={item => setArea(item.value)}
            />

            
            <DropDownPicker style={styles.dropdownWrap}
                
                items={[
                    { label: 'Bất kỳ', value: 'any'},
                    { label: '1000', value: '1000'},
                    { label: '2000', value: '2000' },
                    { label: '3000', value: '3000'},
                ]}
                defaultValue={price}
                containerStyle={{ height: 40 }}
                itemStyle={{
                    justifyContent: 'flex-start'
                }}
                
                dropDownStyle={{ backgroundColor: '#fafafa' }}
                onChangeItem={item => setPrice(item.value)}
            />
        </View>


    )
}

export default FilterBar

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row'
    },
    dropdownWrap: {
        width: Dimensions.get('screen').width / 2,
        backgroundColor:'white',
        zIndex:999
    }
})
