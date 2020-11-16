import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { Caption, Divider } from 'react-native-paper';
import MenuItem from '../components/Items/MenuItem';
import SimpleCard from '../components/Items/SimpleCard';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import NewsCarousel from '../components/SlideCarousel/NewsCarousel'
import CommonColors from '../constants/CommonColors';
import CommonIcons from '../constants/CommonIcons';

import { favoriteDestinations } from '../sampleData';

const HomeScreen = () => {
    // const categoryMenu = Array(5).fill({});
    let categoryMenu = [
        {
            name: 'Lưu trú',
            icon: CommonIcons.home
        },
        {
            name: 'Tham quan',
            icon: CommonIcons.map
        },
        {
            name: 'Ẩm thực',
            icon: CommonIcons.account
        },
        {
            name: 'Mua sắm',
            icon: CommonIcons.map
        },
        {
            name: 'Sự kiện',
            icon: CommonIcons.map
        },

    ]


    useEffect(() => {
        console.warn(favoriteDestinations);
    }, []);
    return (
        <ScrollView style={styles.container}>
            {/* News */}
            <NewsCarousel />
            {/* Category Menu */}
            <View style={styles.menuItemWrap}>
                {
                    categoryMenu.map((e, index) =>
                        <MenuItem
                            icon={e.icon}
                            name={e.name}

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
                            name={e.name}
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
        marginVertical:16

    }
})
