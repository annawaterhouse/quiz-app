import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import Form from "../../universal/Form";
import ButtonDefault from "../../universal/ButtonDefault";

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
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, handleClose]);

  return (
    <nav className="flex container">
        <h1 className="logo">Study App</h1>
        <menu className="flex">
          <Link to="/">Categories</Link>
          <ButtonDefault>Light Dark</ButtonDefault>
          <button onClick={handleOpen}>+</button>
        </menu>
        {open && <Form ref={formRef} />}
    </nav>
  );
}
