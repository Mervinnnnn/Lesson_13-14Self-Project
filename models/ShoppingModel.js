import mongoose, { Mongoose } from "mongoose";

const daftarBelanjaSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true
    },
    harga:{
        type : Number,
        required : true
    },
    qty:{
        type : Number,
        required : true
    },
    date:{
        type : Date,
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