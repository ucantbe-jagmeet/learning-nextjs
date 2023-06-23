import connectDb from "../../middleware/mongoose"
import User from "../../models/User"
var CryptoJS = require('crypto-js')
var jwt = require('jsonwebtoken')

const handler = async ( req, res) => {

    if(req.method == 'POST'){

        let user = await User.findOne({ "email": req.body.email})
        var bytes  = CryptoJS.AES.decrypt(user.password, process.env.CRYPTO_SECRET_KEY);
        var decryptedPass = bytes.toString(CryptoJS.enc.Utf8)
        
        if(user){
            if( req.body.email == user.email &&  req.body.password == decryptedPass ){
                var token = jwt.sign({name: user.name, email:user.email }, process.env.JWT_SECRET_TOKEN, { expiresIn:'2d'})
                res.status(200).json({success: true,token})
            }
           else{
            res.status(400).json({success: false, error : "Invalid Credentials"})
           }
        } else{
            res.status(400).json({ success: false, error: "user not found"})
        }

    } 
    else
    {
        res.status(400).json({error:'This Method is not Allowed'})
    }

}

export default connectDb(handler)