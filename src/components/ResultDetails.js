import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const ResultDetails = ({result}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: result.image_url}}/>
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.rating}stars, {result.review_count}</Text>
        </View>
    )
}

export default ResultDetails;

const styles = StyleSheet.create({
    container:{
        marginLeft:15,
    },
    image:{
        width:200,
        height:120,
        marginBottom:5
    },
    name:{
        fontWeight:'bold',
        marginBottom:5,
    }
})
