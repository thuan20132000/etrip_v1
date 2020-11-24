import React, { useRef, useState, useEffect } from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import MapViewDirections from 'react-native-maps-directions';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation';
import { useSelector } from 'react-redux';
import env from '../../env';

const MapDestinationRouteListScreen = (props) => {

    const visitLocations = useSelector(state => state.schedules.visitLocationScheduleData);


    const _mapRef = useRef();

    const [mapOrigin, setMapOrigin] = useState({
        latitude: 16.06555002784379,
        longitude: 108.18345627065865,
        latitudeDelta: 0.004,
        longitudeDelta: 0.004
    })


    const [userLocation, setUserLocation] = useState({
        latitude: '',
        longitude: '',
        latitudeDelta: '',
        longitudeDelta: '',
    });
    const [coordinatesRoute, setCoordinatesRoute] = useState([]);

    const [waypointNumber,setWaypointNumber] = useState(1);


    const _getUserLocation = async () => {
        Geolocation.requestAuthorization();
        Geolocation.getCurrentPosition((info) => {
            let { coords } = info;
            setUserLocation({
                latitude: coords.latitude,
                longitude: coords.longitude,
                latitudeDelta: 0.04,
                longitudeDelta: 0.04
            });

            setMapOrigin({
                latitude: coords.latitude,
                longitude: coords.longitude,

            })

            // setCoordinatesRoute([...coordinatesRoute,{latitude:coords.latitude,longitude:coords.longitude}]);


            // setTimeout(() => {
            //     _mapRef.current.animateToRegion({
            //         latitude: coords.latitude,
            //         longitude: coords.longitude,
            //         latitudeDelta: 0.004,
            //         longitudeDelta: 0.004
            //     }, 1000);

            // }, 1000);
        });
    }
    const [waypointsDirection, setWaypointsDirection] = useState([]);

    useEffect(() => {
        _getUserLocation();
        let coordinates = [];

        for (const element of visitLocations) {
            setCoordinatesRoute([...coordinatesRoute, element.coords]);
            coordinates.push(element.coords);

        }
        setWaypointNumber(coordinates.length-1);
        setWaypointsDirection(coordinates);


    }, []);

    React.useLayoutEffect(() => {
        props.navigation.setOptions({
            headerShown: true
        });
        props.navigation.dangerouslyGetParent().setOptions({
            tabBarVisible: false
        })

        return () => {
            props.navigation.dangerouslyGetParent().setOptions({
                tabBarVisible: true
            })
        }

    }, [props.navigation]);

    return (
        <>
            <MapView style={{ display: 'flex', flex: 1 }}
                showsUserLocation={true}
                initialRegion={{
                    latitude: 16.06555002784379,
                    longitude: 108.18345627065865,
                    latitudeDelta: 0.004,
                    longitudeDelta: 0.004
                }}
                provider={PROVIDER_GOOGLE}
                ref={_mapRef}
                mapType={'satellite'}

                showsMyLocationButton={true}
            >

                {
                    visitLocations &&
                    visitLocations.map((e, index) =>
                        <Marker
                            key={index.toString()}
                            coordinate={e.coords}
                        />
                    )
                }


                <MapViewDirections
                    origin={visitLocations[0].coords}
                    destination={visitLocations[waypointNumber].coords}
                    apikey={env.google_map_key}
                    waypoints={waypointsDirection}
                    strokeWidth={2.5}
                    strokeColor="blue"
                    optimizeWaypoints={true}

                    onError={(errorMessage) => {
                        console.warn('GOT AN ERROR');
                    }}
                    onStart={(params) => {
                        console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
                    }}
                    onReady={result => {
                        console.warn('dsds: ', result);

                        _mapRef.current.fitToCoordinates(result.coordinates, {
                            edgePadding: {
                                right: (deviceWidth / 20),
                                bottom: (deviceHeight / 20),
                                left: (deviceWidth / 20),
                                top: (deviceHeight / 20),
                            }

                        })
                    }}
                />


            </MapView>

        </>
    )
}


const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

export default MapDestinationRouteListScreen

const styles = StyleSheet.create({})
