import React, { useRef } from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';


const CarouselCard = () => {
    return (
        <Card>

            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />

        </Card>

    )
}

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;


const NewsCarousel = () => {

    const _refSlideCarouse = useRef();

    const carouselData = Array(6).fill({});

    return (
        <Carousel
            layout={"default"}
            ref={_refSlideCarouse}
            data={carouselData}
            sliderWidth={deviceWidth}
            itemWidth={240}
            renderItem={({ item }) => <CarouselCard />}
        />


    )
}


export default NewsCarousel

const styles = StyleSheet.create({

})
