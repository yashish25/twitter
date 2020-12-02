var express = require('express');
var app = express();
var database = require('../config/database');
var moment = require('moment');



app.get('/users/timeline', (req, res) => {
    let sql = `select tt.content, tt.dt, u.username from (select t.content, temp.user_id, temp.dt from (select max(t.date_time) as dt, t.user_id from tweets as t group by user_id) as temp left join tweets as t on t.date_time = temp.dt) as tt left join users as u on tt.user_id = u.id;`;

    database.query(sql, (err, result) => {
        if (err) {
            res.status(400).json({
                message: err
            });
            return;
        }

        if (result.length) res.json(result);
        else res.json({});        
    });
});


module.exports = app;