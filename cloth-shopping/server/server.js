const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
 
if(process.env.NODE_ENV !== 'production') require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SEVRE_KEY);

const app = express();
const port  = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}))
app.use(cors());



// if(process.env.NODE_ENV === 'production'){

// }
app.post('/payment',(req,res) => {
    const body = {
        source: req.body.token.id,
        amount : req.body.amount,
        currency : 'usd'
    };

})

app.listen(port,error => {
    if(error) throw error;
    console.log('Server running on port' + port);

})