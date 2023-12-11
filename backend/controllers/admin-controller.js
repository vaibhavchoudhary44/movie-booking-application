const jwt = require('jwt');
const Admin  = require('../models/Admin');
const bcrypt = require('bcrypt');

const addDMIN =async (req,res,next)=>{
    const{email,password}=req.body;
    try{
    let existingAdmin = await Admin.findOne({email})
    }
    catch (err){
        return console.log(err);

    }
    if(existingAdmin){
        return res.status(400).json({message : "Admin already exists"})
    }
    let admin;
    const hashedpassword =bcrypt.hashSync(password);
    try{
          admin = new Admin ({email,password:hashedPassword});
          admin = await admin.save();

    }
    catch(err){
        return console.log(err);

    }
    if (!admin){
        return res.status(400).json ({message:"Unable to create admin"});

    }
    return res.status(201).json({message: "Admin created", admin: admin})
    
}