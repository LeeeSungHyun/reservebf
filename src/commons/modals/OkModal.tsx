import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

interface OkModalProps {
  open: boolean;
  onClose: () => void;
  message: string;
}

const OkModal: React.FC<OkModalProps> = ({ open, onClose, message }) => {
  //url 이동시 사용
  const navigate = useNavigate();

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>알 림</DialogTitle>
      <DialogContent>
        <p>{message}</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="contained" color="primary">
          확인
        </Button>
        {/* <Button onClick={onClose} variant="outlined" color="secondary">
          취소
        </Button> */}
      </DialogActions>
    </Dialog>
  );
};

export default OkModal;
