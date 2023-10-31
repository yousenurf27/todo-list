import { Trash } from "@phosphor-icons/react"
import PropTypes from 'prop-types'
import Dot from "./Dot"
import Confirm from "./Confirm"

const Item = ({dataTodo, deleteTodo, handleClose, handleShow, openConfirm, idTodo, titleTodo, idParam}) => {
  return (
    <>
      <div className="list-items">
        {dataTodo?.map((td) => {
          let checked
          if (td.is_active === 1) {
            checked = <div className="flex items-center cursor-pointer">
                        <input id={`default-checkbox-${td.id}`} type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer" />
                        <Dot priority={td.priority} />
                        <label htmlFor={`default-checkbox-${td.id}`} className="text-sm font-medium text-black cursor-pointer">{td.title}</label>
                      </div>
          } else {
            checked = <div className="flex items-center cursor-pointer">
                        <input checked id={`default-checkbox-${td.id}`} type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer" />
                        <Dot priority={td.priority} />
                        <label htmlFor={`default-checkbox-${td.id}`} className="text-sm font-medium text-gray-500 line-through cursor-pointer">{td.title}</label>
                      </div>
          }
          return (
            <div key={td.id} className={`p-5 mb-3 flex items-center justify-between rounded-lg bg-white todo-item-${td.id}`}>
              {checked}
              <button
                onClick={() => handleShow(td.id, td.title)}
              >
                <Trash size={24} />
              </button>
            </div>
          )
        })}
      </div>
      <Confirm idCard={idTodo} titleCard={titleTodo} openConfirm={openConfirm} handleClose={handleClose} deleteActivity={deleteTodo} idParam={idParam} />
    </>
  )
}

Item.propTypes = {
  dataTodo: PropTypes.array,
  deleteTodo: PropTypes.func,
  handleClose: PropTypes.func,
  handleShow: PropTypes.func,
  openConfirm: PropTypes.bool,
  idTodo: PropTypes.number,
  titleTodo: PropTypes.string,
  idParam: PropTypes.string
}

export default Item