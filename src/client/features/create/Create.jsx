import Form from "./Form";
import { useState } from "react";
export default function Create() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  

  return (
    <section>
        <h1>Create Form</h1>
    </section>
  );
}
