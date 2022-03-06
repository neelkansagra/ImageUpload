const express = require('express')
const cors = require('cors')
const fs = require('fs')

const util = require('util');
const readFile = util.promisify(fs.readFile);

const app = express()
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true }))

app.post('/',(req,res) =>{
    const arr = req.body.Image
    fs.writeFile("image.txt",arr,(err) =>{
        console.log(err)
    })
    res.statusCode = 200
    res.send("done")
    return
})
app.get('/',(req,res) =>{
    let image =''
    readFile("image.txt").then((data) =>{
        image = data.toString()
        res.send(JSON.stringify({"image":image}))
    }).catch((err) => console.log(err))    
})
app.listen(9000)