const express = require("express");
const { TodoModel } = require("../model/TodoModel");

const todoRouter = express.Router();

todoRouter.get("/", async (req, res) => {
  try {
    let data = await TodoModel.find();
    res.send(data);
  } catch (error) {
    res.send({
      message: error.message,
    });
  }
});

todoRouter.post("/addtodo", async (req, res) => {
  try {
    let data = new TodoModel(req.body);
    await data.save();
    res.send({
      message: "Todo added",
    });
  } catch (error) {
    res.send({
      message: error.message,
    });
  }
});

todoRouter.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await TodoModel.findByIdAndUpdate({ _id: id }, req.body);
    res.send({
      message: "Todo updated",
    });
  } catch (error) {
    res.send({
      message: error.message,
    });
  }
});

todoRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await TodoModel.findByIdAndDelete({ _id: id }, req.body);
    res.send({
      message: "Todo deleted",
    });
  } catch (error) {
    res.send({
      message: error.message,
    });
  }
});

module.exports = {
  todoRouter,
};
