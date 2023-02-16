const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModels");
const User = require("../models/userModels")
// @desc getGoals
// @route  GET  /api/v1
//access private

const getGoal = asyncHandler(async (req, res) => {
  try {
    const goals = await Goal.find({ user: req.user.id });
    res.status(200).json({ data: goals });
  } catch (error) {
    throw new Error(error);
  }
});

// @desc getGoals
// @route  POST  /api/v1
//access private

const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add text field");
  }
  const goals = await Goal.create({ 
    text:req.body.text ,
    user: req.user.id
});
  //   const goal = await goals.save();
  res.status(201).json(goals);
});

// @desc getGoals
// @route  PUT  /api/v1
//access private

const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    throw new Error('Goal not found');
  } 
 const user = await User.findOne(req.user.id);
 if(!user){
   res.status(401)
   throw new Error('user not found')
 }

   // Make sure the logged in user matches the goal user
   if (goal.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }
  updateGoal = await Goal.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json({ message:` updated!! goal id ${req.params.id}` ,updateGoal });
});

// @desc getGoals
// @route  DELETE  /api/v1
//access private

const deleteGoal = async (req, res) => {
  const goal = await Goal.findById(req.params.id)

  if (!goal) {
    res.status(400)
    throw new Error('Goal not found')
  }

  const user = await User.findOne({ user: req.user.id });
  if(!user){
    res.status(401)
    throw new Error('user not found')
  }
 
    // Make sure the logged in user matches the goal user
    if (goal.user.toString() !== req.user.id) {
     res.status(401)
     throw new Error('User not authorized')
   }
  await goal.remove()

  res.status(200).json({ id: req.params.id, })
};

module.exports = { getGoal, setGoal, updateGoal, deleteGoal };
