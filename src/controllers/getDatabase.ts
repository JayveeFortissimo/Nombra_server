import data from "../config/dumpDatabase";

function getArrayFunction(req:any, res:any) {


  if(data.length <= 0) return res.json({message: 'There is no data in database!'})
    
   return res.json({ message: "OK", data: data });
}

export { getArrayFunction };
