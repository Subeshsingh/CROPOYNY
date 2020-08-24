import { useEffect, useState} from 'react';
import yelp from '../api/Yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMess, setErrorMess] = useState();
    
    useEffect(() => {
        searchApi("fish");
    }, []);

    const searchApi = (term)=> {
        yelp.get('/search', {
            params: {
                limit: 50,
                term,
                location: 'New York City',
            }
        }).then( (response )=> {
            setResults(response.data.businesses);
            setErrorMess("");
        }).catch( (error) => { 
            setErrorMess("Somthing went wrong, try again after some time");
          });
    };

    return [errorMess, searchApi, results];
};