import React, { useState, useEffect, createRef } from 'react'
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import SearchBar from '../../components/Search/SearchBar'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import CommonIcons from '../../constants/CommonIcons'
import CommonColors from '../../constants/CommonColors'
import { Modal, Portal, Button, Provider, IconButton } from 'react-native-paper';
import PATDateTimePicker from '../../components/Picker/PATDateTimePicker'
import CardHorizontal from '../../components/Card/CardHorizontal'
import SimpleCard from '../../components/Items/SimpleCard'
import GalleryCard from '../../components/Card/GalleryCard'
import CardVerticle from '../../components/Card/CardVerticle'
import { CarForRents } from '../../sampleData';
import SimpleBottomSheet from '../../components/BottomSheet/SimpleBottomSheet'
import CheckBoxRow from '../../components/Checkbox/CheckBoxRow'
import Slider from '@react-native-community/slider';


const SelfDrivingHomeScreen = (props) => {

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const _refBottomFilter = createRef();

    const userLocation = props.route.params?.place;


    const _navigateToCarDetail = () => {
        props.navigation.navigate('CarDetail');
    }


    React.useLayoutEffect(() => {
        props.navigation.setOptions({
            headerShown: false,

        });
        props.navigation.dangerouslyGetParent().setOptions({
            headerRight: () => (
                <IconButton
                    icon={CommonIcons.filter}
                    color={CommonColors.primary}
                    size={30}
                    onPress={() => _refBottomFilter.current.open()}
                />

            )
        })
        props.navigation.dangerouslyGetParent().dangerouslyGetParent().setOptions({
            tabBarVisible: false,

        });

        return () => {
            props.navigation.dangerouslyGetParent().dangerouslyGetParent().setOptions({
                tabBarVisible: true
            });
        }


    }, [props.navigation]);


    const [distanceFilter, setDistanceFilter] = useState(false);

    // useEffect(() => {
    //     console.warn('distance: ', distanceFilter);
    // }, [distanceFilter]);

    const [priceFilter, setPriceFilter] = useState('');
    const _onFilterDayPriceChange = (price) => {

        let x = Math.floor(price * 10);
        //console.warn(price*10);
        let priceGet = Math.floor(price);
        let finalPrice = priceGet * 100000;
        setPriceFilter(finalPrice);
    }

    return (
        <View>
            {/* <SearchBar /> */}


            <TouchableOpacity style={styles.searchContainer}
                onPress={() => props.navigation.navigate('PlaceSearchScreen')}
            >

                <MaterialCommunityIcons style={{ flex: 1, textAlign: 'center' }}
                    name={CommonIcons.googleMap}
                    size={26}
                    color={CommonColors.primary}
                />
                <View
                    style={{
                        height: 40,
                        flex: 8,
                        borderColor: 'gray',
                        alignContent: 'center',
                        justifyContent: 'center'
                    }}

                >
                    {
                        userLocation ?
                            <Text style={{ color: CommonColors.primary }}>
                                {userLocation}
                            </Text> :
                            <Text style={{ color: CommonColors.secondary }}>
                                Nhập địa chỉ nhận xe hoặc vị trí của bạn
                            </Text>
                    }

                </View>

            </TouchableOpacity>

            <View style={styles.row}>
                <View style={styles.timePickerBlock}

                >
                    <Text style={{
                        padding: 6,
                        fontSize: 16
                    }} >Nhận Xe</Text>
                    <PATDateTimePicker
                        onSelected={setStartDate}
                        mode={'datetime'}
                    />
                </View>

                <View style={styles.timePickerBlock}

                >
                    <Text style={{
                        padding: 6,
                        fontSize: 16
                    }} >Trả Xe</Text>
                    <PATDateTimePicker
                        onSelected={setStartDate}
                        mode={'datetime'}
                    />
                </View>

            </View>

            <ScrollView style={{
                paddingBottom: 222
            }}
                contentInset={{
                    bottom: 150
                }}
            >
                {
                    CarForRents.map((e, index) =>
                        <CardVerticle
                            key={index.toString()}
                            item={e}
                            onItemPress={_navigateToCarDetail}
                        />
                    )
                }

            </ScrollView>

            {/* Bottom Sheet */}
            <SimpleBottomSheet
                _refSimpleBottomSheet={_refBottomFilter}
                height={deviceHeight}
                draggableDown={false}


            >
                <ScrollView style={styles.filterContainer}

                >
                    <View style={[styles.row, { justifyContent: 'space-between', padding: 12 }]}>
                        <IconButton
                            icon={CommonIcons.close}
                            color={CommonColors.primary}
                            size={30}
                            onPress={() => _refBottomFilter.current.close()}
                        />
                        <Text
                            style={{ fontSize: 18 }}
                        >
                            Lọc kết quả
                       </Text>
                    </View>
                    {/*  */}
                    <Text style={{ fontSize: 18 }}>Sắp xếp kết quả theo</Text>
                    <View style={styles.filterCheckboxWrap}>
                        <CheckBoxRow customStyle={styles.checkboxItem}
                            isChecked={distanceFilter}
                            onCheckToggle={(val) => setDistanceFilter(val)}
                            label={`Từ gần tới xa`}
                        />
                        <CheckBoxRow customStyle={styles.checkboxItem}
                            isChecked={distanceFilter}
                            onCheckToggle={(val) => setDistanceFilter(val)}
                            label={`Từ gần tới xa`}
                        />
                    </View>
                    {/*  */}
                    <Text style={{ fontSize: 18 }}>Giá thuê theo ngày</Text>
                    <Slider
                        style={{ width: 300, height: 40 }}
                        minimumValue={0}
                        maximumValue={100}
                        minimumTrackTintColor="red"
                        maximumTrackTintColor="green"
                        onValueChange={(val) => _onFilterDayPriceChange(val)}
                    />
                    <View>
                        <Text>{priceFilter || 0} VND/ngày</Text>
                    </View>

                    {/*  */}

                    <View style={styles.filterCheckboxWrap}>
                        <CheckBoxRow customStyle={styles.checkboxItem}
                            isChecked={distanceFilter}
                            onCheckToggle={(val) => setDistanceFilter(val)}
                            label={`Giao xe tận nơi`}
                        />
                        <CheckBoxRow customStyle={styles.checkboxItem}
                            isChecked={distanceFilter}
                            onCheckToggle={(val) => setDistanceFilter(val)}
                            label={`Từ gần tới xa`}
                        />
                    </View>



                </ScrollView>
            </SimpleBottomSheet>


        </View>
    )
}

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

export default SelfDrivingHomeScreen

const styles = StyleSheet.create({
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    timePickerBlock: {
        backgroundColor: 'white',
        margin: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '48%',
        padding: 14,
        borderRadius: 16,
        paddingLeft: 22,
    },
    searchContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        margin: 6,
        alignContent: 'center'
    },
    filterContainer: {
        padding: 12
    },
    filterCheckboxWrap: {
        display: 'flex',
        flexDirection: 'row',
    },
    checkboxItem: {
        marginHorizontal: 8
    }
})
