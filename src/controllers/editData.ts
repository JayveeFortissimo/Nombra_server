import data from "../config/dumpDatabase";

import { Response, Request, RequestHandler } from "express";

const editUser: RequestHandler = (req: Request, res: Response) => {
  const { name, age, instruments, address } = req.body;
  const id = +req.params.id;

  const findById = data.find((pro) => pro.id === id);

  if (!findById) {
    res.json({ message: "User Not found" });
    return;
  }

  const updatedData = data.map((pro) => {
    if (pro.id === id) {
      return {
        ...pro,
        id: id,
        name: name,
        age: age,
        instruments: instruments,
        address: address,
      };
    }
    return pro;
  });

  data.length = 0;
  data.push(...updatedData);
 
  res.json({ message: "Edit Successfully!" });
};

export { editUser };
