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
import RowItem from '../../components/Items/RowItem'


const SelfDrivingHomeScreen = (props) => {

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const _refBottomFilter = createRef('');
    const _refBottomSelectCarBrand = createRef('');
    const _refBottomSelectCarYear = createRef('');

    const carBrands = Array(50).fill({});
    const carYears = Array(10).fill({});

    const userLocation = props.route.params?.place;

    const [filterData, setFilterData] = useState({
        orderByDistance: 'nearToFar',
        orderByPrice: 'increase',
        priceForRentByDay: '',
        deliveryToDoor: false,
        carBrand: 'all',
        carYear: 'all',
        carSeats: 'all',
        transmission: 'all'


    });

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



    const _onSelectCarbrand = async (brand) => {
        console.warn(brand);
    }

    const _onSelectCarYear = async (year) => {
        console.warn(year);
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
                    <Text style={styles.textCaption}>Sắp xếp kết quả theo</Text>
                    <View style={styles.filterCheckboxWrap}>
                        <CheckBoxRow customStyle={styles.checkboxItem}
                            isChecked={distanceFilter}
                            onCheckToggle={(val) => setDistanceFilter(val)}
                            label={`Từ gần tới xa`}
                        />
                        <CheckBoxRow customStyle={styles.checkboxItem}
                            isChecked={distanceFilter}
                            onCheckToggle={(val) => setDistanceFilter(val)}
                            label={`Giá tăng dần`}
                        />
                    </View>
                    {/*  */}
                    <Text style={styles.textCaption}>Giá thuê theo ngày</Text>
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
                            label={`Đặt xe nhanh`}
                        />
                    </View>

                    {/* Select Car Brands */}
                    <TouchableOpacity style={styles.rowDropdown}
                        onPress={() => _refBottomSelectCarBrand.current.open()}
                    >
                        <Text>
                            Tất cả các hãng xe
                            </Text>
                        <MaterialCommunityIcons
                            name={CommonIcons.arrowDown}
                            size={18}
                            color={CommonColors.primary}
                        />
                    </TouchableOpacity>
                    {/* BottomSheet for Selecting Car Brand */}
                    <SimpleBottomSheet
                        _refSimpleBottomSheet={_refBottomSelectCarBrand}
                        height={deviceHeight}
                        draggableDown={false}
                        dragFromTopOnly={true}

                    >
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            padding: 12,
                            borderBottomWidth: 1,
                            borderBottomColor: CommonColors.secondary,
                            paddingVertical: 18
                        }}>
                            <TouchableOpacity
                                onPress={() => _refBottomSelectCarBrand.current.close()}
                            >
                                <MaterialCommunityIcons
                                    name={CommonIcons.arrowDown}
                                    color={CommonColors.secondary}
                                    size={32}
                                />
                            </TouchableOpacity>
                            <Text style={{ marginLeft: '30%', fontWeight: '700', fontSize: 18 }}>
                                Chọn hãng xe
                            </Text>
                        </View>
                        <ScrollView>
                            <RowItem
                                icon={false}
                                title={'Tất cả'}
                                rowStyle={{ padding: 12, borderTopWidth: 1, marginHorizontal: 22, borderTopColor: CommonColors.secondary }}
                                onItemPress={() => _onSelectCarbrand(index)}
                                titleColor={'grey'}
                            />
                            {
                                carBrands.map((e, index) =>
                                    <RowItem
                                        key={index.toString()}
                                        icon={false}
                                        title={'Honda'}
                                        rowStyle={{ padding: 12, borderTopWidth: 1, marginHorizontal: 22, borderTopColor: CommonColors.secondary }}
                                        onItemPress={() => _onSelectCarbrand(index)}
                                        titleColor={'grey'}
                                    />
                                )
                            }
                        </ScrollView>

                    </SimpleBottomSheet>
                    {/* End */}

                    {/* BottomSheet for Selecting Car Years */}
                    <TouchableOpacity style={styles.rowDropdown}
                        onPress={() => _refBottomSelectCarYear.current.open()}
                    >
                        <Text>
                            Tất cả đời xe
                        </Text>
                        <MaterialCommunityIcons
                            name={CommonIcons.arrowDown}
                            size={18}
                            color={CommonColors.primary}
                        />
                    </TouchableOpacity>
                    <SimpleBottomSheet
                        _refSimpleBottomSheet={_refBottomSelectCarYear}
                        height={deviceHeight}
                        draggableDown={false}
                        dragFromTopOnly={true}

                    >
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            padding: 12,
                            borderBottomWidth: 1,
                            borderBottomColor: CommonColors.secondary,
                            paddingVertical: 18
                        }}>
                            <TouchableOpacity
                                onPress={() => _refBottomSelectCarYear.current.close()}
                            >
                                <MaterialCommunityIcons
                                    name={CommonIcons.arrowToLeft}
                                    color={CommonColors.secondary}
                                    size={32}
                                />
                            </TouchableOpacity>
                            <Text style={{ marginLeft: '30%', fontWeight: '700', fontSize: 18 }}>
                                Chọn đời xe
                            </Text>
                        </View>
                        <ScrollView>
                            <RowItem
                                icon={false}
                                title={'Tất cả'}
                                rowStyle={{ padding: 12, borderTopWidth: 1, marginHorizontal: 22, borderTopColor: CommonColors.secondary }}
                                onItemPress={() => _onSelectCarbrand(index)}
                                titleColor={'grey'}
                            />
                            {
                                carYears.map((e, index) =>
                                    <RowItem
                                        key={index.toString()}
                                        icon={false}
                                        title={'19' + index + 1}
                                        rowStyle={{ padding: 12, borderTopWidth: 1, marginHorizontal: 22, borderTopColor: CommonColors.secondary }}
                                        onItemPress={() => _onSelectCarYear(index)}
                                        titleColor={'grey'}
                                    />
                                )
                            }
                        </ScrollView>

                    </SimpleBottomSheet>
                    {/* End */}

                    <View style={styles.filterCheckboxWrap}>
                        <CheckBoxRow customStyle={styles.checkboxItem}
                            isChecked={distanceFilter}
                            onCheckToggle={(val) => setDistanceFilter(val)}
                            label={`4 chỗ`}
                        />
                        <CheckBoxRow customStyle={styles.checkboxItem}
                            isChecked={distanceFilter}
                            onCheckToggle={(val) => setDistanceFilter(val)}
                            label={`7 chỗ`}
                        />
                    </View>
                    <View style={styles.filterCheckboxWrap}>
                        <CheckBoxRow customStyle={styles.checkboxItem}
                            isChecked={distanceFilter}
                            onCheckToggle={(val) => setDistanceFilter(val)}
                            label={`số sàn`}
                        />
                        <CheckBoxRow customStyle={styles.checkboxItem}
                            isChecked={distanceFilter}
                            onCheckToggle={(val) => setDistanceFilter(val)}
                            label={`số tự động`}
                        />
                    </View>

                    <View style={{ display: 'flex', flexDirection: "row", alignItems: 'center', justifyContent: 'space-around' }}>
                        <TouchableOpacity style={[styles.buttonSubmit, {}]}

                        >
                            <MaterialCommunityIcons
                                name={CommonIcons.arrowRefresh}
                                color={'white'}
                                size={28}
                            />
                            <Text style={{ textAlign: 'center', fontSize: 18, color: 'white' }}>Mặc định</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.buttonSubmit, {}]}

                        >
                            <Text style={{ textAlign: 'center', fontSize: 18, color: 'white' }}>Áp dụng</Text>
                            <MaterialCommunityIcons
                                name={CommonIcons.arrowRightDouble}
                                color={'white'}
                                size={28}
                            />
                        </TouchableOpacity>
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
        marginVertical: 18
    },
    checkboxItem: {
        marginHorizontal: 8
    },
    rowDropdown: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12,
        margin: 12,
        borderWidth: 0.4
    },
    buttonSubmit: {
        backgroundColor: CommonColors.primary,
        borderRadius: 12,
        marginVertical: 18,
        padding: 12,
        paddingHorizontal: 24,
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center'
    },
    textCaption: {
        color: 'grey',
        fontSize: 16
    }
})
