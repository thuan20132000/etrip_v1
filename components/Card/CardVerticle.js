import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const CardVerticle = ({ item,onItemPress }) => {
    return (
        <TouchableOpacity style={styles.cardContainer}
            onPress={onItemPress}
        >
            <ImageBackground
                source={{
                    uri: item?.image || 'https://www.driving.co.uk/s3/st-driving-prod/uploads/2020/02/2020-Vauxhall-Corsa-SRi-UK-01.jpg'
                }}
                style={styles.image}
            >
                <View style={{
                    position: 'absolute',
                    backgroundColor: 'white',
                    display: 'flex',
                    flexDirection: 'row',
                    padding:4,
                    top:12,
                    right:12,
                    borderRadius:12,

                }}>
                    <Text style={styles.caption}> Giao xe tận nơi</Text>
                </View>
            </ImageBackground>
            <View style={styles.body}>
                <Text style={styles.title}>Xe Mecedes</Text>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.caption}>Cách bạn: 1.2km</Text>
                    <Text style={styles.caption}>Giá: 700.000VND/ngày</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default CardVerticle

const styles = StyleSheet.create({
    image: {
        flex: 10,
        resizeMode: "cover",
        justifyContent: "center"
    },
    body: {
        padding: 8,
        flex: 2
    },
    cardContainer: {
        height: 220,
        margin: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: 'white',
        paddingBottom: 12,
        borderRadius: 12,
        overflow: 'hidden'

    },
    title: {
        fontSize: 18,
        fontWeight: '600'
    },
    caption: {
        fontSize: 12,
        marginVertical: 4,
        color:'grey',
        fontWeight:'500'
    }

})
