const express = require('express')
const app = express()
const cors = require("cors")

const routers = require("./routers")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/', routers)

app.listen(8000, () => {
  console.log(`Server started on 8000`);
});
