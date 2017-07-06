var http=require('http');
http.createServer((req,res)=>{
  res.write("hello http example");
  res.end();
}).listen(4000);
