import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { Feather } from '@expo/vector-icons'; 


const SearchBar = ({term , onTermChange,onTermSubmit}) => {
    return (
        <View style={styles.background}>
            <Feather name="search" style={styles.iconStyle} color="black" />
            <TextInput style={styles.inputStyle}
             autoCapitalize="none"
             autoCorrect={false} 
             placeholder="Search"
             value={term} 
             onChangeText={onTermChange}
             onEndEditing={onTermSubmit}
            /> 
        </View>
    )
}

export default SearchBar;

const styles = StyleSheet.create({
    background:{
        backgroundColor:'rgba(0,0,0,.15)',
        marginVertical : 10,
        marginHorizontal: 15,
        height:50,
        display:'flex',
        flexDirection:'row',
        borderRadius: 10,
        paddingHorizontal:5,
    },
    inputStyle:{
        flex: 1,
        alignSelf:'center',
        fontSize: 18,
        color:'black',
    },
    iconStyle:{
        alignSelf:'center',
        fontSize:35,
        marginHorizontal:15,
    }
})
