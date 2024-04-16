import { Outlet } from "react-router-dom";
import Nav from "./nav/Nav";

function Root() {
  return (
    <div className="grid">
      <header className="bg-grey">
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Root;
