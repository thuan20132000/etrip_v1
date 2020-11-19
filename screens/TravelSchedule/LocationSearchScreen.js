import React, { useState } from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { Searchbar } from 'react-native-paper'
import CommonColors from '../../constants/CommonColors';
import { TabView, SceneMap } from 'react-native-tab-view';



const FirstRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
);

const SecondRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

const initialLayout = { width: Dimensions.get('window').width };


const LocationSearchScreen = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = query => setSearchQuery(query);
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'First' },
        { key: 'second', title: 'Second' },
    ]);

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
    });

    return (
        // <View>
        <>
            <Searchbar style={{ backgroundColor: CommonColors.primary, color: 'black', margin: 12 }}

                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}

            />
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={initialLayout}
            />

        </>
        // </View>
    )
}

export default LocationSearchScreen

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },

})
