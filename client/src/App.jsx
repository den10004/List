import { useEffect, useState } from "react";
import { API } from "./api";
import TodoInput from "./components/TodoInput";
import axios from "axios";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const fetchData = async () => {
    let fetchData = await axios(`${API}`);
    setTodos(fetchData.data);
  };

  const addTodo = async (obj) => {
    await axios.post(`${API}/addtodo`, obj);
    fetchData();
    setText("");
  };

  const updateTodo = async (id, updateData) => {
    await axios.patch(`${API}/${id}`, updateData);
    fetchData();
  };

  const deleteTodo = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchData();
  };

  useEffect(() => {
    const getTodos = async () => {
      fetchData();
    };
    getTodos();
  }, []);

  return (
    <div className="App">
      <TodoInput addTodo={addTodo} text={text} setText={setText} />
      <Card todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />

      <ul>{todos.length === 0 ? <li>нет задач</li> : null}</ul>
    </div>
  );
}

export default App;
