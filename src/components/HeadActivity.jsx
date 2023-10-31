import { CaretLeft, Plus } from "@phosphor-icons/react"
import { Link, useLocation } from "react-router-dom"
import useActivitys from "../features/activitys/useActivitys"
import FormModals from "./FormModals"
import TodoFormModals from "./TodoFormModals"
import useTodo from "../features/todo/useTodo"

const HeadActivity = () => {
  const location = useLocation()
  const { open, toggleModalAtivity, formValues, onChange, createActivity } = useActivitys()
  const { open: openTodoModals, toggleModalTodo, formValues: formValuesTodo, onChange: onChnageTodo, createTodo, idRef } = useTodo()

  if (location.pathname.match("/todo")) {
    return (
      <div className="flex justify-between items-center mb-12">
        <Link to={"/activitys"} className="flex items-center">
          <CaretLeft size={32} className="mr-2" />
          <h2 className="md:text-4xl text-2xl font-bold">New Activity</h2>
        </Link>
        <button
          type="button"
          className="bg-color-primary md:px-4 md:py-3 px-3 py-2 flex items-center md:text-lg text-sm rounded-full text-white"
          onClick={() => toggleModalTodo()}
        >
          <Plus className="mr-1" size={22} />
          Tambah
        </button>
        <TodoFormModals
          show={openTodoModals}
          toggleModalTodo={toggleModalTodo}
          formValuePriority={formValuesTodo["priority"]}
          formValueTitle={formValuesTodo["title"]}
          onChange={onChnageTodo}
          createTodo={createTodo}
          idRef={idRef}
        />
      </div>
    )
  } else {
    return (
      <div className="flex justify-between items-center mb-12">
        <h2 className="md:text-4xl text-2xl font-bold">Activity</h2>
        {location.pathname === "/" ? 
            <Link to={"activitys"} className="bg-color-primary md:px-4 md:py-3 px-3 py-2 flex items-center md:text-lg text-sm rounded-full text-white">
              <Plus className="mr-1" size={22} />
              Tambah
            </Link>
          : 
            <button
              type="button"
              className="bg-color-primary md:px-4 md:py-3 px-3 py-2 flex items-center md:text-lg text-sm rounded-full text-white"
              onClick={() => toggleModalAtivity()}
            >
              <Plus className="mr-1" size={22} />
              Tambah
            </button>
        }
        <FormModals
          open={open}
          toggleModalAtivity={toggleModalAtivity}
          formValuesTilte={formValues["title"]}
          onChange={onChange}
          createActivity={createActivity}
        />
      </div>
    )
  }
}

export default HeadActivity