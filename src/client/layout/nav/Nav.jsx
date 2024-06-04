import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { Button } from "@/ui/button";


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
    <nav className="flex items-center gap-4 text-sm lg:gap-6">
       <div className="text-lg font-semibold">Study App</div>
        <menu className="flex">
          <Button><Link to="/">Categories</Link></Button>
          <Button>Dark Mode</Button>
          <Button onClick={handleOpen}>+</Button>
        </menu>
        {open && <OldForm ref={formRef} />}
    </nav>
  );
}
