import ShoppingModel from "../models/ShoppingModel.js"
 

export const InputItems = (req,res)=>{
    res.render('Input_shopping_List')
}

export const SaveItems = async(req,res)=>{
    const{name, price, qty} = req.body
    console.log(req.body)
    const newItems = new ShoppingModel({
        name,
        price,
        qty
    })

    await newItems.save()
    res.redirect("/name")
}

export const nameOfItems = async (req, res)=>{
    const Shoplist = await ShoppingModel.find().lean()
    res.render("name",{
        Shoplist
    })
}

export const deletData = async (req,res)=>{
    await ShoppingModel.findByIdAndDelete(req.params.id).lean()
    res.redirect('/name')
}

export const editData = async (req,res)=>{
    const Shoplist = await ShoppingModel.findById(req.params.id).lean()
    res.render("Shoplist_edit", {
        Shoplist
    })
}

export const updatedData = async (req,res)=>{
    await ShoppingModel.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/name')
}