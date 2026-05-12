// Add the required props
export const TodoList = ({ todos }) => (
  <section className="TodoList">
    {todos.map(todo => (
      <article
        className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
        key={todo.id}
      >
        <h2 className="TodoInfo__title">{todo.title}</h2>
        <a className="UserInfo" href={`mailto:${todo.user?.email}`}>
          {todo.user?.name}
        </a>
      </article>
    ))}
  </section>
);
