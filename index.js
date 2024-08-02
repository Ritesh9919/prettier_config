
const express = require('express')
const port = 8000;
const app = express();


const obj = {
    name:ritesh
    age:22
}
app.get('/', (req, res)=> {
    res.send('Hello World');
})



app.listen(port, ()=> {
    console.log(`Server is running on port:${port}`);
})


