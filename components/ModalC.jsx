import React from 'react'
import {Modal} from "@mui/material";
import BoxBlanca  from '../elements/BoxBlanca';

const ModalC = ({children}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <BoxBlanca>{children}</BoxBlanca>
    </Modal>
  );
}

export default ModalC