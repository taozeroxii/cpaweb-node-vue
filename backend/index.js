const express = require('express');
const server = express();
const session = require('express-session')
const bodyParser = require("body-parser");
const { check, validationResult } = require('express-validator');
const PORT = 3000;

//ตั้งค่า session
server.use(session({
  secret: 'CpaWebsitemodifytest',
  resave: false,
  saveUninitialized: true,
  cookie: {  }
}))

//ตั้งค่าการ parse ตัวแปร client ที่ส่งข้อมูลเข้ามา
server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())
 
server.post('/',(req,res)=>res.json(req.body))

server.get('*',(req,res)=>{ res.end(`server is start`)});

server.listen(PORT,() => console.log(`this server running on PORT : ${PORT}`))

