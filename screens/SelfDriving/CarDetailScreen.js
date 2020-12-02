import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import NewsCarousel from '../../components/SlideCarousel/NewsCarousel'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import CommonIcons from '../../constants/CommonIcons'
import CommonColors from '../../constants/CommonColors'
import RowItem from '../../components/Items/RowItem'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'




const CarDetailScreen = (props) => {


    const _onOpenFiterCar = async () => {
        props.navigation.navigate('FilterCar');
    }


    const _navigateToCarPriceDetail = async () => {
        props.navigation.navigate('CarPriceDetail');
    }



    React.useLayoutEffect(() => {
        props.navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity>
                    <Text>fdsfsd</Text>
                </TouchableOpacity>
            )
        });



    }, []);

    return (
        <>
            <ScrollView>
                <NewsCarousel />
                <View
                    style={{ padding: 12 }}
                >
                    <Text>2018 Mitsubishi Xpander</Text>
                    <Text>700.000 vnd/ngay</Text>
                    <View style={styles.row}>
                        <MaterialCommunityIcons
                            name={CommonIcons.starOutline}
                            size={24}
                            color={CommonColors.primary}
                        />
                        <MaterialCommunityIcons
                            name={CommonIcons.starOutline}
                            size={24}
                            color={CommonColors.primary}
                        />
                        <MaterialCommunityIcons
                            name={CommonIcons.starOutline}
                            size={24}
                            color={CommonColors.primary}
                        />
                    </View>

                    {/* Host's Car */}
                    <View style={styles.topBaner}>
                        <View style={styles.row}>
                            <Text>Nguyễn Đắc Hoà</Text>


                        </View>
                        <View style={[styles.talkBubble, { position: 'relative', bottom: 10 }]}>
                            <View style={styles.talkBubbleTriangle} />
                            <View style={styles.talkBubbleSquare}>
                                <Text style={{
                                    color: 'grey'
                                }}>
                                    Xe đẹp, đầy đủ đồ chơi, màn hình 10inch, giải trí thoả thích.
                            </Text>
                            </View>
                        </View>

                        {/* Car's Information*/}
                        <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                            <RowItem

                                title={"2018"}
                                iconColor={'grey'}
                                titleColor={'grey'}
                                rowStyle={{
                                    display: 'flex',
                                    flexDirection: 'row'
                                }}
                                icon={CommonIcons.arrowRefresh}
                            />
                            <RowItem

                                title={"2018"}
                                iconColor={'grey'}
                                titleColor={'grey'}
                                rowStyle={{
                                    display: 'flex',
                                    flexDirection: 'row'
                                }}
                                icon={CommonIcons.arrowRefresh}
                            />
                            <RowItem

                                title={"2018"}
                                iconColor={'grey'}
                                titleColor={'grey'}
                                rowStyle={{
                                    display: 'flex',
                                    flexDirection: 'row'
                                }}
                                icon={CommonIcons.arrowRefresh}
                            />

                        </View>

                        {/* Policy  */}
                        <Text style={styles.sectionTitle}>Xuất trình khi nhận xe</Text>
                        <View>
                            <RowItem
                                title={'CMND/CCCD'}
                                icon={CommonIcons.tickSquare}
                                iconColor={CommonColors.secondary}

                            />
                            <RowItem
                                title={'Hộ khẩu/ KT3'}
                                icon={CommonIcons.tickSquare}
                                iconColor={CommonColors.secondary}
                            />
                            <RowItem
                                title={'Bằng lái xe B1,B2'}
                                icon={CommonIcons.tickSquare}
                                iconColor={CommonColors.secondary}
                            />
                        </View>

                        <Text style={styles.sectionTitle}>Thế chấp khi nhận xe</Text>
                        <View>
                            <RowItem
                                title={'Tiền mặt 15 triệu'}
                                icon={CommonIcons.tickSquare}
                                iconColor={CommonColors.secondary}
                            />
                        </View>
                        <Text style={styles.sectionTitle}>Giới hạn quảng đường</Text>
                        <View>
                            <RowItem
                                title={'250km/ngay, phi vuot 2000 vnd/km'}
                                icon={CommonIcons.googleMap}

                            />
                        </View>
                        <Text style={styles.sectionTitle}>Giao xe tận nơi</Text>
                        <View>
                            <RowItem
                                title={'Trong bán kính 10km,'}
                                icon={CommonIcons.googleMap}

                            />
                        </View>

                    </View>

                </View>


            </ScrollView>
            <TouchableOpacity style={{ 
                    position: 'relative',
                    bottom:0,
                    padding:12,
                    backgroundColor:CommonColors.primary,
                    width:'100%',
                    zIndex:999
                    
                }}
                onPress={_navigateToCarPriceDetail}
            >
                <Text style={{
                    textAlign:'center',
                    fontSize:18,
                    color:'white'
                }}>
                    Xem chi tiết giá thuê
                </Text>
            </TouchableOpacity>
        </>
    )
}

export default CarDetailScreen

const styles = StyleSheet.create({
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    talkBubble: {
        backgroundColor: 'transparent',

    },
    talkBubbleSquare: {
        minHeight: 40,
        backgroundColor: CommonColors.secondary,
        borderRadius: 10,
        padding: 8
    },
    talkBubbleTriangle: {
        width: 0,
        height: 1,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRadius: 20,
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderBottomWidth: 30,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: CommonColors.secondary,
        left: 10,
        top: 10,
        zIndex: -1,

    },
    sectionTitle: {
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: '500',
        color: 'grey',
        marginVertical: 6
    }


})
