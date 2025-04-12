let express = require("express");
let cors = require("cors");
const { request } = require("http");

let app = express();
app.use(cors());
app.get("/ping",(request,response)=>{response.send("Please Enter Number")});
app.get("/num",(request,response)=>{
    let str = request.query.number;
    let n =parseInt(str);
    let fact = 1;
    for(let i =1; i <=n; i++)
{
    fact = fact*i ;
}
  response.send(`factorial=${fact}`);
});
app.listen(9001,()=>{console.log("express is active")})
