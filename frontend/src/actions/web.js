import axios from 'axios';
import {
    GET_PRODUCTS,


    
} from "./types";




import { 
	productsURL,
	
} from '../constants';



export const getProducts = () => dispatch => {
    axios.get(productsURL)
        .then(res => {
            dispatch({
                type: GET_PRODUCTS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}











