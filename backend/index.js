var express = require('express');
var app = express();
var cors = require('cors');
var database = require('./config/database');
var port = process.env.PORT || 3005;

// Connect to our database
database.connect((err) => {
    // dra
    if (err) throw err;
});

// This is to allow our api for cross-origin resource sharing
app.use(cors());

// This is to allow our api for parsing json
app.use(express.json());

// This is to allow our api to receive data from a client app
app.use(express.urlencoded({
    extended: true
}));

// Register routes in the main index.js
app.use('/', [
    require('./routes/timeline'),
    require('./routes/register'),
    require('./routes/tweet'),
    require('./routes/auth')
]);

app.get('/users', function (req, res) {
    res.send('hello world')
  })

// app.post('/register', (req, res) => {
// let sql = `INSERT INTO users () VALUES (
//     '${req.body.user_id}',
//     '${req.body.content}',
//     '${moment().utc().format("YYYY-MM-DD hh:mm:ss")}'
// )`;

// database.query(sql, (err, result) => {
//     if (err) {
//         res.status(400).json({
//             message: err
//         });
//         return;
//     }

//     // If there is no error
//     res.status(200).json({
//         status: 200,
//         success: true
//     });
        
// });
// });


// http://localhost:3005/tweets - GET, POST
// http://localhost:3005/tweets/user/:id - GET
// http://localhost:3005/tweets/:id - DELETE
// http://localhost:3005/authenticate - POST for login session



app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});