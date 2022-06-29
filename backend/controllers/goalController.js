const asyncHandler = reuire("express-async-handler");

// @desc   GET goals
// @route  GET / api/goals
// @access Private
const getGoals = asyncHandler(async (req, res, next) => {
  res.status(200).json({ message: "Get goals" });
});

// @desc   SET goals
// @route  POST / api/goals
// @access Private
const postGoal = asyncHandler(async (req, res, next) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add textr");
  }

  res.status(200).json({ message: "Set goal" });
});

// @desc   EDIT goals
// @route  PUT / api/goals/:id
// @access Private
const putGoal = asyncHandler(async (req, res, next) => {
  res.status(200).json({ message: `Edit goal ${req.params.id}` });
});

// @desc   DELETE goals
// @route  DELETE / api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res, next) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  postGoal,
  putGoal,
  deleteGoal,
};
