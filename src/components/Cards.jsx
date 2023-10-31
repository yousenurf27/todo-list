import { useEffect } from "react"
import { Trash } from "@phosphor-icons/react"
import { formattedDate } from "../lib/formattedDate"
import useActivitys from "../features/activitys/useActivitys"
import Confirm from "./Confirm"
import Toast from "./Toast"
import { Link } from "react-router-dom"

const Card = () => {
  const { activitys, fetchActivitys, handleShow, handleClose, openConfirm, deleteActivity, idCard, openToast, handleToastClose } = useActivitys()

  useEffect(() => {
    fetchActivitys()
  }, [])

  return (
    <>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-5">
        {activitys?.slice(0, 10).map((act) => {
          return (
            <div key={`${act.id}`} className="h-60 w-full p-4 flex flex-col justify-between rounded-xl shadow-md bg-white" data-cy={`activity-item-${act.id}`}>
              <Link to={`/todo/${act.id}`} className="font-bold text-lg" data-cy="activity-item-title">{act.title}</Link>
              <div className="flex justify-between items-center">
                <p className="text-sm font-medium text-color-secondary" data-cy="activity-item-date">{formattedDate(act.created_at)}</p>
                <button
                  onClick={() => handleShow(act.id, act.title)}
                >
                  <Trash size={24} />
                </button>
              </div>
            </div>
          )
        })}
      </div>
      <Confirm idCard={idCard["id"]} titleCard={idCard["title"]} openConfirm={openConfirm} handleClose={handleClose} deleteActivity={deleteActivity} />
      <Toast openToast={openToast} handleToastClose={handleToastClose} />
    </>
  )
}

export default Card