const express = require('express');
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./football_world.db');
const app = express();
const PORT = process.env.port || 5555;
const bodyParser = require('body-parser');

//Allow cross orgin
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Methods", "POST, PUT, GET, DELETE");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

app.use(bodyParser.json());

//app.use(express.static("build"));

app.get('/boots',(req,res)=>{
    db.all(`SELECT * FROM boots`,(err, rows)=>{
        if(err){
            console.log(err);
        }else{
            res.send({boots: rows});
        }
    });
});

app.listen(PORT);