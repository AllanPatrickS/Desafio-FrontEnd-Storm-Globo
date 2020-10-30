require('dotenv').config();
const app = require('express')(),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    routes = require('./src/routes/routes');

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mongoUri = process.env.DB_CONN;

require("mongoose").connect(mongoUri, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
}, function (err, res) {
    if (err) {
        return console.error('Error connecting', err);
    }
    console.log('Connected successfully');
});

routes(app);

var PORT = Number(process.env.PORT);

app.listen(PORT, function () {
    console.log(`App listening on port ${PORT}`);
});
