const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    status: { type: Boolean, required: true },
  },
  {
    versionKey: false,
  }
);

const TodoModel = mongoose.model("alltodo", todoSchema);
module.exports = { TodoModel };
