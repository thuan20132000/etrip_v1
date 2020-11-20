import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { Caption, Title } from 'react-native-paper'
import CommonIcons from '../../constants/CommonIcons'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import CommonColors from '../../constants/CommonColors'
import {createVisitLocation} from '../../utils/scheduleApi';

import * as scheduleActions from '../../store/actions/ScheduleActions';
import { useDispatch } from 'react-redux'

const RowInformation = ({ children }) => (
    <View style={{ display: "flex", flexDirection: 'row', alignItems: 'center' }}>
        {children}
    </View>
)

const CardDetail = ({navigation}) => {

    const dispatch = useDispatch();

    const _onAddVisitLocation = async () => {
        let visitLcoation = await createVisitLocation('banaHill',3200,'12:00','https://banahill.net/wp-content/uploads/2018/03/ba-na-hill.png',1,234235);

        dispatch(scheduleActions.addVisitLocation(
            visitLcoation.data.id,
            visitLcoation.data.name,
            visitLcoation.data.name,
            visitLcoation.data.active_time,
            visitLcoation.data.image,
            visitLcoation.data.contact,
            visitLcoation.data.daily_schedule_id
        ));
        
        navigation.popToTop();

    }

    return (
        <ScrollView style={styles.container}>
            <Image
                style={styles.imageBackgorund}
                source={{
                    uri: 'https://banahill.net/wp-content/uploads/2018/03/ba-na-hill.png',
                }}
            />
            <Title style={{ color: 'black' }}>
                Bana Hill
            </Title>
            <TouchableOpacity style={{backgroundColor:CommonColors.primary,width:160,padding:6,borderRadius:22,justifyContent:'center',alignItems:'center',alignSelf:'center'}}
                onPress={_onAddVisitLocation}
            >
                <Text style={{fontSize:18,color:'white'}}>Thêm Vị trí</Text>
            </TouchableOpacity>
            <RowInformation>
                <MaterialCommunityIcons style={styles.iconItem}
                    name={CommonIcons.googleMap}
                    size={24}
                    color={CommonColors.primary}
                />
                <Text style={{ color: 'black' }}>76 Nguyen Thai Binh, Hoa Minh, Lien Chieu , Da nang</Text>
            </RowInformation>

            <RowInformation>
                <MaterialCommunityIcons style={styles.iconItem}
                    name={CommonIcons.phone}
                    size={24}
                    color={CommonColors.primary}

                />
                <Text style={{ color: 'black' }}>0976904548</Text>
            </RowInformation>

            <RowInformation>
                <MaterialCommunityIcons style={styles.iconItem}
                    name={CommonIcons.priceTag}
                    size={24}
                    color={CommonColors.primary}

                />
                <Text style={{ color: 'black' }}>0</Text>
            </RowInformation>
            <RowInformation>
                <MaterialCommunityIcons style={styles.iconItem}
                    name={CommonIcons.clock}
                    size={24}
                    color={CommonColors.primary}

                />
                <Text style={{ color: 'black' }}>8:00 - 22:00</Text>
            </RowInformation>

            <Text style={styles.textDescription}>
                Đến với Sun World Ba Na Hills, du khách sẽ được trải nghiệm khí hậu bốn mùa trong một ngày, chu du trên những tuyến cáp treo, đắm chìm trong cảnh quan thiên nhiên của những cánh rừng nguyên sinh nối tiếp ở Bà Nà Núi Chúa, thưởng thức ẩm thực đa dạng và tận hưởng không khí lễ hội ngập tràn.
            </Text>
            
        </ScrollView>
    )
}

export default CardDetail

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column'
    },
    locationWrap: {
        display: 'flex',
        flexDirection: 'row',
    },
    imageBackgorund: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height / 4
    },
    iconItem: {
        marginHorizontal: 12,
        marginVertical: 4
    },
    textDescription:{
        padding:12
    },

})
