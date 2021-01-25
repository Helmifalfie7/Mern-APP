import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getContacts } from '../redux/actions/contactActions'
import {ContactCard} from './ContactCard'


 const ContactList =()=> {
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(getContacts());

    },[]);
    const contact = useSelector(state => state.contacts.contact)
    return(
        <div>{
            contact&&contact.map((contact)=> (<ContactCard key ={contact._id} contact ={contact}/>))
            }
           
        </div>
    );
};
 export default ContactList