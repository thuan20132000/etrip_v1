import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar } from 'react-native-paper'
import CommonColors from '../../constants/CommonColors'
import CommonImages from '../../constants/CommonImages'

const ReviewItem = () => {
    return (
        <View style={[styles.container, {}]}>
            <View style={styles.userInfor}>
                <Avatar.Image
                    size={44}
                    source={{
                        uri: CommonImages.avatar
                    }}
                />
                <Text style={styles.userInforBody}

                >
                    User
                </Text>
            </View>
            <View style={[styles.talkBubble, { position: 'relative', bottom: 18 }]}>
                <View style={styles.talkBubbleTriangle} />
                <View style={styles.talkBubbleSquare}>
                    <Text style={{
                        color: 'grey'
                    }}>
                        Xe đẹp, đầy đủ đồ chơi, màn hình 10inch, giải trí thoả thích.
                        Xe đẹp, đầy đủ đồ chơi, màn hình 10inch, giải trí thoả thích.
                        Xe đẹp, đầy đủ đồ chơi, màn hình 10inch, giải trí thoả thích.
                    </Text>
                    <Text style={{fontSize:12,marginVertical:8,color:'grey',textAlign:'right',fontStyle:'italic'}}>
                        lúc 12:20 AM 20/11/2020
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default ReviewItem

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        borderRadius: 18,
    },
    userInfor: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    userInforBody: {
        marginHorizontal: 22
    },
    talkBubble: {
        backgroundColor: 'transparent',

    },
    talkBubbleSquare: {
        minHeight: 40,
        backgroundColor: CommonColors.secondary,
        borderRadius: 10,
        padding: 8
    },
    talkBubbleTriangle: {
        width: 0,
        height: 1,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRadius: 20,
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderBottomWidth: 30,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: CommonColors.secondary,
        left: 10,
        top: 10,
        zIndex: -1,

    },
})
