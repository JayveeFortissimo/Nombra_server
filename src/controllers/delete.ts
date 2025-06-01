import data from "../config/dumpDatabase";
import { Request, Response, RequestHandler } from "express";


const deleteUser: RequestHandler = (req:Request, res: Response) =>{
     const id = +req.params.id;
     
     const findDeletedUser = data.find(pro => pro.id === id);

     if(!findDeletedUser){
        res.json({message:"User not found"});
        return
     }
  
  const deletedData =  data.filter(pro => pro.id !== id);
  
  data.length = 0;
  data.push(...deletedData);

  res.json({message: "Deleted Succesfully Done!"})
}


export {deleteUser}