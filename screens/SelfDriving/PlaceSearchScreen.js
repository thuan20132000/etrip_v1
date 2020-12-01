import React, { useRef, useState, useEffect } from 'react'
import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import SearchBar from '../../components/Search/SearchBar'

import { getPlaceAutoComplete } from '../../utils/locationApi';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CommonIcons from '../../constants/CommonIcons';
import CommonColors from '../../constants/CommonColors';



const ItemSearch = ({ item, selectPlace, navigation }) => {

    const _onItemPress = () => {
        selectPlace(item.description);
        navigation.navigate('SelfDrivingHome', { place: item.description });

    }

    return (
            <TouchableOpacity style={styles.itemSearch}
                onPress={_onItemPress}
            >
                <MaterialCommunityIcons
                    name={CommonIcons.googleMap}
                    color={CommonColors.primary}
                    size={24}
                />
                <Text>{item?.description}</Text>
            </TouchableOpacity>

    )
}


const PlaceSearchScreen = (props) => {

    const typingTimeoutRef = useRef(null);

    const [searchValue, setSearchValue] = useState('');
    const [selectedPlace, setSelectedPlace] = useState('');

    const [placeSearchs, setPlaceSearchs] = useState([]);

    const getSearchData = async (value) => {
        let fetchData = await getPlaceAutoComplete(value);
        // setPlaceSearchs(fetchData.data.pridictions);
        if (fetchData.status) {
            setPlaceSearchs(fetchData.data.predictions);
        } else {
            setPlaceSearchs([]);
        }
    }

    const _onSearchPlaces = (text) => {
        const value = text.toLowerCase();
        setSearchValue(value);
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }
        typingTimeoutRef.current = setTimeout(() => {
            getSearchData(value);
        }, 600);

    }



    return (
        <SafeAreaView>
            <SearchBar
                searchValue={searchValue}
                setSearchValue={_onSearchPlaces}
            />
            <ScrollView>
                {
                    placeSearchs.length > 0 &&
                    placeSearchs.map((e, index) =>
                        <ItemSearch
                            item={e}
                            key={index.toString()}
                            selectPlace={setSelectedPlace}
                            navigation={props.navigation}
                        />
                    )
                }
            </ScrollView>
        </SafeAreaView>
    )
}

export default PlaceSearchScreen

const styles = StyleSheet.create({
    itemSearch: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        backgroundColor: CommonColors.white300

    }
})
