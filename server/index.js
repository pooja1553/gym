const dotenv = require('dotenv');
const express = require('express');
const app = express();

dotenv.config({path:'./config.env'});
require('./db/conn');
const port = process.env.PORT;
const Contact = require('./models/contactSchema');
const Login = require('./models/loginSchema');
const Enroll = require('./models/EnrollSchema');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.post('/contact',async(req,res)=>{
    try{
        const contact = new Contact({
            name:req.body.name,
            email:req.body.email,
            message:req.body.message,
        })
        const created = await contact.save();
        // console.log(created);
        res.status(200).send("Message saved");
    }catch(e){
        res.status(400).send(e);
    }
})

app.post('/enroll',async(req,res)=>{
    try{
        const enroll = new Enroll({
            name:req.body.name,
            email:req.body.email,
            age:req.body.age,
            mobile:req.body.mobile,
            gender:req.body.gender,
            address:req.body.address,
            plan:req.body.plan
        })
        const enrol = await enroll.save();
        // console.log(sign);
        res.status(200).send("Enrollment");
    }catch(e){
        res.status(400).send(e);
    }
})


app.post('/signup',async(req,res)=>{
    try{
        const signup = new Login({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            mobile:req.body.mobile,
            address:req.body.address
        })
        const sign = await signup.save();
        // console.log(sign);
        res.status(200).send("Registered");
    }catch(e){
        res.status(400).send(e);
    }
})

app.post('/login',async(req,res)=>{
    try{
        const email = req.body.email;
        const password = req.body.password;
        const user = await Login.findOne({email:email});
        console.log(user);
        if(user){
            if(password===user.password){
                res.status(200).send("Correct password");
            }
            else{
                res.status(400).send("Incorrect password");
            }
        }
        else{
            res.status(400).send("User not found");
        }
       
    }catch(e){
        console.log(e);
    }
})

// app.get('/enroll',async(req,res)=>{
//     try{
//         const enroll = new Enroll({
//             name:'pooja patidar',
//             email:'pooja@gmail.com',
//             age:22,
//             mobile:9876543210,
//             gender:"Female",
//             address:"Indore",
//             plan:6
//         })
//         const created = await enroll.save();
//         console.log(created);
//     }catch(e){
//         console.log(e);
//     }
// })

app.get('/enroll',async(req,res)=>{
    try{
        const enroll = new Contact({
            name:'pooja patidar',
            email:'pooja@gmail.com',
            message:"hii"
        })
        const created = await enroll.save();
        console.log(created);
    }catch(e){
        console.log(e);
    }
})

app.listen(port,()=>{
    console.log("Server establish");
})