const RentManagement = require("../models/RentSchema")

const createRentManagement = (req, res) => {
const newHouse = new House({
    location: req.body.location,
    category: req.body.category,
    facilities: req.body.facilities,
    numOfrooms: req.body.numOfrooms,
    address: req.body.address,
    contact:req.body.contact ,
    price: req.body.price
})
newHouse.save();
res.status(200).json(newHouse)
}

//geting a House
const getHouse = async(req,res) => {
    const House = await House.find();
    res.status(200).json(House);
}

module.exports={createRentManagement, getHouse}