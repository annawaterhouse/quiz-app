import { Outlet } from "react-router-dom"
import Nav from "./nav/Nav"

function Root() {
  return (
    <div className="antialiased mx-auto h-lvh px-4 grid grid-cols-1 gap-4 list-none max-w-screen-xl md:grid-cols-3">
      <header className="w-full md:col-start-1">
        <Nav />
      </header>
      <main className="w-full bg-blue-20 rounded-lg md:col-start-2 md:col-end-5">
        <Outlet />
      </main>
    </div>
  )
}

export default Root
