import { Request, Response } from "express";


export class CalendarEventController { 
    static async insert(req: Request, res: Response) {
        console.log('to aqui ')
        const { data } = req.body
        console.log({data})
        if(data) {
            
        }

        return res.sendStatus(400)
    }
}