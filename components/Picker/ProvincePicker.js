import React, { useState,useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { getProvince } from '../../utils/locationApi';




const ProvincePicker = ({ provinceSelected ,onSelected}) => {

    const [isLoading, setIsLoading] = useState(false);
    const [provinces, setProvinces] = useState([]);

    const _fetchProvinces = async () => {
        setIsLoading(true);
        let provinceData = await getProvince();
        let provinceDataArray = Object.values(provinceData.data);
        setProvinces(provinceDataArray);
        setIsLoading(false);
    }

    useEffect(() => {
        _fetchProvinces();
    }, []);



    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            {

                provinces && provinces.map((e, index) =>
                    <TouchableOpacity style={styles.provinceWrap}
                    key={index.toString()}
                        onPress={()=>onSelected(e)}
                    >
                        <Text>{e.name_with_type}</Text>
                    </TouchableOpacity>

                )
            }
        </ScrollView>
    )
}

export default ProvincePicker

const styles = StyleSheet.create({
    provinceWrap: {
        padding: 12,
        width:'100%',
        borderBottomWidth:0.2
    }
})
