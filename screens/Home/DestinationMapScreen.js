import React, { useRef, useEffect, useState } from 'react'
import { Dimensions, StyleSheet, Text, View, Button } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions';
import Geolocation from '@react-native-community/geolocation';
import env from '../../env';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import commonIcons from '../../constants/CommonIcons';
import commonColors from '../../constants/CommonColors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CommonIcons from '../../constants/CommonIcons';
import CommonColors from '../../constants/CommonColors';
import { convertMinutesToHours } from '../../utils/helper';
import { IconButton } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
const DestinationMapScreen = (props) => {

    const _mapRef = useRef();

    const destinationsCoords = props.route.params?.coords;


    const [distanceDirection, setDistanceDirection] = useState('');
    const [timeDirection, setTimeDirection] = useState('');
    const [directionMode, setDirectionMode] = useState('DRIVING');

    const [mapDestination, setMapDestination] = useState({
        latitude: 16.056854,
        longitude: 108.1742679,


    });


    const [mapOrigin, setMapOrigin] = useState({
        latitude: 16.056596160951084,
        longitude: 108.16723754022674,
        latitudeDelta: 0.04,
        longitudeDelta: 0.04
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
                    latitude: coords.latitude,
                    longitude: coords.longitude,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.04
                }, 2000);
            }, 1000);
            setIsLoadingMap(true);

        })
        if (destinationsCoords) {
            setMapDestination(destinationsCoords);

        }


        _mapRef.current.animateToRegion(mapOrigin, 1000);


    }, []);



    const _onMapReady = (info) => {
        setDistanceDirection(info.distance);
        setTimeDirection(info.duration);
    }

    const _onChangeDirectionMode = (mode) => {
        setDirectionMode(mode);

    }




    React.useLayoutEffect(() => {
        props.navigation.setOptions({
            headerShown: false
        });
        props.navigation.dangerouslyGetParent().setOptions({
            tabBarVisible: false
        });

        return () => {
            props.navigation.dangerouslyGetParent().setOptions({
                tabBarVisible: true
            });
        }


    }, [props.navigation]);


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ display: 'flex', flexDirection: 'row', height: 60, backgroundColor: commonColors.white300 }}>
                <View style={styles.destinationInfo}

                >
                    <Text>{distanceDirection} km</Text>
                    <MaterialCommunityIcons
                        name={CommonIcons.map}
                        size={24}
                        color={CommonColors.primary}
                    />
                </View>
                <View style={styles.destinationInfo}

                >
                    <Text>{convertMinutesToHours(timeDirection)} </Text>
                    <MaterialCommunityIcons
                        name={CommonIcons.clock}
                        size={24}
                        color={CommonColors.primary}
                    />
                </View>

                <View style={[styles.destinationInfo, { display: 'flex', flexDirection: 'row' }]}

                >
                    <IconButton style={directionMode != 'DRIVING' && { opacity: 0.5 }}
                        icon={commonIcons.car}
                        color={commonColors.primary}

                        size={24}
                        onPress={() => _onChangeDirectionMode('DRIVING')}
                    />
                    <IconButton style={directionMode != 'WALKING' && { opacity: 0.5 }}
                        icon={commonIcons.walk}
                        color={commonColors.primary}
                        size={24}
                        onPress={() => _onChangeDirectionMode('WALKING')}
                    />
                </View>

            </View>
            <MapView style={{ display: 'flex', flex: 1 }}
                showsUserLocation={true}
                region={
                    mapOrigin
                }
                provider={PROVIDER_GOOGLE}
                ref={_mapRef}
                mapType={'satellite'}
            >

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
                        onReady={(info) => _onMapReady(info)}
                        onError={(error) => console.warn(error)}
                        mode={directionMode}
                    />
                }




            </MapView>
        </SafeAreaView>
    )
}

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

export default DestinationMapScreen

const styles = StyleSheet.create({
    fadingContainer: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: "powderblue"
    },
    fadingText: {
        fontSize: 28,
        textAlign: "center",
        margin: 10
    },
    destinationInfo: {
        width: deviceWidth / 3,
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center',
    }

})
