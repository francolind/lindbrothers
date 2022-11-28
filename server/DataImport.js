import express from "express";
import user from '../server/models/userModels.js'
import users from '../server/data/users.js'


const ImportData = express.Router();

ImportData.post("/user",async (req,res)=>{
    await user.remove({});
    const importUser = await user.insertMany(users);
    res.send({importUser});

});
export default ImportData;
