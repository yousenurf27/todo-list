import { useParams } from "react-router-dom"
import HeadActivity from "../components/HeadActivity"
import ImgTodo from "/images/todo-empty-state.png"
import useTodo from "../features/todo/useTodo"
import { useEffect } from "react"
import Item from "../components/Item"

const ToDo = () => {
  const { todo, fetchTodo, deleteTodo, handleClose, handleShow, openConfirm, idTodo, location } = useTodo()
  const { id } = useParams()

  useEffect(() => {
    fetchTodo(id)
  }, [location.key])
  
  return (
    <>
      <HeadActivity />
      {todo?.length === 0 ? (
        <div data-cy="activity-empty-state">
          <img src={ImgTodo} alt="Activity Empty State" />
        </div>
      ):(
        <Item
          dataTodo={todo}
          deleteTodo={deleteTodo}
          handleClose={handleClose}
          handleShow={handleShow}
          openConfirm={openConfirm}
          idTodo={idTodo["id"]}
          titleTodo={idTodo["title"]}
          idParam={id}
        />
      )}
    </>
  )
}

export default ToDo