const express = require('express');
const { getGoal, setGoal, deleteGoal, updateGoal } = require('../controllers/goalControllers');
const router = express.Router();
const { protect } = require('../middlewares/authhandler')


router.route("/").get(protect,getGoal).post(protect,setGoal);
router.route("/:id").put(protect,updateGoal).delete(protect,deleteGoal);

module.exports = router;