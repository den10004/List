import { useEffect, useState } from "react";
import { API } from "./api";
import TodoInput from "./components/TodoInput";
import axios from "axios";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      let fetchData = await axios(`${API}`);
      setTodos(fetchData.data);
    } catch (err) {
      console.log(setError(err.message));
    }
  };

  const addTodo = async (obj) => {
    try {
      await axios.post(`${API}/addtodo`, obj);
      fetchData();
      setText("");
    } catch (err) {
      console.log(err);
    }
  };

  const updateTodo = async (id, updateData) => {
    try {
      await axios.patch(`${API}/${id}`, updateData);
      fetchData();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      fetchData();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <TodoInput addTodo={addTodo} text={text} setText={setText} />

      <ul>
        {todos.length === 0 && !error ? (
          <li>Загрузка....</li>
        ) : (
          <Card todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
        )}
      </ul>
    </div>
  );
}

export default App;
