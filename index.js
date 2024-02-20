const app = require('./config/server');
const config = require('./config');

app.use('/', (_, res)=>{
    res.json({
        "status": "running"
    })
})

app.listen(config.port, ()=>{
    console.log(`API server is running on http://127.0.0.1:${config.port}`);
})