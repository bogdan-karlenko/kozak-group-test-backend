'use strict';

const express = require('express');
const app = express();
const router = express.Router();

const cors = require('cors');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

require('dotenv').config();
require('./models/Employee');

app.use(cors());
app.use(bodyParser.json());

mongoose.set('useCreateIndex', true);
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });

app.use(router);

router.get('/', (req, res) => {
    res.send('kozak-group-test-backend API');
})

app.use('/employees', require('./routes/employees'));

app.listen(process.env.PORT || 3000, () => {
    console.log('-------------------------')
    console.log('listening on port', process.env.PORT || 3000, '\n');
    console.log('-------------------------');
});
