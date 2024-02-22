import { Outlet } from "react-router-dom"
import Nav from "./nav/Nav"

function Root() {
  return (
    <div className="antialiased mx-auto h-lvh flex flex-col">
      <header className="w-lvw sticky z-50 top-0">
        <Nav />
      </header>
      <main className="w-lvw px-6 bg-blue-50 md:col-start-2 md:col-end-5">
        <Outlet />
      </main>
    </div>
  )
}

export default Root
