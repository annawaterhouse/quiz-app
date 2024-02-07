import { Outlet } from "react-router-dom"
import Nav from "./Nav"

function Root() {
  return (
    <>
      <header className="border">
        <Nav />
      </header>
      <main className="">
        <Outlet />
      </main>
    </>
  )
}

export default Root
