import { Outlet } from "react-router-dom"

function Root() {
  
  return (
    <main>
      <h1>welcome</h1>
      <Outlet />
    </main>
  )
}

export default Root
