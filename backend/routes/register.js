var express = require('express');
// var cryptr = require('cryptr');
var app = express();
var database = require('../config/database');
var authValidations = require('../validations/auth');

// Handles authentication for the users
app.post('/register', (req, res) => {
    var today = new Date();
    console.log('=============================req', req.body)
    // var encryptedString = cryptr.encrypt(;
    var users={
        "name":req.body.username,
        "email":req.body.email,
        "password":req.body.password,
        "created_at":today,
        "updated_at":today
    }
    var sql = `INSERT INTO users (username, email, password) VALUES ('${users.name}', '${users.email}', '${users.password}')`
    database.query(sql,(error, results) => {
    // database.query('INSERT INTO users SET ?',users, function (error, results, fields) {
      if (error) {
        res.json({
            status:400,
            message:'there are some error with query'
        })
      }else{
          res.json({
            status:200,
            data:results,
            message:'user registered sucessfully'
        })
      }
    //   if (err) {
    //     res.status(400).send(err);
    //     return;
    // }

    // if (result.length) res.json(result[0]);
    // else res.json({
    //     id : "",
    //     message : "Wrong username or password!"
    // });

    });
})
module.exports = app;
