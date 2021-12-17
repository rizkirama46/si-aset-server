const express = require('express')
const app = express()

const routers = require("./routers")

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/', routers)

app.listen(8000, () => {
  console.log(`Server started on 8000`);
});
