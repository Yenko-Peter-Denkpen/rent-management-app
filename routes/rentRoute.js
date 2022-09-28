const { createRentManagement, getHouse, deleteHouse } = require("../controllers/RentController")
const { Router } = require("express")

const router = Router();

router.post("/addhouse", createRentManagement)

router.route("/house").get(getHouse)
router.route("/delete/:id").delete(deleteHouse)

module.exports= router