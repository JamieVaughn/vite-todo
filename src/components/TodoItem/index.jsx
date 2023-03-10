import './index.css'

export const TodoItem = (props) => {
  const { todo, handleClick, handleCheck } = props
  console.log(props)
  return (
    <li className="todo-item">
      <div>
      <input 
      onChange={() => handleCheck(todo.text)}
      checked={todo.done}
      type="checkbox" 
      title="Mark done"/>
      <span className={`todo-text ${todo.done ? 'done' : ''}`}>{todo.text}</span>
      <button 
      onClick={() => handleClick(todo.text)}
      title="Delete">╳</button>
      </div>
      <div className='timestamp'>{todo.timestamp}</div>
    </li>
  )
}