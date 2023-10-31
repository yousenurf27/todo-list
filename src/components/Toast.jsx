import { WarningCircle } from "@phosphor-icons/react"

// eslint-disable-next-line react/prop-types
const Toast = ({openToast, handleToastClose}) => {
  return (
    <div id="toast-default" className={`${openToast ? "" : "hidden"} flex items-start overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center w-full md:inset-0 h-modal md:h-full`}>
      <div className="mt-6 flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-white" role="alert">
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500">
              <WarningCircle size={24} />
          </div>
          <div className="ml-3 text-sm font-normal text-black">Activity berhasil dihapus</div>
          <button onClick={() => handleToastClose()} type="button" className="ml-auto -mx-1.5 -my-1.5 bg-white text-black hover:text-gray-600 rounded-lg focus:ring-2 p-1.5 inline-flex items-center justify-center h-8 w-8" data-dismiss-target="#toast-default" aria-label="Close">
              <span className="sr-only">Close</span>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
          </button>
      </div>
    </div>
  )
}

export default Toast