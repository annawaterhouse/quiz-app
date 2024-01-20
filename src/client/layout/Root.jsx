import { Outlet } from "react-router-dom"
import Form from '../features/create/Form'

function Root() {
  
  return (
    <main>
      <Form />
      <Outlet />
    </main>
  )
}

export default Root
