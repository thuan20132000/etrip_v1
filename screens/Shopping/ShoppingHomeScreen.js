import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import CardHorizontal from '../../components/Card/CardHorizontal'
import CardVerticle from '../../components/Card/CardVerticle'
import MenuItem from '../../components/Items/MenuItem'
import CommonIcons from '../../constants/CommonIcons'

const ShoppingHomeScreen = () => {

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

    ]
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
                            _onPress={() => _onNavigateToSpecificStack(e)}

                        />
                    )
                }
            </ScrollView>
            {/* End */}
            <Text>Nơi mua sắm phổ biến</Text>
            {/* Popular Grid */}
            <FlatList style={styles.popularGrid}
                contentContainerStyle={{ alignSelf: 'flex-start' }}
                horizontal={true}
                data={categoryMenu}
                renderItem={({ item, index }) =>
                    <View style={{ width: 180, height: 210, backgroundColor: 'coral', margin: 2 }}>
                        <Text>sdfs</Text>
                    </View>
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

    }

})
