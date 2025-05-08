const express = require('express');
const cors = require('cors')
const app = express()
app.use(cors())
app.get('/api', (req,res)=> {
    const unix = Date.now();
    const utc = new Date().toUTCString()
    res.json({"unix":unix,"utc":utc })
})
app.get('/api/:date', (req, res)=>{
    const param = req.params.date;
    const unix = Number(param)
    const date = new Date(unix)
    if (isNaN(unix)) {
        const date = new Date(param)
        console.log(date)
        if (!isNaN(date.getTime())){
            const unix = date.getTime()
            console.log('yha hu')
            res.json({"unix":unix, "utc":date.toUTCString()})
        } else {
            res.json({ "error" : "Invalid Date" })
        }
    } else {
            res.json({"unix":unix, "utc":date.toUTCString()})
    }
})
app.listen(3000, console.log('server is up'))