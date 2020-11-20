import React, { useRef, useState,useEffect } from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { Searchbar } from 'react-native-paper'
import CommonColors from '../../constants/CommonColors';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { ScrollView } from 'react-native-gesture-handler';
import SearchItem from '../../components/Items/SearchItem';
import SimpleBottomSheet from '../../components/BottomSheet/SimpleBottomSheet';
import CardHorizontal from '../../components/Card/CardHorizontal';
import CardDetail from '../../components/Card/CardDetail';





const FirstRoute = ({ searchData,onPressItem }) => (
    <ScrollView style={[styles.scene, { backgroundColor: CommonColors.light }]} >
        {
            searchData.map((e, index) =>
                <SearchItem 
                    key={index.toString()}
                    onPress={onPressItem}
                    item={e}

                />
            )
        }

    </ScrollView>
);

const SecondRoute = () => (
    <View style={[styles.scene, { backgroundColor: 'gray' }]} >
    </View>
);

const ShoppingRoute = () => (
    <View style={[styles.scene, { backgroundColor: 'gray' }]} />
)

const initialLayout = { width: Dimensions.get('window').width };
const renderTabBar = props => (
    <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: 'white' }}
        style={{ backgroundColor: CommonColors.primary }}
        labelStyle={{ color: 'white' }}
    />
);


const LocationSearchScreen = (props) => {


    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = query => setSearchQuery(query);
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'visit', title: 'Tham Quan' },
        { key: 'eatdrink', title: 'Ăn Uống' },
        { key: 'shopping', title: 'Mua Sắm' }
    ]);


    const [tabActive, setTabActive] = useState('visit');

    const [searchData, setSearchData] = useState([
        {
            id: 1,
            name: 'banahill'
        },
        {
            id: 2,
            name: 'cau rong'
        }
    ]);

    const _refSimpleBottomSheet = useRef();

    const _onPressItemSearch = (item) => {
        _refSimpleBottomSheet.current.open();
    }

    

    return (
        <>
            <Searchbar style={{ backgroundColor: CommonColors.primary, color: 'black', margin: 12 }}

                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}

            />
            <TabView
                renderTabBar={renderTabBar}
                navigationState={{ index, routes }}
                renderScene={SceneMap({
                    visit: () => <FirstRoute searchData={searchData} onPressItem={_onPressItemSearch} />,
                    eatdrink: SecondRoute,
                    shopping: ShoppingRoute
                })}
                onIndexChange={setIndex}
                initialLayout={initialLayout}
            />
            <SimpleBottomSheet
                _refSimpleBottomSheet={_refSimpleBottomSheet}
                height={Dimensions.get('screen').height}
            >
               <CardDetail
                    navigation={props.navigation}
                    _refSimpleBottomSheet={_refSimpleBottomSheet}
               />
            </SimpleBottomSheet>

        </>
    )
}

export default LocationSearchScreen

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },

})
