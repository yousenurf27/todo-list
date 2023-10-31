import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import PropTypes from 'prop-types'
import { useParams } from "react-router-dom"

const TodoFormModals = ({ show, toggleModalTodo, formValuePriority, formValueTitle, onChange, createTodo, idRef }) => {
  const { id } = useParams()

  let button
  if (formValuePriority === "") {
    button = <button
              disabled
              type="submit"
              className="inline-flex w-full justify-center rounded-md bg-green-300 px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto"
            >
              Save
            </button>
  } else {
    button = <button
              type="submit"
              className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
            >
              Save
            </button>
  }

  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={toggleModalTodo}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                      Tambah List Item
                    </Dialog.Title>
                    <div className="mt-2">
                      <form
                        onSubmit={createTodo}
                      >
                        <label className="block mb-4">
                          <span className="block text-sm font-medium text-slate-700">NAMA LIST ITEM</span>
                          <input
                            name="title"
                            value={formValueTitle}
                            data={id}
                            onChange={onChange}
                            required
                            type="text"  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                            invalid:border-red-500 invalid:text-red-600
                            focus:invalid:border-red-500 focus:invalid:ring-red-500
                          "/>
                        </label>
                        <label className="block mb-4">
                          <span className="block text-sm font-medium text-slate-700">PRIORITY</span>
                          <select
                            name="priority"
                            onChange={onChange}
                            data={id}
                            required
                            id="countries" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                            invalid:border-red-500 invalid:text-red-600
                            focus:invalid:border-red-500 focus:invalid:ring-red-500">
                            <option>Pilih priority</option>
                            <option value="very-high">Very High</option>
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                            <option value="very-low">Very Low</option>
                          </select>
                        </label>
                        <input hidden defaultValue={id} ref={idRef} type="text" />
                        <div className="bg-gray-50 py-3 sm:flex sm:flex-row-reverse">
                          {button}
                          <button
                            type="button"
                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                            onClick={() => toggleModalTodo()}
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

TodoFormModals.propTypes = {
  show: PropTypes.bool,
  toggleModalTodo: PropTypes.func,
  formValuePriority: PropTypes.string,
  formValueTitle: PropTypes.string,
  onChange: PropTypes.func,
  createTodo: PropTypes.func, 
  idRef: PropTypes.object
}

export default TodoFormModals
