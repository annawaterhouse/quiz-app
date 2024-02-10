import Mode from "./Mode";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";

export default function Flyout() {
  const [open, setOpen] = useState(false);
  const handleFlyout = () => {
    setOpen(!open);
  };

  return (
    <nav className="md:hidden bg-gray-100 my-4 rounded-lg">
    <div className="flex justify-between items-center py-6 px-2">
      <Mode />
      {!open ? (
        <button onClick={handleFlyout} className="mr-2 ml-2">
          <IoIosMenu />
        </button>
      ) : (
        <button onClick={handleFlyout} className="mr-2 ml-2">
          x
        </button>
      )}</div>
    </nav>
  );
}
