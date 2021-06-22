import React from 'react';
import { Typography } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { useStylesSignIn } from '../pages/SignIn';

interface ModalBlockProps {
  title: string;
  children: React.ReactNode;
  classes?: ReturnType<typeof useStylesSignIn>;
  visible?: boolean;
  onClose: () => void;
}

const ModalBlock: React.FC<ModalBlockProps> = ({
  title,
  visible = false,
  onClose,
  children,
}: ModalBlockProps): React.ReactElement | null => {
  if (!visible) {
    return null;
  }

  return (
    <Dialog
      open={visible}
      onClose={onClose}
      aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">
        <IconButton onClick={onClose} color="secondary" aria-label="close">
          <CloseIcon style={{ fontSize: 26 }} color="secondary" />
        </IconButton>
        <Typography gutterBottom variant="h6">
          {title}
        </Typography>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default ModalBlock;
