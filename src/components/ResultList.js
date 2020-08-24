import React from 'react'
import { StyleSheet, Text, View ,FlatList,TouchableOpacity} from 'react-native'
import {withNavigation} from 'react-navigation';

import ResultDetails from './ResultDetails'



const ResultList = ({title,results,navigation}) => {

    if(!results.length){
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>{title}</Text>
            <FlatList 
                data={results}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={result=>result.id}
                renderItem={({item})=>{
                return (
                    <TouchableOpacity onPress={()=>navigation.navigate("ResultShow",{id : item.id})}>
                        <ResultDetails result ={item}/>
                    </TouchableOpacity>
                   );
                }}
            />
        </View>
    )
}

export default withNavigation(ResultList);

const styles = StyleSheet.create({
    container:{
        marginBottom:10,
    },
    heading:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:15,
        marginBottom:5,
    }
});
