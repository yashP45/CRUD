const app = require('./App')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
    '<password>',
    process.env.DATABASE_PASSWORD
);

mongoose
    .connect(DB, {
        useNewUrlParser: true,
    })
    .then(() => console.log('DB connection successful!'));


// Server Connection
const port = 8001;
const server = app.listen(port, () => {
    console.log("App running .......... ")
})