import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function LogOutDialog({ open, setOpen, logout }) {
  const handleLogOut = () => {
    logout();
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={()=>setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"User Logout "}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you Sure you Want to Logout ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLogOut}>YES</Button>
          <Button
            onClick={() => {
              setOpen(false);
            }}
            autoFocus
          >
            NO
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
