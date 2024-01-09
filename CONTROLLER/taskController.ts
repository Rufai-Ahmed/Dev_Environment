import { Request, Response } from "express";
import taskModel from "../MODEL/taskModel";


export const createTask = async(req:Request, res:Response)=>{
    try {
        const {task} = req.body

        const body = await taskModel.create()

        return res.status(201).json({
            message:"Task successfuly created"
        }) 
    } catch (error) {
        return res.status(404).json({
            message:"An error occured creating task"
        })
    }
}

export const readTasks = async(req:Request, res:Response)=>{
    try {

        const task = await taskModel.find()

        return res.status(201).json({
            message:"Task successfuly created",
            data:task
        }) 
    } catch (error) {
        return res.status(404).json({
            message:"An error occured creating task"
        })
    }
}

