import app from "./app";
import config from './src/config/config';
import cors from 'cors';

app.use(cors());


app.listen(config.port, ()=> {
    console.log(`server runnig on port: ${config.port}`)
})