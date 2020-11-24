import React, { useState,useEffect,useLayoutEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { IconButton } from 'react-native-paper'
import { useSelector } from 'react-redux'
import CardHorizontal from '../../components/Card/CardHorizontal'
import CommonColors from '../../constants/CommonColors'
import CommonIcons from '../../constants/CommonIcons'




const DetailDayScheduleScreen = (props) => {

    const [dayVisitLocations, setDayVisitLocations] = useState([]);

    const visitLocations = useSelector(state => state.schedules.visitLocationScheduleData);

    const _onAddLocation = async () => {
            // setDayVisitLocations([...dayVisitLocations,{
            //     id:randstr('ID'),
            //     title:randstr('Location-'),
            //     timeString:12,
            //     timeNumber:12,
            //     price:220000,
            //     action_time:'8:00-22:00'
            // }]);

            props.navigation.navigate('LocationSearch');
            
    }

    const _onRemoveLocation = async (location_id) => {
            let newDayVisitLocations = dayVisitLocations.filter(e => e.id != location_id);
            setDayVisitLocations(newDayVisitLocations);
    }


    useEffect(() => {
        setDayVisitLocations(visitLocations);
    },[visitLocations]);

    // useEffect(() => {
    //     let sortedDatVisitLocations = dayVisitLocations.sort(function (a, b) { return a.timeString - b.timeString });
    //     setDayVisitLocations(sortedDatVisitLocations);
    // }, [dayVisitLocations])


    const _onNavigateToRoutes = () => {
        props.navigation.navigate('MapDestinationRoutesList',{

        })
    }

    return (
        <ScrollView>
            <View style={styles.topInforWrap}>
                <View style={styles.groupItem}>
                    <IconButton
                        icon={CommonIcons.map}
                        color={CommonColors.primary}
                        size={32}
                        onPress={_onNavigateToRoutes}
                    />
                    <Text>Xem lộ trình</Text>
                </View>

                <View style={styles.groupItem}>
                    <IconButton
                        icon={CommonIcons.swapHorizontal}
                        color={CommonColors.primary}
                        size={32}
                        onPress={() => console.log('Pressed')}
                    />
                    <Text>Đổi vị trí</Text>
                </View>
            </View>
            <View>
                {
                    dayVisitLocations &&
                    dayVisitLocations.map((e, index) =>
                        <CardHorizontal
                            key={e.id}
                            {...props}
                            id={e.id}
                            time={e.timeNumber}
                            title={e.title}
                            item={e}
                            setDayVisitLocations={setDayVisitLocations}
                            dayVisitLocations={dayVisitLocations}
                            onRemove={_onRemoveLocation}
                        />
                    )
                }

                {/* Button Add */}
                <TouchableOpacity
                    style={styles.buttonAdd}
                    onPress={_onAddLocation}
                >
                    <Text style={{ fontSize: 18, fontWeight: '400', color: 'white' }}>Thêm địa điểm</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    )
}

export default DetailDayScheduleScreen

const styles = StyleSheet.create({
    topInforWrap: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
    groupItem: {
        alignItems: 'center',
        paddingHorizontal: 8,
        display: 'flex',
        flexDirection: 'column'
    },
    buttonAdd: {
        padding: 8,
        backgroundColor: CommonColors.primary,
        width: 220,
        alignSelf: 'center',
        marginBottom: 26,
        alignItems: 'center',
        borderRadius: 28,
        marginVertical:22
    }
})
