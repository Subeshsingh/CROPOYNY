import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';


const SearchScreen = () => {
    
    const [searchTerm, setSearchTerm] = useState("");

    // custom hook for searching and getting results;
    const [errorMess, searchApi, results] = useResults();

    // filter result by price
    const filterResByPrice = (price) =>{
        // price $, $$, $$$
        return results.filter(res => res.price === price );
    }

    return (
        <View style={{flex:1}}>
            <SearchBar term={searchTerm} 
                onTermChange={newterm => setSearchTerm(newterm)}
                onTermSubmit= {()=>searchApi(searchTerm)}
            />
            {errorMess ? <Text>{errorMess}</Text> : null}
           
            <ScrollView>
                <ResultList  results = {filterResByPrice("$")} title="Cost Effective"/>
                <ResultList  results = {filterResByPrice("$$")} title="Bit Pricier"/>
                <ResultList  results = {filterResByPrice("$$$")} title="Big Spender"/>
            </ScrollView>
              
        </View>
    );
}

export default SearchScreen;

const styles = StyleSheet.create({
    totalres:{
        marginLeft:15,
        marginBottom:20,
    }

});
