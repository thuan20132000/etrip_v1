import React, { useEffect } from 'react'
import { Image, StyleSheet, View, Text, Dimensions } from 'react-native'
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { Badge,IconButton } from 'react-native-paper'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import CommonColors from '../../constants/CommonColors'
import CommonIcons from '../../constants/CommonIcons'

const RowIcon = ({ icon, name }) => {
    return (
        <View style={styles.row}>
            <MaterialCommunityIcons
                name={icon}
                size={18}
                color={CommonColors.primary}
            />
            <Text style={{ marginHorizontal: 6 }}>{name}</Text>
        </View>
    )
}

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;


const DestinationCard = () => {


    return (
        <View style={[styles.cardContainer]}>



            <TouchableWithoutFeedback style={{ height: 100, borderRadius: 6, overflow: 'hidden', margin: 6, zIndex: -1 }}

                onPress={()=>console.warn('ds')}
            
            >
                <Image
                    style={{ width: deviceWidth / 3, height: '100%', zIndex: -1 }}
                    source={{
                        uri: 'https://www.taidanang.com/wp-content/uploads/2018/12/cam-nang-kinh-nghiem-du-lich-bien-my-khe-da-nang-1.jpg',
                    }}
                />





            </TouchableWithoutFeedback>

            <View style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'space-around' }}>
                <Text style={styles.textTitle}>Cozy HomeStay - TimesCity</Text>
                <RowIcon
                    icon={CommonIcons.googleMap}
                    name={`458 Nguyễn Thị Minh Khai`}
                />
                <RowIcon
                    icon={CommonIcons.map}
                    name={`860,314m`}
                />
                <RowIcon
                    icon={CommonIcons.map}
                    name={`Chỉ đường`}
                />



            </View>
            <IconButton style={{position:'absolute',left:100}}

                icon={CommonIcons.heartMutipleOutline}
                color={'red'}
                size={20}
                onPress={() => console.warn('Pressed')}
            />
        </View>
    )
}

export default DestinationCard

const styles = StyleSheet.create({
    cardContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'

    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        paddingHorizontal: 8
    },
    textTitle: {
        paddingHorizontal: 8,
        fontSize: 16,
        fontWeight: '600'
    }
})
