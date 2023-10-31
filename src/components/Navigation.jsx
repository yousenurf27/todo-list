import { Link, Outlet } from "react-router-dom"

const Navigation = () => {
  return (
    <>
      <header className="bg-color-primary">
        <div className="container mx-auto lg:px-24 md:px-14 px-4 py-4">
          <Link to={"/"} className="md:text-2xl text-base font-bold text-white">TO DO LIST APP</Link>
        </div>
      </header>
      <main className="min-h-screen container mx-auto lg:px-24 md:px-14 px-4 py-8 bg-gray-100">
        <Outlet />
      </main>
    </>
  )
}

export default Navigation