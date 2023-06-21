import connectDb from "../../middleware/mongoose"
import User from "../../models/User"
var CryptoJS = require('crypto-js')

const handler = async ( req, res) => {

    if(req.method == 'POST'){

        let user = await User.findOne({ "email": req.body.email})
        var bytes  = CryptoJS.AES.decrypt(user.password, process.env.CRYPTO_SECRET_KEY);
        var decryptedPass = bytes.toString(CryptoJS.enc.Utf8)
        console.log(decryptedPass);
        if(user){
            if( (req.body.email == user.email )&& ( req.body.password == decryptedPass) ){
                res.status(200).json({msg:"success", name: user.name, email:user.email})
            }
           else{
            res.status(400).json({msg:"not success", error : "Invalid Credentials"})
           }
        } else{
            res.status(400).json({msg:"not success", error:`user not found with email ${user.email}`})
        }

    } 
    else
    {
        res.status(400).json({error:'This Method is not Allowed'})
    }

}

export default connectDb(handler)