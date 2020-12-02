import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'




const RowItem = ({ title, value, itemStyle }) => {
    return (
        <View style={styles.rowItem}>
            <Text style={styles.rowTitle}>{title || 'Giá Thuê'}</Text>
            <Text style={styles.rowValue}>{value || '700,000 đ/ngày'}</Text>
        </View>
    )
}

const CarPriceDetailScreen = (props) => {




    useEffect(() => {
        props.navigation.setOptions({
            headerShown: true,
        });


        return () => {
            props.navigation.dangerouslyGetParent().setOptions({
                headerShown: false
            });


        }
    }, [])



    return (
        <ScrollView style={{ padding: 12 }}

        >
            <View style={styles.rowBlock}>
                <RowItem
                    title={'Giá thuê'}
                    value={'600.000 vnd/ngày'}
                />
                <RowItem
                    title={'Nhận xe'}
                    value={'21:00'}
                />
                <RowItem
                    title={'Trả xe'}
                    value={'20:00'}
                />
            </View>

            <Text>Chuyến đi một ngày</Text>
            <View style={styles.rowBlock}>
                <RowItem
                    title={'Giá ngày thường'}
                    value={'600.000 vnd/ngày'}
                />
                <RowItem
                    title={'Giá cuối tuần'}
                    value={'0'}
                />
                <RowItem
                    title={'Giá ngày lễ'}
                    value={'0'}
                />
                <RowItem
                    title={'Giảm giá'}
                    value={'0'}
                />
                <RowItem
                    title={'Mã giảm giá'}
                    value={'0'}
                />
                <RowItem
                    title={'Tổng tiền phải trả'}
                    value={'0'}
                />
            </View>
            <View style={styles.rowBlock}>
                <RowItem
                    title={'Tiền cọc'}
                    value={'0'}
                />
                <RowItem
                    title={'Thanh toán sau cho chủ xe'}
                    value={'0'}
                />
            </View>



        </ScrollView>
    )
}

export default CarPriceDetailScreen

const styles = StyleSheet.create({
    rowBlock: {
        display: 'flex',
        flexDirection: 'column',
        padding: 12,
        borderRadius: 12,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        marginVertical:6

    },
    rowItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 4
    }
})