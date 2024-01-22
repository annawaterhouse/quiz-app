import Form from "./Form";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
export default function Create() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  

  return (
    <>
      <Button onClick={handleOpen}>+</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-form-flashcards"
        aria-describedby="modal-form-flashcards"
      >
        <Form handleClose={handleClose} setOpen={setOpen} />
      </Modal>
    </>
  );
}
