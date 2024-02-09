const app = require('./config/server');
const config = require('./config');
const env = process.env.NODE_ENV || 'development';

app.use('/', (_, res)=>{
    res.json({
        "status": "running"
    })
})

app.listen(config[env].port, ()=>{
    console.log(`API server is running on http://127.0.0.1:${config[env].port}`);
})