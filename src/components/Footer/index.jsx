import './index.css'

export const Footer = (props) => {
  const total = props.todos.length
  const remaining = props.todos.filter(todo => !todo.done).length
  return (
    <footer>
      <p>Total: {total}</p>
      <p>Remaining: {remaining}</p>
      <button onClick={() => props.setTodos([])}>Clear All</button>
    </footer>
  )
}