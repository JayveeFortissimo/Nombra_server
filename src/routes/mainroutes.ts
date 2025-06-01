import { Router } from "express";
import { getArrayFunction } from "../controllers/getDatabase";
import { addData } from "../controllers/addDatabse";
import { editUser } from "../controllers/editData";
import { deleteUser } from "../controllers/delete";
const routes = Router();


routes.get('/', getArrayFunction);
routes.post('/addUser', addData);
routes.put('/edit/:id', editUser);
routes.delete('/delete/:id', deleteUser);

export default routes;
