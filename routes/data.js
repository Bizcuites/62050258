const express = require("express");
const router = express.Router();
const dataController = require("../Controller/dataController");

router.get("/", dataController.index);
router.post("/", dataController.add);
router.put("/:id", dataController.update);
router.delete("/:id", dataController.remove);
module.exports = router;
