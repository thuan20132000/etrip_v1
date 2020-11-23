import React, { useRef, useEffect, useState } from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions';
import Geolocation from '@react-native-community/geolocation';
import env from '../../env';

const DestinationMapScreen = (props) => {

    const _mapRef = useRef();

    const destinationsCoords = props.route.params.coords;


    const [distanceDirection,setDistanceDirection] = useState('');

    const [mapDestination, setMapDestination] = useState({
        latitude: 16.056854,
        longitude: 108.1742679,
       

    });


    const [mapOrigin, setMapOrigin] = useState({
        latitude: 16.056596160951084,
        longitude: 108.16723754022674,
        latitudeDelta:0.04,
        longitudeDelta:0.04
    })

    const [userLocation, setUserLocation] = useState({
        latitude: '',
        longitude: ''
    })

    const [isLoadingMap, setIsLoadingMap] = useState(false);
    useEffect(() => {

        Geolocation.getCurrentPosition((info) => {
            let { coords } = info;
            setUserLocation({
                latitude: coords.latitude,
                longitude: coords.longitude,
                latitudeDelta: 0.04,
                longitudeDelta: 0.04
            });


            setTimeout(() => {
                _mapRef.current.animateToRegion({
                    latitude:coords.latitude,
                    longitude:coords.longitude,
                    latitudeDelta:0.04,
                    longitudeDelta:0.04
                }, 2000);
            }, 1000);
            setIsLoadingMap(true);


        })

        _mapRef.current.animateToRegion(mapOrigin, 1000);
        setMapDestination(destinationsCoords);
       
    }, []);



    const _onMapReady = (info) => {
        console.warn(info);
        setDistanceDirection(info.distance);
        
    }

    return (
        <MapView style={{ display: 'flex', flex: 1 }}
            showsUserLocation={true}
            region={
                mapOrigin
            }
            provider={PROVIDER_GOOGLE}
            ref={_mapRef}
            mapType={'satellite'}
        >

            <View style={{width:deviceWidth,height:40,backgroundColor:'coral',opacity:0.5,display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
                <View>
                    <Text>Khoảng cách : {distanceDirection && distanceDirection+' km'}</Text>
                </View>
                <View>
                    <Text>Khoảng cách</Text>
                </View>
                <View>
                    <Text>Khoảng cách</Text>
                </View>
             
            </View>
            <Marker
                coordinate={mapDestination}
                draggable={true}
                onDragEnd={(e) => setMapDestination(e.nativeEvent.coordinate)}
            />

            {
                isLoadingMap &&

                <MapViewDirections
                    origin={userLocation || mapOrigin}
                    destination={mapDestination}
                    apikey={env.google_map_key}
                    strokeWidth={3}
                    strokeColor="blue"
                    timePrecision={'now'}
                    onReady={(info)=>_onMapReady(info)}
                />
            }




        </MapView>
    )
}

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

export default DestinationMapScreen

const styles = StyleSheet.create({})
