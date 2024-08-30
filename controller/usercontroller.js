import User from "../model/usermodel.js";
import bcrypt from 'bcrypt'
export const register = async(req,res)=>{
try {
    const userinfo = req.body;
    const {name, email ,password} = userinfo;
    const userExist = await User.findOne({email})
    if(userExist){
        return res.status(409).json({
            message:"email already exists"
        })
    }
    const hashedPassword = await bcrypt.hash(password,10)
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })
    res.status(200).json({
        message:"user created successfully",
        user
    })
} catch (error) {
    res.status(401).json({
        message:"error registering user",
        error
    })
}
}
export const GetUser = async(req,res)=>{
try {
    const detail = await User.find();
res.status(200).json({
    message:"user details",
    detail
})
} catch (error) {
   res.status(500).json({
    message:"error getting user details",
    error
   }) 
}
}

export const UpdateUser = async(req,res)=>{
try {
    const {id} = req.params;
    const updateinfo = req.body;
    const updatedetail =await User.findByIdAndUpdate(id,updateinfo);
    res.status(200).json({
        message:"user details updated successfully",
        updatedetail
    })
} catch (error) {
    res.status(500).json({
    message:"error updating user details",
    error
   })
    
}
}

export const DeleteUser = async(req,res)=>{
try {
    const {id} = req.params;
    const deleteuser = await User.findByIdAndDelete(id);
    res.status(200).json({
        message:"user deleted successfully",
        deleteuser
    })
} catch (error) {
    res.status(500).json({
        message:"error deleting user",
        error
    })
}
}

export const login = async(req,res)=>{
try {
    const user = req.body;
    const {email, password} = user;
    const userExist = await User.findOne({email});
    if(!userExist){
        return res.status(401).json({
            message:"User not found"
        })
    }
    const isMatch = await bcrypt.compare(password,userExist.password)
    if(!isMatch){
        return res.status(401).json({
            message:"invalid credential"
        })
    }
    res.status(200).json({
        message:"User logged in successfully",
        user:userExist
    })
} catch (error) {
    res.status(401).json({
        message:"error logging in user",
        error
    })
}
}