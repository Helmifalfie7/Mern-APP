import axios from "axios";
import { GET_CONTACTS } from "../constants/actiontypes";

export const getContacts=()=>dispatch=>{
    axios.get('api/contacts')
    .then(res => dispatch({type:GET_CONTACTS, payload:res.data}))
    .catch(err => console.log(err))
}

export const addcontacts=(newcontact)=>dispatch=>{
    axios.post('api/contacts/add', newcontact)
    .then(res => dispatch (getContacts()) )
    .catch(err => console.log(err))
}

export const deletecontacts=(idContact)=>dispatch=>{
    axios.delete(`api/contacts/delete/ ${idContact}`)
    .then(res => dispatch (getContacts()) )
    .catch(err => console.log(err))
}

export const editcontacts=(idContact, editedContact)=>dispatch=>{
    axios.put(`api/contacts/edit/ ${idContact}`,editedContact)
    .then(res => dispatch (getContacts()) )
    .catch(err => console.log(err))
}