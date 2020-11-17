import React,{useState} from 'react'
import { Dimensions, Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { Button, Paragraph, Dialog, Portal, ActivityIndicator } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CommonColors from '../../constants/CommonColors';
import CommonIcons from '../../constants/CommonIcons';

import ProvincePicker from '../../components/Picker/ProvincePicker';
import PATDateTimePicker from '../../components/Picker/PATDateTimePicker';
import DayNumberPicker from '../../components/Picker/DayNumberPicker';
import TourTypePicker from '../../components/Picker/TourTypePicker';




const PickerItem = ({ rightValue, iconName, iconSize, iconColor, name, value, onPress }) => {
    return (
        <TouchableOpacity style={styles.pickerItemContainer}
            onPress={onPress}
        >
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <MaterialCommunityIcons
                    name={iconName}
                    color={iconColor}
                    size={iconSize}
                />
                <Text>{name}</Text>
            </View>
            {rightValue}
        </TouchableOpacity>
    )
}


const RenderPickerType = ({ pickerType, onSelected }) => {
    switch (pickerType) {
        case 'PROVINCE':
            return <ProvincePicker
                onSelected={onSelected}
            />

        case 'DATE_START':
            return (
                <PATDateTimePicker
                    onSelected={onSelected}
                />
            )
        case 'DAYNUMBER':
            return (
                <DayNumberPicker
                    onSelected={onSelected}
                />
            )
        case 'TOURTYPE':
            return (
                <TourTypePicker
                    onSelected={onSelected}
                />
            )
        default:
            break;
    }
}



const ScheduleScreen = (props) => {

    const {
        navigation
    } = props;

    const [pickerType, setPickerType] = useState('PROVINCE');
    const [visible, setVisible] = React.useState(false);
    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);


    const [schedule, setSchedule] = useState({
        province: '',
        province_code: '',
        start_at: '',
        day_number: '',
        travel_favorite: '',
        tour_type: '',
    });


    const _showPicker = async (pickerType) => {
        setPickerType(pickerType);
        showDialog();

    }

    const _onSelected = (itemSelected) => {
        switch (pickerType) {
            case 'PROVINCE':
                setSchedule({ ...schedule, province: itemSelected.name_with_type, code: itemSelected.code });
                hideDialog();
                break;

            case 'START_AT':

            case 'DAYNUMBER':
                setSchedule({...schedule,day_number:itemSelected});
                hideDialog();
                break;

            case 'TOURTYPE':
                setSchedule({...schedule,tour_type:itemSelected});
                hideDialog();
                break;

            default:
                break;
        }
    }


    const _navigateToDetailSchedule = () => {
        navigation.navigate('DetailSchedule');
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} >

            <View style={{height:Dimensions.get('screen').height}}>

                <PickerItem
                    name={`Địa điểm du lịch`}
                    iconName={CommonIcons.googleMap}
                    iconSize={28}
                    iconColor={CommonColors.primary}
                    onPress={() => _showPicker('PROVINCE')}
                    rightValue={
                        <Text>{schedule.province}</Text>
                    }
                >

                </PickerItem>
                <PickerItem
                    name={`Ngày bắt đầu`}
                    iconName={CommonIcons.googleMap}
                    iconSize={28}
                    iconColor={CommonColors.primary}
                    rightValue={
                        <PATDateTimePicker />
                    }

                />

                <PickerItem
                    name={`Số ngày`}
                    value={`Đà Nẵng, Việt Nam `}
                    iconName={CommonIcons.googleMap}
                    iconSize={28}
                    iconColor={CommonColors.primary}
                    onPress={()=>_showPicker('DAYNUMBER')}
                    rightValue={
                        <Text>{schedule.day_number}  ngày</Text>
                    }

                />

                {/* <PickerItem
                    name={`Sở thích du lịch`}
                    value={`Đà Nẵng, Việt Nam `}
                    iconName={CommonIcons.googleMap}
                    iconSize={28}
                    iconColor={CommonColors.primary}

                /> */}
                <PickerItem
                    name={`Loại tour`}
                    value={`Đà Nẵng, Việt Nam `}
                    iconName={CommonIcons.googleMap}
                    iconSize={28}
                    iconColor={CommonColors.primary}
                    onPress={()=>_showPicker('TOURTYPE')}
                    rightValue={
                        <Text>{schedule.tour_type}</Text>
                    }
                />

                <TouchableOpacity
                    style={{padding:12,backgroundColor:'coral',width:220,alignSelf:'center',borderRadius:12,marginVertical:42}}
                    onPress={_navigateToDetailSchedule}
                >
                    <Text>Tạo lịch trình</Text>
                </TouchableOpacity>

                <Portal>
                    <Dialog visible={visible} onDismiss={hideDialog} style={{ display: 'flex',  margin: 0, padding: 0, borderRadius: 26 }}>
                        <Dialog.ScrollArea
                            style={{ padding: 0, margin: 0, borderRadius: 22, width: '100%', backgroundColor: 'white' }}
                        >
                            {
                                pickerType &&
                                <RenderPickerType
                                    pickerType={pickerType}
                                    onSelected={_onSelected}
                                />
                            }

                        </Dialog.ScrollArea>
                    </Dialog>
                </Portal>


            </View>
        </TouchableWithoutFeedback>

    )
    
}

export default ScheduleScreen

const styles = StyleSheet.create({
    pickerItemContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12,
        backgroundColor: 'white',
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray'
    }
})
