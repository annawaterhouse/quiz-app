import { Outlet } from "react-router-dom"
import Create from '../features/create/Create'

function Root() {
  
  return (
    <main>
      <Create />
      <Outlet />
    </main>
  )
}

export default Root
