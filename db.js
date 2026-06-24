

import mongoose from "mongoose"

mongoose.connect(
    'mongodb://localhost:27017/MongoDB-Mervin'
)

const db = mongoose.connection

db.on('connected', ()=>{
    console.log('Database Connected!')
})

db.on('error', (err) =>{
    console.log('MongoDB Connection Error ' + err)
})

export default mongoose