import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const TourTypePicker = ({onSelected}) => {


    let tourTypeData = [
        {
            id: 1,
            name: 'thư giản'
        },
        {
            id: 2,
            name: 'Bình thường'
        },
        {
            id: 3,
            name: 'Đầy đủ'
        }
    ]

    return (
        <View style={{ padding: 12 }}>
            {
                tourTypeData.map((e, index) =>
                    <TouchableOpacity style={{ height: 40 }}
                        onPress={() => onSelected(e.name)}
                    >
                        <Text>{e.name}</Text>
                    </TouchableOpacity>
                )
            }
        </View>
    )
}

export default TourTypePicker

const styles = StyleSheet.create({})
