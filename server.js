const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const connection = require('./db');


app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.get('/api', function(req,res){
    connection.query(`SELECT * from assets a LEFT JOIN departmentlocations dl ON dl.ID = a.DepartmentLocationID 
    LEFT JOIN departments d ON d.ID =dl.DepartmentID`, function (err,result){
        res.json(result)
    });
});

app.listen(port,()=>{
    console.log("Server is running on port "+port);
});

