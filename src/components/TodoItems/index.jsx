import './index.css'

export const TodoItems = (props) => {
  const handleCheck = text => {
    props.setTodos(prev => {
      const newTodos = prev.map(todo => {
        if(todo.text === text) {
          return {
            ...todo,
            done: !todo.done
          }
        } else {
          return todo
        }
      })
      return newTodos
    })
  }

  const handleClick = (text) => {
    props.setTodos(prev => prev.filter(todo => todo.text !== text))
  }
  return (
    <ul>
      {props.todos.map((todo, index) => {
        return (
          <li className="todo-item" key={todo+index}>
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
            <div>{todo.timestamp}</div>
          </li>
        )
      })}
    </ul>
  )
}
