import data from "../config/dumpDatabase";
import { Request, Response, RequestHandler } from "express";
                      
const getArrayFunction: RequestHandler = (req: Request, res: Response) =>  {
  if (data.length <= 0) {
    res.json({ message: "There is no data in database!" });
    return;
  }

  res.json({ message: "OK", data: data });
}

export { getArrayFunction };
