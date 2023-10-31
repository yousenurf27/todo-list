import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="h-screen w-full pb-28 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-8">Oops!</h1>
        <p className="mb-4">Sorry, an unexpected error has occurred.</p>
        <p>
          <Link to="/" className="hover:underline hover:text-color-primary transition-all">Go to the home page</Link>
        </p>
      </div>
    </div>
  )
}

export default NotFound