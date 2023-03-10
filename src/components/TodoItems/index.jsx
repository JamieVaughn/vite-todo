import { TodoItem } from '../TodoItem'
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
          <TodoItem 
          key={todo.timestamp} 
          handleCheck={handleCheck} 
          handleClick={handleClick}
          todo={todo}
          />
        )
      })}
    </ul>
  )
}
