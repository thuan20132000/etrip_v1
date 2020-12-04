import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button, Dimensions, TextInput, Alert } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { ActivityIndicator, Modal } from 'react-native-paper';

import auth from '@react-native-firebase/auth';
import CommonColors from '../../constants/CommonColors';



const RowItem = ({ title, value, itemStyle }) => {
    return (
        <View style={styles.rowItem}>
            <Text style={styles.rowTitle}>{title || 'Giá Thuê'}</Text>
            <Text style={styles.rowValue}>{value || '700,000 đ/ngày'}</Text>
        </View>
    )
}



const CarPriceDetailScreen = (props) => {

    const [customerInfo, setCustomerInfo] = useState({
        name: '',
        phoneNumber: ''
    });




    // If null, no SMS has been sent
    const [confirm, setConfirm] = useState(null);
    const [code, setCode] = useState('');

    // Handle the button press
    // async function signInWithPhoneNumber(phoneNumber) {
    //     try {
    //         const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    //         console.warn(confirmation.verificationId);
    //         //  setConfirm(confirmation);


    //     } catch (error) {
    //         console.warn('error: ', error);
    //     }
    // }

    const [modalVisible, setModalVisible] = useState(false);

    const [isConfirm, setIsConfirm] = useState(false);
    async function confirmCode() {

        setIsConfirm(true);
        try {
            let confirmRes = await confirm.confirm(code);

            console.warn(confirmRes);
            if(confirmRes.user?.uid){
                Alert.alert("Xác nhận đặt xe thành công","Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất");
            }
            // let userData = await auth().currentUser.linkWithCredential(confirmRes);
            // console.warn('userData; ',userData);
        } catch (error) {
            console.warn('Invalid code.: ',error);
        }
        setIsConfirm(false);
    }


    async function verifyUserWithPhoneNumber(phoneNumber) {

        try {
            let numberTest = '+84976904548';
            let a = phoneNumber.replace(phoneNumber[0],'+84');
            const confirmation = await auth().signInWithPhoneNumber(a);
            setConfirm(confirmation);
            console.warn('send veryfy: ', confirmation);



        } catch (error) {

            console.warn(error);

        }
    }




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
        <>
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
            <TouchableOpacity style={[styles.buttonSubmit, {}]}
                onPress={() => setModalVisible(true)}
            >
                <Text style={{ fontSize: 18, fontWeight: '600', color: 'white', textAlign: 'center' }}>
                    Xác nhận đặt xe
                </Text>
            </TouchableOpacity>

            <Modal
                visible={modalVisible} onDismiss={() => setModalVisible(false)}
            >

                {
                    confirm ?
                        <View style={{backgroundColor:'white',padding:22,margin:22,borderRadius:22}}
                        
                        >
                            <TextInput style={[styles.textInput, {}]}
                                onChangeText={text => setCode(text)}
                                value={code}
                                placeholder={`Nhập mã xác nhận`}
                                keyboardType={'numeric'}
                            />
                            {
                                isConfirm ? <ActivityIndicator
                                    size={'small'}
                                /> :
                                    <TouchableOpacity style={[styles.buttonSubmit, { marginVertical: 22, borderRadius: 22, width: 100, padding: 10, alignSelf: 'center' }]}
                                        onPress={confirmCode}
                                    >
                                        <Text style={{ color: 'white', textAlign: 'center' }}>Xác nhận</Text>
                                    </TouchableOpacity>

                            }

                        </View> :
                        <View style={[styles.modalContainer, { alignContent: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }]}

                        >



                            <TextInput style={[styles.textInput, {}]}
                                onChangeText={text => setCustomerInfo({ ...customerInfo, name: text })}
                                value={customerInfo.name}
                                placeholder={`Nhập họ tên của bạn`}
                            />
                            <TextInput style={[styles.textInput, {}]}
                                onChangeText={text => setCustomerInfo({ ...customerInfo, phoneNumber: text })}
                                value={customerInfo.phoneNumber}
                                placeholder={`Nhập số điện thoại của bạn`}
                                keyboardType={'numeric'}
                            />

                            <TouchableOpacity style={[styles.buttonSubmit, { marginVertical: 22, borderRadius: 22, width: 100, padding: 10, alignSelf: 'center' }]}
                                onPress={() => verifyUserWithPhoneNumber(customerInfo.phoneNumber)}
                            >
                                <Text style={{ color: 'white', textAlign: 'center' }}>Gửi</Text>
                            </TouchableOpacity>
                        </View>

                }

            </Modal>

        </>
    )
}
const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

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
        marginVertical: 6

    },
    rowItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 4
    },
    buttonSubmit: {
        display: 'flex',
        position: 'relative',
        bottom: 0,
        padding: 22,
        backgroundColor: CommonColors.primary

    },
    modalContainer: {
        backgroundColor: 'white',
        height: deviceHeight / 3,
        margin: 20,
        borderRadius: 22,
        padding: 22
    },
    textInput: {
        height: 40,
        borderColor: 'grey',
        // borderWidth: 1 ,
        borderBottomWidth: 0.4,
        borderRadius: 4,
        paddingHorizontal: 12,
        marginVertical: 8
    }

})
