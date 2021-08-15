import express from 'express';

import {getColleges, addCollege} from '../controllers/colleges.js';

const router = express.Router();

router.get('/', (req,res)=>{
    res.send("working");
});

router.get('/colleges',(req,res)=>{
    res.send("working");
});

router.get('/addCollege',(req,res)=>{
    const college = req.body;
    const newCollege = new newCollege(college);
    try{
        await newCollege.save();
        res.status(201).json(newCollege);
    }
    catch{
        res.status(409).json({message:error.message});
    }
});

router.get('/searchcolleges',(req,res)=>{
    res.send("working");
});
export default router;