const mongoose =require("mongoose")

const RentSchema = mongoose.Schema({
location: {
    type: String,
    require:true
},
category: {
    type:String,
    require:true
},
facilities: {
    type: Array,
    require: true
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
     type: String,
     require:true,
}
}, {
    timestamps:true
}
)


const House = mongoose.model("Rent", RentSchema)
module.exports=House