import express from 'express';
import routes from './src/routes/mainroutes';
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
export default app;