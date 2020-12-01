import React, { useRef } from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';


import {CarForRents} from '../../sampleData';

const CarouselCard = ({item}) => {
    return (
        <Card >

            <Card.Cover  
                source={{ uri: item.image }} 
                resizeMode={'contain'}
            />

        </Card>

    )
}

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;


const NewsCarousel = () => {

    const _refSlideCarouse = useRef();

    const carouselData = Array(6).fill({});

    return (
        <ScrollView>
            <Carousel
                layout={"default"}
                ref={_refSlideCarouse}
                data={CarForRents}
                sliderWidth={deviceWidth}
                itemWidth={240}
                renderItem={({ item }) => <CarouselCard item={item}/>}
            />
        </ScrollView>



    )
}


export default NewsCarousel

const styles = StyleSheet.create({

})
