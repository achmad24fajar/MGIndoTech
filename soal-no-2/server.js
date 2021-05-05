const express = require('express')
const mongodb = require('mongoose');
require('dotenv/config');
var bodyParser = require('body-parser');

const router = require('./src/routes')

mongodb.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology:true}, () => {
	console.log("Conected to database")
})

const app = express();
const PORT = process.env.PORT || 5000

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use('/api/v1', router)
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`))