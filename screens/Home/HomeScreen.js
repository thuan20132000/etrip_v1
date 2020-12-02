import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { Caption, Divider } from 'react-native-paper';
import MenuItem from '../../components/Items/MenuItem';
import SimpleCard from '../../components/Items/SimpleCard';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import NewsCarousel from '../../components/SlideCarousel/NewsCarousel'
import CommonColors from '../../constants/CommonColors';
import CommonIcons from '../../constants/CommonIcons';

import { favoriteDestinations } from '../../sampleData';

const HomeScreen = (props) => {
    // const categoryMenu = Array(5).fill({});
    let categoryMenu = [
        {
            code: '01',
            name: 'Lưu trú',
            slug: 'luu-tru',
            icon: CommonIcons.home
        },
        {
            code: '02',
            name: 'Xe tự lái',
            slug: 'xe-tu-lai',
            icon: CommonIcons.car
        },
        {
            code: '03',
            name: 'Tài xế',
            slug: 'tai-xe',
            icon: CommonIcons.car
        },
        {
            code: '03',
            name: 'Tham quan',
            slug: 'tham-quan',
            icon: CommonIcons.map
        },
        {
            code: '04',
            name: 'Ẩm thực',
            slug: 'am-thuc',
            icon: CommonIcons.account
        },
        {
            code: '05',
            name: 'Mua sắm',
            slug: 'mua-sam',
            icon: CommonIcons.map
        },
        {
            code: '06',
            name: 'Sự kiện',
            slug: 'su-kien',
            icon: CommonIcons.map
        },
        {
            code: '07',
            name: 'Y tế',
            slug: 'y-te',
            icon: CommonIcons.map
        },
        {
            code: '08',
            name: 'Phản ánh',
            slug: 'phan-anh',
            icon: CommonIcons.compass
        }

    ]


    // useEffect(() => {
    //     console.warn(favoriteDestinations);
    // }, []);


    const _onNavigateToDestinationList = (item) => {
        console.warn(item);
        props.navigation.navigate('DestinationList');
    }

    const _onNavigateDetail = (item) => {
        props.navigation.navigate('DestinationDetail', { item: item })
    }


    const _onNavigateToSpecificStack = (menuItem) => {

        switch (menuItem.slug) {
            case 'luu-tru':
                props.navigation.navigate('StayStack');
                break;
            case 'tham-quan':
                props.navigation.navigate('DestinationList');
                break;

            case 'xe-tu-lai':
                props.navigation.navigate('SelfDrivingStack');
                break;

            case 'mua-sam':
                props.navigation.navigate('ShoppingStack');
                break;

            default:
                props.navigation.navigate('DestinationList');

        }
    }


    return (
        <ScrollView style={styles.container}>
            {/* News */}
            <NewsCarousel />
            {/* Category Menu */}
            <View style={styles.menuItemWrap}>
                {
                    categoryMenu.map((e, index) =>
                        <MenuItem
                            key={index.toString()}
                            icon={e.icon}
                            name={e.name}
                            item={e}
                            _onPress={() => _onNavigateToSpecificStack(e)}

                        />
                    )
                }
            </View>
            <Divider />
            {/* Favorite Destination */}
            <SectionTitle
                icon={CommonIcons.googleMap}
                title="Điểm thu hút khách"
                iconSize={24}
                iconColor={CommonColors.primary}
            />
            <ScrollView style={styles.favoriteDestinationWrap}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                {
                    favoriteDestinations.map((e, index) =>
                        <SimpleCard
                            key={index.toString()}
                            name={e.name}
                            onPress={() => _onNavigateDetail(e)}
                        />
                    )
                }
            </ScrollView>

            {/* Favorite Foods */}
            <SectionTitle
                icon={CommonIcons.foods}
                title="Ẩm thực đặc trưng"
                iconSize={24}
                iconColor={CommonColors.primary}
            />
            <ScrollView style={styles.favoriteDestinationWrap}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                {
                    favoriteDestinations.map((e, index) =>
                        <SimpleCard
                            name={e.name}
                            key={index.toString()}
                        />
                    )
                }
            </ScrollView>

        </ScrollView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {

    },
    menuItemWrap: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginVertical: 16

    }
})
