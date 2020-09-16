var tend=require("http")
var our=require("fs")
tend.createServer(function(coby,isaac){
isaac.setHeader("content-type","text/html")
isaac.write(our.readFileSync("new 2.html"))

isaac.end("url")



}).listen(process.env.PORT||80) 
