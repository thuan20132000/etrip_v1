import React, { useState,useEffect, useRef, createRef } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import FilterBar from '../../components/Bar/FilterBar'
import DestinationCard from '../../components/Card/DestinationCard'

import {favoriteDestinations} from '../../sampleData';


const DestinationListScreen = (props) => {

    const [number, setNumber] = useState(12);

    const [isLoading, setIsLoading] = useState(false);
    const [selectedId, setSelectedId] = useState('');


    useEffect(() => {
        console.warn(favoriteDestinations);
    }, []);

    const FooterLoading = () => {
        return (
            <View>
                <ActivityIndicator
                    animating={isLoading}
                />
            </View>
        )
    }


    let _refLoadMoreDestination = createRef();
    const _onLoadMoreDestination = async () => {
        setIsLoading(true);
        _refLoadMoreDestination= setTimeout(() => {
            setNumber(number + 3);
            setIsLoading(false);
        }, 2000);
    }


    useEffect(() => {
        props.navigation.dangerouslyGetParent().setOptions({
            tabBarVisible: false
        })
        return () => {
            props.navigation.dangerouslyGetParent().setOptions({
                tabBarVisible: true
            })

            clearTimeout(_refLoadMoreDestination);
        }

       
    }, [])



    return (
        <View>
            <FilterBar />




            <FlatList style={{ zIndex: -1,marginBottom:60 }}
                showsHorizontalScrollIndicator={false}
                data={favoriteDestinations}
                renderItem={({item,index}) =>
                    <DestinationCard 
                        item={item}
                        navigation={props.navigation}
                    />

                }
                keyExtractor={(item) => item.id}
                extraData={selectedId}
                onEndReached={_onLoadMoreDestination}
                onEndReachedThreshold={0.5}
                ListFooterComponent={<FooterLoading />}
            />

        </View>
    )
}

export default DestinationListScreen

const styles = StyleSheet.create({
    filterBarContainer: {
        display: 'flex',
        flexDirection: 'row',

    }
})
