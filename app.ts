import express from 'express';
import routes from './src/routes/mainroutes';

const app = express();

app.use(routes);


export default app;