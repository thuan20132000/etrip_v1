import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { IconButton } from 'react-native-paper'
import CommonColors from '../../constants/CommonColors'
import CommonIcons from '../../constants/CommonIcons'

const DetailDayScheduleScreen = () => {
    return (
        <ScrollView>
            <View style={styles.topInforWrap}>
                <View style={styles.groupItem}>
                    <IconButton
                        icon={CommonIcons.map}
                        color={CommonColors.primary}
                        size={32}
                        onPress={() => console.log('Pressed')}
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
            <Text></Text>
        </ScrollView>
    )
}

export default DetailDayScheduleScreen

const styles = StyleSheet.create({
    topInforWrap:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
    groupItem: {
        alignItems: 'center',
        paddingHorizontal:8,
        display:'flex',
        flexDirection:'column'  
    },
})
