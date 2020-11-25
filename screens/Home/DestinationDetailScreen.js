import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { Divider } from 'react-native-paper'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import CardHorizontal from '../../components/Card/CardHorizontal'
import DestinationCard from '../../components/Card/DestinationCard'
import CommonColors from '../../constants/CommonColors'
import CommonIcons from '../../constants/CommonIcons'




const RowItem = ({ icon, iconColor, size, title }) => {
    return (
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 12,
            marginVertical: 6,
        }}>
            <MaterialCommunityIcons
                name={icon || CommonIcons.car}
                size={24}
                color={iconColor ||CommonColors.primary}
            />
            <Text style={{
                fontSize: 10,
                color: 'white',
                marginHorizontal: 12
            }}>
                {title}
            </Text>
        </View>
    )
}


const DestinationDetailScreen = (props) => {

    const {item} = props.route.params;

    const _onNavigateToDirection = async () => {
        props.navigation.navigate('DestinationMap',{coords:item.coords});
    }

    return (
        <ScrollView>
            <ImageBackground style={{ width: '100%', height: 220 }}
                source={{
                    uri: 'https://nemtv.vn/wp-content/uploads/2019/03/cau-rong-da-nang-nemtv-16.jpg'
                }}
            >
                <View style={styles.destinationInfo}>
                    <RowItem
                        icon={CommonIcons.googleMap}
                        title={`10 Bach Dang, Hai Chau, Da Nang`}
                        iconColor={`white`}
                    />
                    <RowItem
                        icon={CommonIcons.phone}
                        title={`0997865545`}
                        iconColor={'white'}
                    />
                    <RowItem
                        icon={CommonIcons.compass}
                        title={`6:00-22:00`}
                        iconColor={'white'}
                    />
                    <RowItem
                        icon={CommonIcons.searchLabel}
                        title={`Free`}
                        iconColor={'white'}
                    />

                </View>
            </ImageBackground>

            {/*   */}
            <View>
                <TouchableOpacity style={{backgroundColor:CommonColors.secondary,padding:12}}
                    onPress={_onNavigateToDirection}
                >
                    <Text style={{textAlign:'center',fontSize:18}}>Chỉ đường</Text>
                </TouchableOpacity>
            </View>
            {/* Description */}

            <Text style={styles.descriptionText}>
                Đà Nẵng được mệnh danh là thành phố của những cây cầu, sở dĩ vì cứ đi vài cây số người ta lại được nhìn thấy một cây cầu ở thành phố này, mà đó không phải là những cây cầu đơn thuần mà chúng có những nét riêng biệt và sự độc đáo khác lạ chưa từng có ở bất cứ nơi đâu ở Việt Nam. Cầu Rồng phun lửa – phun nước là cây cầu nổi tiếng nhất Đà Nẵng bởi hình dáng độc nhất vô nhị của cây cầu và những điều thú vị gắn liền với cây cầu đó.
            </Text>
            <Divider/>
            {/* Nearby Destination */}
            <Text>Đia điểm lân cận</Text>

            <ScrollView style={{marginVertical:60}}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >

              <DestinationCard
                item={item}
                navigation={props.navigation}
              />
              <DestinationCard
                item={item}
                navigation={props.navigation}
              />
              <DestinationCard
                item={item}
                navigation={props.navigation}
              />
              <DestinationCard
                item={item}
                navigation={props.navigation}
              />

            </ScrollView>
        </ScrollView>
    )
}

export default DestinationDetailScreen

const styles = StyleSheet.create({
    destinationInfo: {
        backgroundColor: 'rgba(0,0,0,0.3)',
        width: '50%',
        marginTop: 42,
        marginHorizontal:22,
        borderRadius: 22
    },
    descriptionText:{
        padding:12,
        fontSize:16,
        fontWeight:'300',
        fontStyle:'italic'
    }
})
