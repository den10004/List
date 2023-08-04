import "../index.css";

// eslint-disable-next-line react/prop-types
function Card({ todos, updateTodo, deleteTodo }) {
  return (
    <ul className="wrapper">
      {todos?.map(({ title, status, _id }) => (
        <li className="card" key={_id}>
          <div className="card__wrapper">
            <p
              className={status ? "completed" : "not"}
              onClick={() => updateTodo(_id, { status: !status })}
            >
              {title}
            </p>
          </div>
          <button className="bcr" onClick={() => deleteTodo(_id)}>
          Удалить
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Card;
