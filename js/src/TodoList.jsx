/** @jsx yolk.createElement */

function TodoList (props) {
  const todos = props.map(p => p.todos)
  const filter = props.map(p => p.filter)

  const todoItems =
    todos
    .combineLatest(filter, (todos, filter) => filter.fn(todos))
    .flatMapLatest(todos => {
      return Rx.Observable.from(todos).reduce((acc, todo) => acc.concat(<TodoItem todo={todo} key={todo.id} />), [])
    })

  return <ul className="todo-list">{todoItems}</ul>
}