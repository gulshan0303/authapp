const express = require('express');
const { getGoals, setGoal, deleteGoal, updateGoal } = require('../controllers/goalControllers');
const router = express.Router();
const { protect } = require('../middlewares/authhandler')


router.route("/").get(protect,getGoals).post(protect,setGoal);
router.route("/:id").put(protect,updateGoal).delete(protect,deleteGoal);

module.exports = router;