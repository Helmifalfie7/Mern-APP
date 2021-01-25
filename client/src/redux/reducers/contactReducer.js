import {GET_CONTACTS} from '../constants/actiontypes'
const initState ={
    contacts:[]
}

export const contactReducer = (state= initState, {type, payload}) =>{
    switch (type) {
        case GET_CONTACTS:
            return {
                ...state,
                contact: payload,
            }; 
        default :
            return state;
    }
};