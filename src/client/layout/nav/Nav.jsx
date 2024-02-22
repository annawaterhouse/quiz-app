import { Link } from "react-router-dom";
import { MdOutlineCategory } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import Mode from "./Mode";

export default function Nav() {

  return (
      <nav className="p-6 flex justify-between items-center bg-gray-100 text-gray-800">
        <Mode />
        <menu className="flex gap-8">
          <Link to="/"><MdOutlineCategory style={{"font-size": "26px"}} /></Link>
          <li><IoMdAdd style={{"font-size": "26px"}} /></li>
        </menu>
      </nav>
  );
}
