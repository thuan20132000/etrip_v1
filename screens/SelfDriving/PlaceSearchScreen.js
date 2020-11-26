import React,{useRef,useState,useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import SearchBar from '../../components/Search/SearchBar'

import {getPlaceAutoComplete} from '../../utils/locationApi';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CommonIcons from '../../constants/CommonIcons';
import CommonColors from '../../constants/CommonColors';



const ItemSearch = ({item,selectPlace}) => {
    return (
        <TouchableOpacity style={styles.itemSearch}
            onPress={()=>selectPlace(item.description)}
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


const PlaceSearchScreen = () => {

    const typingTimeoutRef = useRef(null);

    const [searchValue,setSearchValue] = useState('');
    const [selectedPlace,setSelectedPlace] = useState('');

    const [placeSearchs,setPlaceSearchs] = useState([]);

    const getSearchData = async (value) => {
        let fetchData = await getPlaceAutoComplete(value);
        // setPlaceSearchs(fetchData.data.pridictions);
        if(fetchData.status){
            setPlaceSearchs(fetchData.data.predictions);
        }else{
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


    useEffect(() => {
        console.warn(selectedPlace);
    }, [selectedPlace])


    return (
        <View>
            <SearchBar 
                searchValue={searchValue}
                setSearchValue={_onSearchPlaces}
            />
            <ScrollView>
                {
                    placeSearchs.length > 0 &&
                    placeSearchs.map((e,index) => 
                        <ItemSearch
                            item={e}
                            key={index.toString()}
                            selectPlace={setSelectedPlace}
                        />
                    )
                }
            </ScrollView>
        </View>
    )
}

export default PlaceSearchScreen

const styles = StyleSheet.create({
    itemSearch:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        padding:12,
        backgroundColor:CommonColors.white300

    }
})
