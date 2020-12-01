import React, { useEffect } from 'react'
import { Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import CommonColors from '../../constants/CommonColors'
import CommonIcons from '../../constants/CommonIcons'

import { shoppingPlaces } from '../../sampleData'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const _randomHeight = () => {
    let x = Math.floor(Math.random() * 20) * 10;
    return x;
}

const ListItem = ({ item }) => {


    return (
        <ImageBackground style={{
            // width: deviceWidth / 2, 
            // height: 100 + _randomHeight(), 
            backgroundColor: 'coral',
            margin: 1,
            position: 'relative',
            top: 0,
            height:220,
            width: deviceWidth/2-10,
        
        }}
            source={{
                uri: item.image
            }}
        >
            <TouchableOpacity style={{ display: 'flex', zIndex: 999, backgroundColor: 'rgba(0,0,0,0.3)', flexDirection: 'row', alignItems: 'center', position: 'relative', alignSelf: 'flex-end', padding: 4, borderRadius: 12, }}
                onPress={() => console.warn('sd')}
            >
                <Text style={{ color: CommonColors.primary, marginHorizontal: 6 }}>120</Text>
                <MaterialCommunityIcons
                    name={CommonIcons.heartMutipleOutline}
                    color={CommonColors.primary}
                    size={22}
                />
            </TouchableOpacity>

            <View style={styles.destinationInfo}>
                <Text style={[styles.textTitle, { fontSize: 16, marginVertical: 6}]}
                    numberOfLines={2}
                >
                    Cozy HomeStay HomeStay HomeStay
                </Text>

                <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
                    onPress={() => console.warn('fs')}
                >
                    <MaterialCommunityIcons
                        name={CommonIcons.googleMap}
                        size={18}
                        color={'coral'}
                    />
                    <Text>Chỉ đường</Text>
                </TouchableOpacity>




            </View>
        </ImageBackground>
    )
}


const ShoppingListScreen = () => {


    useEffect(() => {
        //  console.warn(_randomHeight());
    }, []);
    return (
            <FlatList style={[styles.popularGrid, { display: 'flex', width: deviceWidth}]}
                contentContainerStyle={{                 
                    marginHorizontal:8,
                }}

                data={shoppingPlaces}

                horizontal={false}

                numColumns={2}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) =>
                    <ListItem item={item} />
                }
            
            />
            
    )
}

export default ShoppingListScreen

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
    itemStyle: {
        minHeight: 80
    },
    popularGrid: {
        // width: deviceWidth - 10,
        // overflow: 'hidden'

    },
    destinationInfo: {
        backgroundColor: 'rgba(255,255,255,0.8)',
        width: '90%',
        marginHorizontal: 12,
        borderRadius: 12,
        padding: 8,
        bottom: 10,
        position: 'absolute'
    },
    textTitle: {
        fontSize: 16,
        color: 'grey',
        marginHorizontal: 12,
        marginVertical: 8,
    
    }
})
