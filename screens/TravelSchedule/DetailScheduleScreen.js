import React, { useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import GalleryCard from '../../components/Card/GalleryCard'
import CommonColors from '../../constants/CommonColors'
import CommonIcons from '../../constants/CommonIcons'



function randstr(prefix)
{
    return Math.random().toString(36).replace('0.',prefix || '');
}

const DetailScheduleScreen = (props) => {


    const {
        navigation
    } = props;

    const [daySchedules, setDaySchedules] = useState([]);

    let daySchedule  ={
        id:randstr('ID'),
        name:randstr('name ')
    }

    const _addDaySchedule = async () => {
        setDaySchedules([...daySchedules,daySchedule])
    }

    const _removeDaySchedule = async (id) => {
        let newDaySchdules = daySchedules.filter(e => e.id != id);
        setDaySchedules(newDaySchdules);
    }


    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            {/* Top Bar */}
            <View style={styles.inforBar}>
                <Text style={styles.textTitle}>Lịch trình của tôi</Text>
                <View style={styles.topInfoWrap}>
                    <View style={styles.groupItem} >
                        <MaterialCommunityIcons
                            name={CommonIcons.calendar}
                            size={24}
                            color={CommonColors.primary}

                        />
                        <Text>
                            1 ngày
                        </Text>
                    </View>
                    <View style={styles.groupItem} >
                        <MaterialCommunityIcons
                            name={CommonIcons.googleMap}
                            size={24}
                            color={CommonColors.primary}


                        />
                        <Text>
                            5 Địa điểm
                        </Text>
                    </View>
                    <View style={styles.groupItem} >
                        <MaterialCommunityIcons
                            name={CommonIcons.calendar}
                            size={24}
                            color={CommonColors.primary}


                        />
                        <Text>
                            Từ ngày 20/11/2020
                        </Text>
                    </View>
                </View>
            </View>

            {/* Suggestion Schedules */}
            <Text style={styles.textTitle}>Lịch trình đề xuất</Text>
            {
                daySchedules.map((e, index) =>
                    <GalleryCard
                        item={e}
                        onRemove = {_removeDaySchedule}
                        styles={styles.groupItem}
                        navigation={navigation}
                    />
                )
            }
         


            {/* Button Add */}
            <TouchableOpacity
                style={styles.buttonAdd}
                onPress={_addDaySchedule}
            >
                <Text style={{ fontSize: 18, fontWeight: '400', color: 'white' }}>Thêm lịch trình</Text>
            </TouchableOpacity>


        </ScrollView>
    )
}

export default DetailScheduleScreen

const styles = StyleSheet.create({
    inforBar: {
        backgroundColor: 'white',
        paddingHorizontal: 12,
        paddingVertical: 6
    },
    topInfoWrap: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    groupItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    textTitle: {
        fontSize: 18,
        marginVertical: 12,
        paddingHorizontal: 16
    },
    buttonAdd: {
        padding: 12,
        backgroundColor: CommonColors.primary,
        width: 220,
        alignSelf: 'center',
        marginBottom: 26,
        alignItems: 'center',
        borderRadius: 28
    }



})
