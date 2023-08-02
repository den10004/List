const express = require("express");
const cors = require("cors");
const { connection } = require("./db");
const { todoRouter } = require("./routes/todo.routes");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/todos", todoRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("DB");
  } catch (err) {
    console.log(err);
  }
  console.log("server", process.env.PORT);
});
