import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import CommonColors from '../../constants/CommonColors'
import CommonIcons from '../../constants/CommonIcons'



const CheckBoxRow = ({ isChecked = true, onCheckToggle,customStyle,iconColor='coral',title }) => {

    const [isCheck, setIsCheck] = useState(isChecked);
    const _onToggleCheckbox = () => {
        setIsCheck(!isCheck);

    }

    useEffect(() => {

        if (onCheckToggle) {
            onCheckToggle(isCheck);
        }



    }, [isCheck])

    return (
        <TouchableWithoutFeedback style={[styles.checkboxContainer,customStyle]}
            onPress={_onToggleCheckbox}
        >
            {
                <MaterialCommunityIcons
                    name={isCheck ? CommonIcons.squareCheckbox : CommonIcons.squareOutline}
                    size={28}
                    color={iconColor}
                />

            }
            <Text>Từ gần tới xa</Text>
        </TouchableWithoutFeedback>
    )
}

export default CheckBoxRow

const styles = StyleSheet.create({
    checkboxContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }
})
