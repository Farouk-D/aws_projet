const mongoose=require('mongoose');
const bcrypt=require('bcrypt')
const {isEmail}=require('validator');

const userSchema= new mongoose.Schema(
    {
        surName:{
            type:String,
            require:true,
            minLength:5,
            maxLength:50,
            trim:true,
            unique:true
        },
        profilImage:{
            type:String,
            default:"./uploads/profils/ramdon-image.png"
        },
        email:{
            type:String,
            require:true,
            validate:[isEmail],
            lowerCase:true,
            trim:true,
        },
        password:{
            type:String,
            require:true,
            max:1024,
            minLength:7,
            maxLength:15
        },
        friends:{
            type:[String]
        }

    },
    {
        timestamps:true,
    }
);
// la fonction a executer avant la creation d'un utilisateur
userSchema.pre("save",async function(next){
    const salt=await bcrypt.genSalt();
    this.password= await bcrypt.hash(this.password, salt);
    next();
});
const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;