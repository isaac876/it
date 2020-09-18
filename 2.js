var tend=require("http")
var our=require("fs")
tend.createServer(function(coby,isaac){
isaac.setHeader("content-type","text/html")
if(coby.url=="/")
isaac.write(our.readFileSync("new 2.html"))
if(coby.url=="/user")
isaac.write("ren")
isaac.end("url")



}).listen(process.env.PORT||80) 
