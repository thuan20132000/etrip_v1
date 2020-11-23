import React, { useEffect, useState, useRef } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MapViewDirections from 'react-native-maps-directions';

import env from '../../env';

const MapScreen = (props) => {


    const _mapRef = useRef();
    const [userLocation, setUserLocation] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
    })

    const [mapDirection, setMapDirecion] = useState({
        origin: {
            longitude: '',
            latitude: '',
        },
        destination: {
            latitude: 37.771707,
            longitude: -122.4053769,

        }

    });


    const [directionStatus, setDirectionStatus] = useState(false);
    const [mapOrigin, setMapOrigin] = useState({
        longitude: '',
        latitude: '',
    });

    const [mapDestination, setMapDestination] = useState({
        longitude: '',
        latitude: '',
    });

    const _getUserLocation = async () => {
        Geolocation.requestAuthorization();
        Geolocation.getCurrentPosition((info) => {
            let { coords } = info;
            setUserLocation({
                latitude: coords.latitude,
                longitude: coords.longitude,
                latitudeDelta: 0.004,
                longitudeDelta: 0.004
            });

            setMapOrigin({
                latitude: coords.latitude,
                longitude: coords.longitude,

            })

            setMapDestination({
                latitude: 16.056596160951084,
                longitude: 108.16723754022674,
            })

            setDirectionStatus(true);


        });

        setTimeout(() => {
            _mapRef.current.animateToRegion(userLocation, 1000);

        }, 1000);

    }

    let coordinates = [
        {
            latitude: 37.3317876,
            longitude: -122.0054812,
        },
        {
            latitude: 37.771707,
            longitude: -122.4053769,
        },
    ];


    const origin = { latitude: 37.3318456, longitude: -122.0296002 };
    const destination = { latitude: 37.771707, longitude: -122.4053769 };

    return (
        <>
            <TouchableOpacity style={{ padding: 12, backgroundColor: 'grey' }}
                onPress={_getUserLocation}
            >
                <Text>fsdfsd</Text>
            </TouchableOpacity>
            <MapView style={{ display: 'flex', flex: 1 }}
                showsUserLocation={true}

                provider={PROVIDER_GOOGLE}
                ref={_mapRef}
                mapType={'satellite'}
            >
                <Marker
                    coordinate={mapDestination}
                    draggable={true}
                    onDragEnd={(e)=>setMapDestination(e.nativeEvent.coordinate)}
                />
                
                <MapViewDirections
                        origin={mapOrigin}
                        destination={mapDestination}
                        apikey={env.google_map_key}
                        strokeWidth={3}
                        strokeColor="blue"
                    />

            </MapView>
        </>

    )
}

export default MapScreen

const styles = StyleSheet.create({})
