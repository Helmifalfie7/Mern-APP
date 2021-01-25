const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

//1-Post
//Path : localhost:5000/api/contacts/add
//add a contact to Data base
//privte / public 

// router.post('/add',(req,res)=>{
//     const {name, email, phone}=req.body
//     const newcontact = new Contact({name,email,phone})
    
//     // saving in DB
//     newcontact.save()
//     .then(contact =>res.json({msg:'Contact added',contact}))
//     .catch(err => console.log(err))
// }) 

router.post ('/add', async (req,res)=>{
    const {name, email, phone}=req.body
    try {
        const newcontact = new Contact({name,email,phone})
        let contactsaved = await newcontact.save();
        res.json({msg:'New Contact added',contactsaved})

    } catch (err) {
        console.log(err)
    }
}) 

//2-Get
//Path : localhost:5000/api/contacts/
//Fitch contacts from Data base
//public

router.get('/', async (req, res)=>{
    try {
        const allcontacts = await Contact.find();
        res.json({msg:'All contacts fitched',allcontacts})
    } catch (error) {
        console.log(error);
    }
})

//3-Edit
//Path : localhost:5000/api/contacts/edit/:id (modifing by id)
//edit contact from Data base
//public

router.put('/edit/:_id', async(req,res)=>{
    const {_id} = req.params
    const updated = {$set:req.body}
    try {
        const contactupdated = await Contact.findOneAndUpdate({_id},{...updated})
        const allcontact = await Contact.find()
        res.json({msg:'contacts updated',contactupdated,allcontact})
    } catch (error) {
        res.json(error)
    }
})

//4-Delete
//Path : localhost:5000/api/contacts/edit/:id (modifing by id)
//edit contact from Data base
//public

router.delete('/delete/:_id', async(req,res)=>{
    const {_id} = req.params
    
    try {
        const contactdeleted = await Contact.findByIdAndDelete({_id})
        const allcontact = await Contact.find()
        res.json({msg:'contact deleted',contactdeleted,allcontact})
    } catch (error) {
        res.json(error)
    }
})

module.exports= router

