import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

const DayNumberPicker = ({onSelected}) => {

    const dayNumberData = Array(17).fill({});

    return (
        <View style={{padding:12}}>
            {
                dayNumberData.map((e,index) =>
                <TouchableOpacity style={{height:40}}
                    onPress={()=>onSelected(index+1)}
                >
                    <Text>{index+1}  ngày</Text>
                </TouchableOpacity>
                )
            }
        </View>
    )
}

export default DayNumberPicker

const styles = StyleSheet.create({})
