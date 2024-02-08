const {
  getTodo,
  addTodo,
  delTodo,
  updateTodo,
} = require("../controller/todoController");

const router = require("express").Router();

router.get("/", getTodo);
router.post("/add-todo", addTodo);
router.delete("/del-todo/:id", delTodo);
router.put("/update-todo/:id", updateTodo);

module.exports = router;
