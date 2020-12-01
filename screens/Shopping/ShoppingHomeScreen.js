import React, { useState } from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { FlatList, ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import CardHorizontal from '../../components/Card/CardHorizontal'
import CardVerticle from '../../components/Card/CardVerticle'
import MenuItem from '../../components/Items/MenuItem'
import CommonIcons from '../../constants/CommonIcons'
import RowItem from '../../components/Items/RowItem'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { shoppingPlaces } from '../../sampleData'
import { Divider } from 'react-native-paper'
import CommonColors from '../../constants/CommonColors'

import { IconButton } from 'react-native-paper'




const ShoppingItem = ({ 
        item,
        onNavigateDetail,
        onLike,
        onNavigateDicrection ,
        isLike=false,
        setIsLike
    }) => {

    const [isLiked,setIsLiked] = useState(true);


    const _onLikePress = () => {
        setIsLiked(!isLiked);
    }




    return (
        <ImageBackground style={{ width: 180, height: 210, backgroundColor: 'coral', margin: 2 }}
            source={{
                uri: item.image
            }}
        >
            <TouchableOpacity style={{ 
                    display: 'flex', 
                    zIndex: 999, 
                    backgroundColor: 'rgba(0,0,0,0.6)', 
                    flexDirection: 'row', 
                    alignItems: 'center', 
                    margin: 12, 
                    position: 'relative', 
                    alignSelf: 'flex-end', 
                    padding: 4, 
                    borderRadius: 12, 
                }}
                onPress={_onLikePress}
            >
                <Text style={{ color: CommonColors.primary, marginHorizontal: 6 }}>120</Text>
                <MaterialCommunityIcons
                    name={isLiked?CommonIcons.likeThumb:CommonIcons.likeThumbOutline}
                    color={CommonColors.primary}
                    size={22}
                />
            </TouchableOpacity>
            <View style={styles.destinationInfo}>
                <TouchableWithoutFeedback
                    onPress={onNavigateDetail}
                >
                    <Text style={[styles.textTitle, { fontSize: 16, marginVertical: 6 }]}
                        numberOfLines={2}
                    >
                        {item?.name}
                    </Text>
                    <Text style={[styles.textTitle, { fontSize: 12, marginVertical: 6 }]}
                        numberOfLines={3}
                    >
                        {item?.address}
                    </Text>
                </TouchableWithoutFeedback>


                <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: CommonColors.light }}
                    onPress={onNavigateDicrection}
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

const ShoppingHomeScreen = (props) => {

    let categoryMenu = [
        {
            code: '01',
            name: 'Thời trang nam',
            slug: 'thoi-trang-nam',
            icon: CommonIcons.home
        },
        {
            code: '02',
            name: 'Thời trang nữ',
            slug: 'thoi-trang-nu',
            icon: CommonIcons.car
        },
        {
            code: '03',
            name: 'Đồ len',
            slug: 'do-len',
            icon: CommonIcons.car
        },
        {
            code: '03',
            name: 'Đồ lưu niệm',
            slug: 'do-luu-niem',
            icon: CommonIcons.map
        },
        {
            code: '04',
            name: 'Trung tâm thương mại',
            slug: 'trung-tam-thuong-mai',
            icon: CommonIcons.account
        },
        {
            code: '05',
            name: 'Chợ',
            slug: 'cho',
            icon: CommonIcons.account
        },
        {
            code: '06',
            name: 'Quần áo trẻ em',
            slug: 'quan-ao-tre-em',
            icon: CommonIcons.account
        }

    ];


    const _navigateToDestinationDetail = (item) => {
        props.navigation.navigate('DestinationDetail',{item:item});
    }

    const _navigateToDestinationMap = (item) => {
        props.navigation.navigate('DestinationMap', { coords: item.coords });
    }


    const _onLikeItem = (item) => {
        console.warn('like: ',item);
    }


    return (
        <ScrollView style={{ display: 'flex', flex: 1 }}>


            {/* Category List */}
            <ScrollView style={styles.menuItemWrap}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                {
                    categoryMenu.map((e, index) =>
                        <MenuItem
                            itemStyle={styles.itemStyle}
                            key={index.toString()}
                            icon={e.icon}
                            iconSize={32}
                            name={e.name}
                            item={e}
                            _onPress={() => props.navigation.navigate('ShoppingList')}

                        />
                    )
                }
            </ScrollView>
            {/* End */}
            <Text style={[styles.textCaption]}>Nơi mua sắm phổ biến</Text>
            {/* Popular Grid */}
            <FlatList style={[styles.popularGrid, { marginVertical: 8 }]}
                contentContainerStyle={{ alignSelf: 'flex-start' }}
                horizontal={true}
                data={shoppingPlaces}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) =>
                    <ShoppingItem
                        item={item}
                        onLike={()=>_onLikeItem(item)}
                        onNavigateDetail={()=>_navigateToDestinationDetail(item)}
                        onNavigateDicrection={()=>_navigateToDestinationMap(item)}
                    />
                }
            />

            {/* End */}
            <Divider />
            <Text style={[styles.textCaption]}>Nơi mua sắm gần bạn</Text>
            {/* Popular Grid */}
            <FlatList style={[styles.popularGrid, { marginVertical: 8 }]}
                contentContainerStyle={{ alignSelf: 'flex-start' }}
                horizontal={true}
                data={shoppingPlaces}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) =>
                    <ShoppingItem
                        item={item}
                    />
                }

            />

            {/* End */}

        </ScrollView>
    )
}

export default ShoppingHomeScreen

const styles = StyleSheet.create({
    itemStyle: {
        minHeight: 80
    },
    popularGrid: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        margin: 10,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

    },
    destinationInfo: {
        backgroundColor: 'rgba(0,0,0,0.4)',
        width: '90%',
        marginHorizontal: 12,
        borderRadius: 12,
        padding: 8,
        bottom: 10,
        position: 'absolute'
    },
    textTitle: {
        fontSize: 16,
        color: 'white',
        marginHorizontal: 12,
        marginVertical: 8
    },
    textCaption: {
        fontSize: 16,
        color: 'grey',
        marginHorizontal: 12,
        marginVertical: 8
    }
})
