import { useRef, useState } from "react"
import { axiosInstance } from "../../lib/axios"
import { useLocation, useNavigate } from "react-router-dom"

const initialForm = {
  title: "",
  activity_group_id: "",
  is_active: true,
  priority: ""
}

const useTodo = () => {
  const [todo, setTodo] = useState()
  const [open, setOpen] = useState(false)
  const [openConfirm, setOpenConfirm] = useState(false)
  const [idTodo, setIdTodo] = useState([])
  const [formValues, setFormValues] = useState(initialForm)
  const idRef = useRef()
  const navigate = useNavigate()
  const location = useLocation()


  const fetchTodo = async (id) => {
    try {
      const todoResponse = await axiosInstance.get(`/todo-items?activity_group_id=${id}`)

      setTodo(todoResponse.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  const toggleModalTodo = () => {
    setOpen(!open)
  }

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormValues({...formValues, [name]: value, ["activity_group_id"]: idRef.current.value});
  };

  const createTodo = async (e) => {
    e.preventDefault()
    try {
      await axiosInstance.post("/todo-items", formValues)
      await toggleModalTodo()
      await navigate(location.pathname)
      await setFormValues(initialForm)
    } catch (error) {
      console.log(error.message)
    }
  }

  const handleShow = (id, title) => {
    setOpenConfirm(true)
    setIdTodo({id: id, title: title})
  }

  const handleClose = () => {
    setOpenConfirm(false)
  }

  const deleteTodo = async (id, idParam) => {
    await axiosInstance.delete("/todo-items/" + id)
    fetchTodo(idParam)
    handleClose()
  }

  return {
    open,
    toggleModalTodo,
    formValues,
    setFormValues,
    onChange,
    createTodo,
    todo,
    fetchTodo,
    deleteTodo,
    handleClose,
    handleShow,
    openConfirm,
    idTodo,
    idRef,
    location
  }
}

export default useTodo