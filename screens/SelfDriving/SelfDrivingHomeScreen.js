import React, { useState } from 'react'
import { StyleSheet, Text, View,TextInput } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import SearchBar from '../../components/Search/SearchBar'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import CommonIcons from '../../constants/CommonIcons'
import CommonColors from '../../constants/CommonColors'
import { Modal, Portal, Button, Provider } from 'react-native-paper';
import PATDateTimePicker from '../../components/Picker/PATDateTimePicker'
import CardHorizontal from '../../components/Card/CardHorizontal'




const SelfDrivingHomeScreen = (props) => {

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    return (
        <View>
            {/* <SearchBar /> */}


            <TouchableOpacity style={styles.searchContainer}
                onPress={()=>props.navigation.navigate('PlaceSearchScreen')}
            >

                <MaterialCommunityIcons style={{ flex: 1, textAlign: 'center' }}
                    name={CommonIcons.googleMap}
                    size={26}
                    color={CommonColors.primary}
                />
                <View
                    style={{ 
                        height: 40,
                        flex:8, 
                        borderColor: 'gray',
                        alignContent:'center',
                        justifyContent:'center'
                    }}
   
                >
                    <Text style={{color:CommonColors.secondary}}>
                        Nhập địa chỉ nhận xe hoặc vị trí của bạn
                    </Text>
                </View>

            </TouchableOpacity>

            <View style={styles.row}>
                <View style={styles.timePickerBlock}

                >
                    <Text style={{
                        padding: 6,
                        fontSize: 16
                    }} >Nhận Xe</Text>
                    <PATDateTimePicker
                        onSelected={setStartDate}
                        mode={'datetime'}
                    />
                </View>

                <View style={styles.timePickerBlock}

                >
                    <Text style={{
                        padding: 6,
                        fontSize: 16
                    }} >Trả Xe</Text>
                    <PATDateTimePicker
                        onSelected={setStartDate}
                        mode={'datetime'}
                    />
                </View>

            </View>

            <ScrollView>
                    <CardHorizontal/>
                    <CardHorizontal/>
                    <CardHorizontal/>
                    <CardHorizontal/>

            </ScrollView>
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
        backgroundColor: 'white',
        margin: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '48%',
        padding: 14,
        borderRadius: 16,
        paddingLeft: 22,
    },
    searchContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        margin:6,
        alignContent:'center'


    }
})
