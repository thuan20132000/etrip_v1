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

                testID="dateTimePicker"
                value={date}
                mode={mode}
                display={display}
                onChange={onChange}
                
                
            />
        </View>

    )
}

export default PATDateTimePicker

const styles = StyleSheet.create({
    container:{
        width:300,
        justifyContent:'center',
        alignSelf:'center',
    }
})
