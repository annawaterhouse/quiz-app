import { Link } from "react-router-dom";
import { MdOutlineCategory } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import Mode from "./Mode";

export default function Nav() {

  return (
      <nav className="p-6 md:p-8 flex justify-between items-center bg-gray-300 text-gray-800">
        <Mode />
        <menu className="flex gap-8">
          <Link to="/"><MdOutlineCategory /></Link>
          <button><IoMdAdd /></button>
        </menu>
      </nav>
  );
}
