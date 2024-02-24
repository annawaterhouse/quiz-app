import { Link } from "react-router-dom";
import { MdOutlineCategory } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import Mode from "./Mode";
import { useRef, useEffect, useState } from 'react';
import Form from "../../components/common/Form";
import Button from "../../components/common/Button"

export default function Nav() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
//todo: handle close with useEffect.
const formRef = useRef();
  useEffect(() => {
    function handleClickOutside(e) {
      if (formRef.current && !formRef.current.contains(e.target)) {
        handleClose();
      }
    }

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, handleClose]);

  return (
      <nav className="p-6 md:p-8 flex justify-between items-center bg-gray-200 text-gray-800">
        <Mode />
        <menu className="flex gap-8">
          <Link to="/"><MdOutlineCategory /></Link>
          <button onClick={handleOpen}><IoMdAdd /></button>

        </menu>
       {open && <Form ref={formRef} />}
      </nav>
  );
}
