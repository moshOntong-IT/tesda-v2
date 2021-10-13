const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const connection = require('./db');


app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.get('/api', function(req,res){
    connection.query("SELECT * from assets", function (err,result){
        res.send(result)
    });
});

app.listen(port,()=>{
    console.log("Server is running on port "+port);
});

