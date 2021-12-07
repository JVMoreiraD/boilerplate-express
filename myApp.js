require('dotenv').config();
let express = require('express');
const app = express();

app.use((req, res, next) => {
    const method = req.method;
    const path = req.path;
    const ip = req.ip;

    console.log(`${method} ${path} - ${ip}`);
    next();
});

console.log("Hello World")

// app.get("/", function(req, res){
//     res.send('Hello Express');
// })
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req,res)=>{
	res.sendFile(__dirname + "/views/index.html");
});


// app.get("/json", (req,res)=>{
// 	res.json({
// 		"message": "response"
// 	});
// });


app.get("/json", function(req,res){
    // Observação se usar Json no lugar de json no valor de message não é possivel passar do teste
    var jsonResponse = {"message": "Hello json"};

    if (process.env.MESSAGE_STYLE === 'uppercase'){
       jsonResponse.message = jsonResponse.message.toUpperCase();
    }

    res.json(jsonResponse);
})



 module.exports = app;
