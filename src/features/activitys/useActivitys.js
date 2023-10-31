import { useState } from "react"
import { axiosInstance } from "../../lib/axios"

const initialForm = {
  title: ""
}

const useActivitys = () => {
  const [activitys, setActivitys] = useState([])
  const [open, setOpen] = useState(false)
  const [openConfirm, setOpenConfirm] = useState(false)
  const [openToast, setOpenToast] = useState(false)
  const [formValues, setFormValues] = useState(initialForm)
  const [idCard, setIdCard] = useState([])

  const fetchActivitys = async () => {
    try {
      const activitysResponse = await axiosInstance.get("/activity-groups")

      setActivitys(activitysResponse.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  const toggleModalAtivity = () => {
    setOpen(!open)
  }

  const handleShow = (id, title) => {
    setOpenConfirm(true)
    setIdCard({id: id, title: title})
  }

  const handleClose = () => {
    setOpenConfirm(false)
  }

  const handleToastShow = () => {
    setOpenToast(true)
  }

  const handleToastClose = () => {
    setOpenToast(false)
  }

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormValues({...formValues, [name]: value });
  };

  const createActivity = async (e) => {
    e.preventDefault()
    try {
      if (formValues["title"] === '') return SyntaxError("Title Activity harus diisi")
      
      await axiosInstance.post("/activity-groups", formValues)
      await toggleModalAtivity()
      setTimeout(() => {
        window.location.reload()
      }, 300);
    } catch (error) {
      console.log(error.message)
    }
  }

  const deleteActivity = async (id) => {
    await axiosInstance.delete("/activity-groups/" + id)
    fetchActivitys()
    handleClose()
    setTimeout(() => {
      handleToastShow()
    }, 800);
    setTimeout(() => {
      handleToastClose()
    }, 5000);
  }

  return {
    activitys,
    open,
    toggleModalAtivity,
    fetchActivitys,
    formValues,
    onChange,
    createActivity,
    deleteActivity,
    handleClose,
    handleShow,
    openConfirm,
    idCard,
    handleToastClose,
    openToast
  }
}

export default useActivitys