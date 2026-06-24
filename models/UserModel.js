import mongoose from "mongoose";
import bcrypt, {genSalt} from "bcryptjs"

const UserSchema = new mongoose.Schema({
    username :{
        type : String,
        required : true,
        unique : true,
        trim : true,
    },
    email:{
        type: String,
        required : true,
        unique : true,
        lowercase : true,
        trim : true
    },
    password :{
        type : String,
        required : true
    },
    role : {
        type : String,
        enum : ["admin", "user"],
        default : 'user'
    },
},{
    timestamps : true
}
)

//fungsi untuk hask password saat register
UserSchema.pre('save', async function(){
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt)
    
})

//fungsi compare plain text dengan password hash
UserSchema.methods.comparePassword = async function(candidatePassword){
    return bcrypt.compare(candidatePassword, this.password)
}

const User = mongoose.model('User', UserSchema)

export default User