const Goal = require("../model/goalModel");

const asyncHandler = require("express-async-handler");

// @desc   GET goals
// @route  GET / api/goals
// @access Private
const getGoals = asyncHandler(async (req, res, next) => {
  const goals = await Goal.find();

  res.status(200).json(goals);
});

// @desc   SET goals
// @route  POST / api/goals
// @access Private
const postGoal = asyncHandler(async (req, res, next) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add textr");
  }
  const goal = await Goal.create({ text: req.body.text });

  res.status(200).json(goal);
});

// @desc   EDIT goals
// @route  PUT / api/goals/:id
// @access Private
const putGoal = asyncHandler(async (req, res, next) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedGoal);
});

// @desc   DELETE goals
// @route  DELETE / api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res, next) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }
  await goal.remove();
  res.status(200).json({ id: req.params.id });

  /* const deletedGoal = await Goal.findByIdAndDelete(req.params.id);
  res.status(200).json(deletedGoal); */
});

module.exports = {
  getGoals,
  postGoal,
  putGoal,
  deleteGoal,
};
