import axios from 'axios';

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization : 'Bearer tXV3MTX6pzOrkQdY6enZ2yB_13YqnKVOR4wiXYlm2aU9_WvLkm9GLU4CA3W7cdPWl4svFdd72Hs4dKrAFKxlaVNhxdwQxEy7pgWy8Ebqr05uPzCCiActlVV4lHhBX3Yx'
    }
});