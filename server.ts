import app from "./app";
import config from './src/config/config';


app.listen(config.port, ()=>{
    console.log(`Port are working port: ${config.port}`)
})