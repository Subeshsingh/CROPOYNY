import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View ,FlatList,Image} from 'react-native'

import yelp from '../api/Yelp';

const ResultShowScreen = ({navigation}) => {
    const id = navigation.getParam("id");
    const [result, setResult] = useState(null);

    console.log(result);

    useEffect(() => {
        getResult(id);
    }, []);
    
    const getResult = (id) =>{
        yelp.get(`/${id}`)
        .then(response =>{
            setResult(response.data);
        }).catch(error=>{
            console.log("Something went wrong");
        });
    };

    if(!result){
        return null;
    };

    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList 
                data={result.photos}
                keyExtractor={(photo)=>photo}
                renderItem={({item})=>{
                    return(
                        <Image style={styles.image} source={{uri: item}}/>
                    );
                }}
            />
        </View>
    )
}

export default ResultShowScreen;

const styles = StyleSheet.create({
    image:{
        height:120,
        width:200,
        margin:5, 
    }
})
