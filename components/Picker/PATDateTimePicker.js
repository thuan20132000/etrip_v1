import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';

const PATDateTimePicker = ({mode='date',display='default',onSelected}) => {

    const [date, setDate] = useState(new Date(1598051730000));
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
        onSelected(currentDate);
    };

    return (
        <View style={styles.container}>
            <DateTimePicker 
                
                value={date}
                mode={mode}
                display={'compact'}
                onChange={onChange}
                locale={'vi_VN'}
                
                
                
            />
        </View>

    )
}

export default PATDateTimePicker

const styles = StyleSheet.create({
    container:{
        width:200,
        justifyContent:'center',
    }
})
