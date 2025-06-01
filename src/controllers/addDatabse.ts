import data from "../config/dumpDatabase";
import { Request, Response, RequestHandler } from "express";

const addData: RequestHandler = (req: Request, res: Response) => {
    const { name, age, instruments, address } = req.body;
    
    const checking = data.some(pro => pro.name === name);
    
    if (checking) {
        res.json({ message: 'Name already exists!' });
        return;
    }

   
    const id = Math.floor(Math.random() * 2000);
  

    data.push({ id , name, age, instruments, address });
    res.json({ 
        message: "Successfully added!", 
        data: { name, age, instruments, address }
    });
}

export { addData };