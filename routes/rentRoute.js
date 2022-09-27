const { createRentManagement, getHouse } = require("../controllers/RentController")
const { Router } = require("express")

const router = Router();

router.post("/addhouse", createRentManagement)

router.route("/house").get(getHouse)

module.exports= router