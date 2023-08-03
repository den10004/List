import "../index.css";

// eslint-disable-next-line react/prop-types
function TodoInput({ addTodo, text, setText }) {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <input
        className="mbInput"
        placeholder="enter"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></input>

      <button
        type="submit"
        disabled={text === ""}
        className="bci"
        onKeyDown={() => addTodo({ title: text, status: false })}
        onClick={() => addTodo({ title: text, status: false })}
      >
        Добавить
      </button>
    </form>
  );
}

export default TodoInput;
