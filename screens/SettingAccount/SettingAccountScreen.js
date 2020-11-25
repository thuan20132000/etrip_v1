import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

import MaterialCommmunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import CommonColors from '../../constants/CommonColors'
import CommonIcons from '../../constants/CommonIcons'





const SettingItem = ({ icon, title, size, iconColor }) => {
    return (
        <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', padding: 12, alignItems: 'center', backgroundColor: CommonColors.white300,marginVertical:1 }}
            onPress={() => console.warn('dsds dsv dsbbfd fdbfdb bbrb br')}
        >
            <MaterialCommmunityIcons
                name={icon}
                color={iconColor}
                size={28}
            />
            <Text style={{ fontSize: size - 2, marginHorizontal: 22, color: 'grey' }}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}





const SettingAccountScreen = () => {
    return (
        <ScrollView>

            {/* Account Information */}
            <ImageBackground style={{ width: '100%', height: 160 }}
                source={{
                    uri: 'https://dulichcanhdieu.com.vn/wp-content/uploads/cau-rong-phun-nuoc.jpg'
                }}
            >
                <Text style={styles.text}>Inside</Text>
            </ImageBackground>
            <View style={styles.userInfor}>
                <Image style={{ width: 100, height: 100 }}
                    source={{
                        uri: 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png'
                    }}
                />
                <View style={styles.userInfoTextWrap}>
                    <Text style={[styles.userInfoText, { fontSize: 18, fontWeight: '500' }]}>
                        Thuan Truong
                    </Text>
                    <Text style={[styles.userInfoText, { fontSize: 14, fontStyle: 'italic', color: 'grey' }]}>
                        Thuan20132000@gmail.com
                    </Text>
                    <Text style={[styles.userInfoText, { fontSize: 14, fontStyle: 'italic', color: 'grey' }]}>
                        0976904548
                    </Text>
                    
                </View>
            </View>
            {/* Account Setting  */}
            <View>
                <SettingItem
                    icon={CommonIcons.calendar}
                    iconColor={CommonColors.primary}
                    size={22}
                    title={`Lịch sử Booking`}
                />
                <SettingItem
                    icon={CommonIcons.calendar}
                    iconColor={CommonColors.primary}
                    size={22}
                    title={'Lịch sử di chuyển'}

                />
                <SettingItem
                    icon={CommonIcons.calendar}
                    iconColor={CommonColors.primary}
                    size={24}
                    title={'Địa điểm yêu thích'}
                />
                
            </View>
            <TouchableOpacity style={{backgroundColor:CommonColors.primary,width:120,padding:12,alignSelf:'center',marginVertical:26}}
                onPress={()=>console.warn('dss dv dv sdveevdvs')}
            >
                    <Text style={{textAlign:'center',color:'white'}}>Đăng Xuất</Text>
            </TouchableOpacity>        
            
        </ScrollView>
    )
}

export default SettingAccountScreen

const styles = StyleSheet.create({
    userInfor: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: 8
    },
    userInfoTextWrap: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginHorizontal: 18

    },
    userInfoText: {
        margin: 2
    }
})
