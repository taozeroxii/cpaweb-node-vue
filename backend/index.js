const express = require('express');
const server = express();
const PORT = 3000;

server.get('*',(req,res)=>{ res.json({ message:'server is start'})});

server.listen(PORT,() => console.log(`this server running on PORT : ${PORT}`))

