const express = require('express');
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./football_world.db');
const app = express();
const PORT = process.env.port || 3000;
const bodyParser = require('body-parser');

//Allow cross orgin
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Methods", "POST, PUT, GET, DELETE");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

app.use(bodyParser.json());

app.use(express.static("build"));

app.get('/products',(req,res)=>{
    const table = req.query.product;
    console.log(table);
    db.all(`SELECT * FROM ${table}`,(err, rows)=>{
        if(err){
            console.log(err);
        }else{
            res.send({rows});
        }
    });
});

app.post('/signin',(req,res)=>{
    const email = req.query.email;
    const password = req.query.password;

    db.get(`SELECT * FROM customers WHERE email='${email}' AND password='${password}'`,(err, row)=>{
        if(err){
            console.log(err);
        }else{
            if(!row) 
            {
                console.log('No user with those credententials!')
                res.send('User not found');
            }
            else res.send({row});
        }
    });
});

app.get('/signup',(req,res)=>
{
    const firstName = req.query.firstName;
    const lastName = req.query.lastName;
    const email = req.query.email;
    const phone = req.query.phone;
    const address = req.query.address+' '+req.query.city+' '+req.query.country;
    const password = req.query.password;

    console.log({
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        address: address,
        password: password
    })

    db.run(
        `INSERT INTO customers (name,last_name,email,phone_number,address,password)
         VALUES ('${firstName}','${lastName}','${email}','${phone}','${address}','${password}')`,
         
         err => err ? console.log(err) : res.send(`User ${email} succesfully added!`)
    )
})

app.listen(PORT);