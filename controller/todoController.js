const Todo = require("../model/Todo");

exports.getTodo = async (req, res) => {
  try {
    const result = await Todo.find();
    res.status(200).json({ message: "todo  ", result });
  } catch (error) {
    res.status(500).json({ message: error.message || "sommething went wrong" });
  }
};
exports.addTodo = async (req, res) => {
  try {
    await Todo.create(req.body);
    res.status(201).json({ message: "todo Added " });
  } catch (error) {
    res.status(500).json({ message: error.message || "sommething went wrong" });
  }
};
exports.delTodo = async (req, res) => {
  try {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.status(201).json({ message: "todo Added " });
  } catch (error) {
    res.status(500).json({ message: error.message || "sommething went wrong" });
  }
};
exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    await Todo.findByIdAndUpdate(id, req.body);
    res.status(201).json({ message: "todo Added " });
  } catch (error) {
    res.status(500).json({ message: error.message || "sommething went wrong" });
  }
};
