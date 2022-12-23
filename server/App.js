const express = require('express');
const app = express();
const userRouter = require('./Routes/userRoutes')
const cors = require("cors")
app.use(cors())
app.use(express.json({ limit: '10kb' }));
app.use('/api/v1/users', userRouter);


module.exports = app;