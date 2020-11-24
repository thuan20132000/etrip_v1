import React, { useRef, useState } from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { IconButton } from 'react-native-paper'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import CommonColors from '../../constants/CommonColors'
import CommonIcons from '../../constants/CommonIcons'
import RBSheet from "react-native-raw-bottom-sheet";
import PATDateTimePicker from '../Picker/PATDateTimePicker'



const CardHorizontal = ({
    id='',
    time = '',
    title = '',
    price = '',
    action_time = '8:00 - 22:00',
    onRemove,
    dayVisitLocations,
    setDayVisitLocations,
    item

}) => {
    const refTimePicker = useRef();

    const [cardInfo, setCardInfo] = useState({
        time: '',
        title: '',
        price: '',
        action_time: ''
    });

    const _openTimePicker = async () => {
        refTimePicker.current.open();
    }

    const _onSelectedTime = async (time) => {
        let timeConverted = new Date(time);
        let timeNumber = `${timeConverted.getHours()} : ${timeConverted.getMinutes()}`;

        let newDayVisitLocations =  dayVisitLocations.filter(e => {
            if(e.id == id){
                e.timeString = timeConverted.getTime();
                e.timeNumber = timeNumber;
            }
            return dayVisitLocations;
        });
        setDayVisitLocations(newDayVisitLocations);
        // console.warn(newDayVisitLocations);

    }



    return (
        <View style={styles.container}>
            <View>

            </View>
            <TouchableOpacity style={{ width: 160, height: 100 }}
                onPress={_openTimePicker}
            >
                <ImageBackground style={{ width: '100%', height: '100%' }}
                    source={{
                        uri: item.image || 'https://danatravel.vn/data/tour/900/ba-na-1560224326.jpg'
                    }}
                >
                    <Text style={styles.overLayText}>{time}</Text>
                </ImageBackground>
            </TouchableOpacity>


            <View style={styles.cardBody}>
                <Text style={styles.text}>{item.name}</Text>
                <Text> 0VND</Text>

                <View style={styles.row}>
                    <View style={styles.groupItem}>
                        <MaterialCommunityIcons
                            name={CommonIcons.clock}
                            size={18}
                            color={CommonColors.primary}
                        />
                        <Text style={styles.time}>08:00 - 18:00</Text>
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.groupItem}>
                        <MaterialCommunityIcons
                            name={CommonIcons.information}
                            size={18}
                            color={CommonColors.primary}
                        />
                        <Text style={styles.time}>Thông tin</Text>
                    </View>
                    <View style={styles.groupItem}>
                        <MaterialCommunityIcons
                            name={CommonIcons.map}
                            size={18}
                            color={CommonColors.primary}
                        />
                        <Text style={styles.time}>Chỉ đường</Text>
                    </View>
                </View>

            </View>
            <IconButton style={{ marginHorizontal: 12 }}
                icon={CommonIcons.deleteSweep}
                color={CommonColors.primary}
                size={24}
                onPress={() =>onRemove(id)}
            />


            {/* picker time */}
            <RBSheet
                ref={refTimePicker}
                closeOnDragDown={true}
                closeOnPressMask={false}
                customStyles={{
                    wrapper: {
                        backgroundColor: "transparent"
                    },
                    draggableIcon: {
                        backgroundColor: "#000"
                    }
                }}
            >
                <PATDateTimePicker
                    mode={'time'}
                    display={'spinner'}
                    onSelected={_onSelectedTime}
                />
            </RBSheet>

        </View>
    )
}

export default CardHorizontal

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 6,
        borderBottomWidth: 0.2,
        borderBottomColor: 'grey'
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'space-around'
    },
    groupItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 6
    },
    cardBody: {
        paddingLeft: 8,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'flex-start',

    },
    text: {
        fontSize: 16,
        marginHorizontal: 2
    },
    time: {
        fontSize: 12,
        marginHorizontal: 4
    },
    overLayText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000a0"

    }
})
