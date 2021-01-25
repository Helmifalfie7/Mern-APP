const mongoose = require ('mongoose');
const schema = mongoose.Schema;

const ContactSchema = new schema({
    name:{
        type:String
    },
    email:{
        type:String,
        unique:true,
    },
    phone:{
        type:Number
    },
    datecreation:{
        type:String,
        default:Date.now()
    },
})

module.exports=Contact=mongoose.model("Contact",ContactSchema)