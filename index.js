import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
const app = express();


app.listen(4000,() => {
    console.log('server run on port',4000);
})
