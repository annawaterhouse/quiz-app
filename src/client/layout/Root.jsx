import { Outlet } from "react-router-dom"
import Nav from "./Nav"

function Root() {
  return (
    <div className="bg-[#fffffc] mx-auto min-h-screen h-lvh grid grid-cols-1 gap-x-2 gap-y-0 list-none md:grid-cols-4 ">
      <header className="md:col-start-1">
        <Nav />
      </header>
      <main className="md:col-start-2 md:col-end-5">
        <Outlet />
      </main>
    </div>
  )
}

export default Root
