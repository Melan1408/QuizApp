import { Component } from 'react';
import {
    Box,
    Alert,
    IconButton,
    Collapse,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default class BasicAlert extends Component{

  constructor() {
    super();
  }

  render() {
    const { open, handleClickClose, text } = this.props;
    return(
      <Box sx={{ width: '100%' }}>
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={handleClickClose}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {text}
        </Alert>
      </Collapse>
    </Box>
    );
  }
}
