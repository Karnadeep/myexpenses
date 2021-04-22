const express = require('express');
const config = require('config');
const colors = require('colors');
const db = require('./config/db');
//config.get({ path: './config/utils.env' });

const app = express()

db.authenticate().
    then(() => console.log('Connected to the Database')).
    catch(err => console.log(`Failed to connect to database ${err.message}`));

app.use(express.json({ extended: false }))

app.use('/myexpenses/transaction', require('./routes/transRoute'));

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server running on port:  ${port}`.yellow.bold));


