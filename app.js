import './db.js'
import express from 'express'
import {engine} from 'express-handlebars'


const app = express()
const port = 3000


app.engine('handlebars', engine());
app.set('view engine', 'handlebars')
app.set('views', './views')

app.use(express.urlencoded({
    extended : true
}))

app.use(express.json())

import ShoppingListRoutes from "./routes/ShoppingListRoutes.js"

app.use("/", ShoppingListRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})