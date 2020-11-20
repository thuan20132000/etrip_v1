import React, { useEffect, useState, useRef } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MapViewDirections from 'react-native-maps-directions';

const MapScreen = (props) => {


    const _mapRef = useRef();
    const [userLocation, setUserLocation] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
    })

    const _getUserLocation = async () => {
        Geolocation.requestAuthorization();
        Geolocation.getCurrentPosition((info) => {
            let { coords } = info;
            console.warn(coords);
            setUserLocation({
                latitude: coords.latitude,
                longitude: coords.longitude,
                latitudeDelta: 0.004,
                longitudeDelta: 0.004
            })


        });

        setTimeout(() => {
            _mapRef.current.animateToRegion(userLocation, 1000);

        }, 1000);

    }


    const origin = {latitude: 37.3318456, longitude: -122.0296002};
    const destination = {latitude: 37.771707, longitude: -122.4053769};


    return (
        <MapView style={{ display: 'flex', flex: 1 }}
            showsUserLocation={true}

            provider={PROVIDER_GOOGLE}
            ref={_mapRef}
            mapType={'satellite'}
        >
            <MapViewDirections
                origin={origin}
                destination={destination}
                apikey={`AIzaSyC2m35hjGX1ojqcEM-agRQtSVJADXDUUJo`}
            />
            <TouchableOpacity style={{ padding: 12, backgroundColor: 'grey' }}
                onPress={_getUserLocation}
            >
                <Text>fsdfsd</Text>
            </TouchableOpacity>
        </MapView>

    )
}

export default MapScreen

const styles = StyleSheet.create({})
