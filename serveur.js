const express = require ('express')
const app = express()

// creation of the server
const port = process.env.PORT || 4000
app.listen(port, (err)=>{
    err ? console.log(err): console.log(`the server is running on ${port}`)
})

//  the connection of the data base
const connectDB = require ('./config/connectDB')
connectDB();

//mideleware
app.use(express.json())

//connecting the routes with the main app
app.use('/api/contacts', require('./routes/contact'))