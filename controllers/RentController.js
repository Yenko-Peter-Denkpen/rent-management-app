const House = require("../models/RentSchema")

const createRentManagement = (req, res) => {
const newHouse = new House({
    location: req.body.location,
    category: req.body.category,
    facilities: req.body.facilities,
    numOfrooms: req.body.numOfrooms,
    image:req.body.image,
    address: req.body.address,
    contact:req.body.contact ,
    price: req.body.price
})
newHouse.save();
res.status(200).json(newHouse) 
}

//geting a House
const getHouse = async(req,res) => {
    const houses = await House.find();
    res.status(200).json(houses);
}

//deleting by id


 async function deleteHouse(req, res) {
    await House.findByIdAndDelete(req.params.id);
    res.json({
        message:"house deleted successfully",
    })
 }








module.exports={createRentManagement, getHouse, deleteHouse}