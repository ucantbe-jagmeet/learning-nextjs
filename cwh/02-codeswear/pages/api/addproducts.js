import Product from "../../models/Product"
import connectDb from "../../middleware/mongoose"

const handler = async ( req, res) => {

    if(req.method==='POST'){
        for (let i = 0; i < req.body.length; i++) {
            const { img, title, slug, desc, category, size, color, price, availableQty } = req.body[i];
            let product = new Product({ img, title, slug, desc, category, size, color, price, availableQty })
            await product.save()
        }
        res.status(200).json({msg:"Success"})

    } else{
        res.status(400).json({error:'This Method is not Allowed'})
    }

}

export default connectDb(handler)