import React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CommonColors from '../../constants/CommonColors';
import CommonIcons from '../../constants/CommonIcons';

const ScheduleCard = ({ _onPress, item, index }) => (
    <TouchableOpacity style={styles.cardContainer}
        onPress={() => _onPress()}
    >

        <Image
            style={{ width: 160, height: 100, borderRadius: 22 }}
            source={{
                uri: "https://banahill.net/wp-content/uploads/2018/03/ba-na-hill.png"
            }}
        />
        <View style={styles.cardBody}>
            <Text>Lich trinh cua toi</Text>
            <View style={styles.rowItem}>
                <MaterialCommunityIcons
                    name={CommonIcons.calendar}
                    size={26}
                    color={CommonColors.primary}
                />
                <Text>Ngày tạo: 20/11/2020</Text>
            </View>
            <View style={styles.rowItem}>
                <MaterialCommunityIcons
                    name={CommonIcons.calendar}
                    size={26}
                    color={CommonColors.primary}
                />
                <Text>Ngày tạo: 20/11/2020</Text>
            </View>
            <View>

            </View>
        </View>
    </TouchableOpacity>
)

const MySchedulesSreen = (props) => {

    const _onNavigateToDetail = (item) => {
        console.warn(item);
        props.navigation.navigate('DetailSchedule', { schedule_id: 1 });
    }

    const scheduleData = Array(3).fill({});



    React.useLayoutEffect(() => {
        props.navigation.setOptions({
            headerRight: () => (
                <Button 
                    onPress={() => props.navigation.navigate('Schedule')} 
                    title="Tạo lịch trình" 
                />
            ),
        });
    }, [props.navigation]);
    return (
        <ScrollView>
            {
                scheduleData.map((e, index) =>
                    <ScheduleCard
                        key={index.toString()}
                        _onPress={_onNavigateToDetail}
                    />
                )
            }

        </ScrollView>
    )
}

export default MySchedulesSreen

const styles = StyleSheet.create({
    cardContainer: {
        display: "flex",
        flexDirection: 'row',
        margin: 4
    },
    cardBody: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        paddingLeft: 12
    },
    rowItem: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }
})
