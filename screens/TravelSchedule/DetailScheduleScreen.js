import React, { useState,useEffect } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import GalleryCard from '../../components/Card/GalleryCard'
import CommonColors from '../../constants/CommonColors'
import CommonIcons from '../../constants/CommonIcons'

import {useSelector} from 'react-redux'

import {getDateMonthFormat} from '../../utils/helper';
import {createDailySchedule} from '../../utils/scheduleApi';

import {favoriteDestinations} from '../../sampleData';

const DetailScheduleScreen = (props) => {

    const schedules = useSelector(state => state.schedules.schedulesData);

    const {
        navigation,
        route
    } = props;

    const [daySchedules, setDaySchedules] = useState([]);
    const [currentSchedule,setCurrentSchedule] = useState();

   

    const _addDaySchedule = async () => {

        let dailySchedule = await createDailySchedule('ngay 1',[],route.params.schedule_id);
        if(dailySchedule.data){
            setDaySchedules([...daySchedules,dailySchedule.data]);

        }


    }

    const _removeDaySchedule = async (id) => {
        let newDaySchdules = daySchedules.filter(e => e.id != id);
        setDaySchedules(newDaySchdules);
    }


    useEffect(() => {
        // let currentSched_id = route.params.schedule_id;
        // let sched = schedules.find(e => e.id == currentSched_id);
        // setCurrentSchedule(sched);
        // setDaySchedules(favoriteDestinations);

    }, [])

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
                            {currentSchedule && currentSchedule.days_number} ngày
                        </Text>
                    </View>
                    <View style={styles.groupItem} >
                        <MaterialCommunityIcons
                            name={CommonIcons.googleMap}
                            size={24}
                            color={CommonColors.primary}


                        />
                        <Text>
                            {currentSchedule && currentSchedule.location}
                        </Text>
                    </View>
                    <View style={styles.groupItem} >
                        <MaterialCommunityIcons
                            name={CommonIcons.calendar}
                            size={24}
                            color={CommonColors.primary}


                        />
                        <Text>
                            Từ ngày {currentSchedule && getDateMonthFormat(currentSchedule.start_at)}
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
