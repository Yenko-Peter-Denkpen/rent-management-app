const mongoose =require("mongoose")

const RentSchema =mongoose.Schema({
location: {
    type: String,
    require:true
},
category: {
    type:String,
    required:true
},
facilities: {
    type: Array,
    required: true
},
numOfrooms: {
    type: Number,
    require:true
},
address: {
    gps: String,
    box: String
},
contact : {
    phone: String,
    email:String
},
price: {
     amout: String,
     required:true,
}
}, {
    timestamps:true
}
)


const Rent = mongoose.model("Rent", RentSchema)
module.exports=Rent