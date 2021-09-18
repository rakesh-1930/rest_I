import express from 'express';
import bodyParser from 'body-parser';
import dotEnv from 'dotenv';
import { BankDetail } from './database/index.js';
import bank from './bank.js'

import Connections from './database/connectDB.js'
;
const app = express();

dotEnv.config({path: './config.env'});

const password = process.env.PASSWORD;


app.get('/', (req, res) => {
    res.send('Hello Home page.')
})

const data = async () => {
    try {
        await BankDetail.deleteMany();
        await BankDetail.insertMany(bank)
        console.log('Data loaded Successfully')
        
    }catch (err) {
        console.log(err.message)
    }
}




Connections(password);

app.listen(process.env.PORT, ()=> {
    console.log("Server is Active and Live!");
})


data();
