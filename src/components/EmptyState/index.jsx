
export const EmptyState = (props) => {

  if(props.todos.length) return null

  return <p className="empty-state">No Todos left!</p>
}