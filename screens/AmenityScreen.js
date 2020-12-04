import React,{useState} from 'react'
import { StyleSheet, Text, View,Button } from 'react-native'
import auth from '@react-native-firebase/auth';
const AmenityScreen = () => {


    // If null, no SMS has been sent
    const [confirm, setConfirm] = useState(null);

    const [code, setCode] = useState('');

    // Handle the button press
    async function signInWithPhoneNumber(phoneNumber) {
        try {
            const confirmation = await auth().verifyPhoneNumber('+84976904548')
            console.warn(confirmation.verificationId);
            //  setConfirm(confirmation);


        } catch (error) {
            console.warn('error: ', error);
        }

    }

    async function confirmCode() {
        try {
            await confirm.confirm(code);
        } catch (error) {
            console.log('Invalid code.');
        }
    }

    // if (!confirm) {
    //     return (
            
    //         <Button
    //             title="Phone Number Sign In"
    //             onPress={() => signInWithPhoneNumber('+16505553434')}
    //         />
    //     );
    // }


    return (
        <View>
             <Button
                title="Phone Number Sign In"
                onPress={() => signInWithPhoneNumber('+16505553434')}
            />
            <Text>Amenity Screen</Text>
        </View>
    )
}

export default AmenityScreen

const styles = StyleSheet.create({})
