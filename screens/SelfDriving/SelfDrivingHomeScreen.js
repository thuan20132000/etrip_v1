import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import SearchBar from '../../components/Search/SearchBar'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import CommonIcons from '../../constants/CommonIcons'
import CommonColors from '../../constants/CommonColors'
import { Modal, Portal, Button, Provider } from 'react-native-paper';
import PATDateTimePicker from '../../components/Picker/PATDateTimePicker'




const SelfDrivingHomeScreen = () => {

    const [startDate,setStartDate] = useState('');
    const [endDate,setEndDate] = useState('');

    return (
        <View>
            <SearchBar />
            <Text>Thuê xe tự lái</Text>


            <View style={styles.row}>
                <TouchableOpacity style={styles.timePickerBlock}

                >
                    <Text>Nhận Xe</Text>
                    <PATDateTimePicker             
                        onSelected={setStartDate}
                        mode={'datetime'}
            
                
                    />
                </TouchableOpacity>
                {/* <MaterialCommunityIcons
                    name={CommonIcons.arrowToRight}
                    color={CommonColors.primary}
                    size={24}
                /> */}
                {/* <TouchableOpacity style={styles.timePickerBlock}

                >
                    <Text>Trả Xe</Text>
                    <Text>26/11 21:00</Text>
                </TouchableOpacity> */}
            </View>
        </View>
    )
}

export default SelfDrivingHomeScreen

const styles = StyleSheet.create({
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    timePickerBlock: {
        padding: 12,
        backgroundColor: CommonColors.secondary,
        margin: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width:'100%'
    }
})
