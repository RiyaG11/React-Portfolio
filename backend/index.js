const express = require('express');
require('./db/config');
require('dotenv').config();
const cors = require('cors');
const Query = require('./db/query');
let PORT = process.env.PORT || 6010;
const app = express();
app.use(express.json());
app.use(cors());

app.post('/addquery', async(req,res)=>{
    let query= new Query(req.body);
    let result = await query.save();
    res.send(result);
    console.log(result);
})
app.listen(PORT);