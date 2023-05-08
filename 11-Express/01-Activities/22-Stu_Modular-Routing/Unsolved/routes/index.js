// TODO: Import express
const express =  require('express')

// TODO: Import modules for tips/feedback
const feedBackRouter = require('./feedback')

// TODO: Create app vaible to store the value of express()
const app = express()
// TODO: Use our routes
app.use('/feedback', feedBackRouter);
// TODO: Export app
module.exports = app;