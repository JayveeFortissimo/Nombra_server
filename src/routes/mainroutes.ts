import express, { Router } from "express";
import { getArrayFunction } from "../controllers/getDatabase";

const routes = express.Router();



routes.get('/', getArrayFunction);





export default routes;
