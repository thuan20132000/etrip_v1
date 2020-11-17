import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import CommonColors from '../../constants/CommonColors'
import CommonIcons from '../../constants/CommonIcons'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { IconButton } from 'react-native-paper'

const GalleryCard = (props) => {

    const {
        item,
        onRemove,
        navigation
    } = props;
    
    return (
        <View style={styles.suggestionScheduleContainer} key={item.id}>
              <IconButton style={{position:'absolute',zIndex:999,right:-16,top:-16,backgroundColor:CommonColors.primary,width:30,height:30}}
                    icon={CommonIcons.close}
                    color={'white'}
                    size={26}
                    onPress={() => onRemove(item.id)}
                />

            <TouchableOpacity style={styles.daySchedule}
                onPress={()=>navigation.navigate('DetailDaySchedule')}
            >
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16 }}>
                    <Text>{item.name}</Text>
                    <View style={props.styles} >
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
                <View style={styles.dayScheduleImagesWrap}>
                    <Image
                        style={styles.tinyLogo}
                        source={{
                            uri: 'https://kenh14cdn.com/thumb_w/640/2020/7/12/1-15945306107271103537154-crop-15945306667781556089482.jpg',
                        }}
                    />
                    <Image
                        style={styles.tinyLogo}
                        source={{
                            uri: 'https://kenh14cdn.com/thumb_w/640/2020/7/12/1-15945306107271103537154-crop-15945306667781556089482.jpg',
                        }}
                    />
                    <Image
                        style={styles.tinyLogo}
                        source={{
                            uri: 'https://kenh14cdn.com/thumb_w/640/2020/7/12/1-15945306107271103537154-crop-15945306667781556089482.jpg',
                        }}
                    />
                    <Image
                        style={styles.tinyLogo}
                        source={{
                            uri: 'https://kenh14cdn.com/thumb_w/640/2020/7/12/1-15945306107271103537154-crop-15945306667781556089482.jpg',
                        }}
                    />




                </View>
            </TouchableOpacity>
        </View>
    )
}

export default GalleryCard

const styles = StyleSheet.create({
    suggestionScheduleContainer: {
        margin: 16,
        zIndex:-1
    },
    daySchedule: {
        backgroundColor: CommonColors.primary,
        borderRadius: 22,
        paddingTop: 22,
        paddingBottom: 12,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,


    },
    tinyLogo: {
        width: 120,
        height: 110,
        margin: 1

    },
    dayScheduleImagesWrap: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        paddingHorizontal: 6
    }
})
