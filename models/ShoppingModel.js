import mongoose, { Mongoose, now } from "mongoose";

const daftarBelanjaSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true
    },
    price:{
        type : Number,
        required : true
    },
    qty:{
        type : Number,
        required : true
    },
    date:{
        type : Date,
        default : now,
        required : true
    },
    status :{
        type : Boolean,
        default : false
    }
},{
    timestamps : true
})

export default mongoose.model('ShoppingList', daftarBelanjaSchema)