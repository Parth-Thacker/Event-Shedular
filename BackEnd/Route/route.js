const express = require("express")
const router = express.Router()
const Events = require("../model/eventModel")

router.get("/",(req,res)=>{
    res.send("ok")
})
router.post("v1/events",async(req,res)=>{
    console.log("hello");
    try{
        const {title,discription,location,startTime,endTime} = await req.body
        console.log(req.body);
    if(!title ||!discription ||!location||!startTime||!endTime){
        return res.status(400).json({
            status:"faield"
        })
    }
    else{
        const data= await Events.create({
            title:req.title,
            discription:req.discription,
            location:req.location,
            startTime:req.startTime,
            endTime:req.endTime
        })
        
        res.status(201).json({
            status:"ok",
            data:data
        }) 
    }
    }catch(e){
        res.status(400).json({
            status:"failed",
            message:e.message
        })
    }


})
router.get("/v1/events",async(req,res)=>{
    try{
        let data = await Events.find()
    res.json({
        status:"ok",
        data:data
    })
    }catch(e){
        res.status(400).json({
            status:"failed",
            message:e.message
        })
    }

})
router.get("/v1/events/:id",async(req,res)=>{
    try{
        let event = await Events.findOne({_id:req.params.id})
    res.json({
        status:"ok",
        data:event
    })
    }catch(e){
        res.status(404).json({
            status:"there is no event with this id",
            message:e.message
        })
    }

})
router.put("v1/events/:id",async(req,res)=>{
    try{
        const {title,discription,location} = await req.body
        if(!title ||!discription ||!location){
            return res.status(400).json({
                status:"faield"
            })
        }
        await Events.findOneAndUpdate(id, {title: title, description: description, location: location, startTime: startTime, endTime: endTime })
        const data = Events.find(req.params.id)
        res.json({
            status:"ok",
            data:data
        })
    }catch(e){
        res.status(400).json({
            status:'failed',
            message:e.message
        })
    }
})

router.delete("/v1/events/:id",async (req,res)=>{
    try{
        const event  = await Events.deleteOne({_id:req.params.id});
        res.status(204).json({
            status:"ok",
            message:"event deleted"
        })
    }
    catch(e){
        res.status(404).json({
            status:"failed",
            message:e.message
        })
    }


})

module.exports=router