import React from 'react';
import {
  Grid,
  Typography,
  Button,
  Fade,
  Modal,
  Box,
  Backdrop,
} from '@mui/material';

const styleBox = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 220,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: 5,
  boxShadow: 24,
  p: 2,
};

const BasicModal = ({ open, handleClickClose, quiz, timeForQuiz }) => (
    <div>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={open}
        onClose={handleClickClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        sx={{ overflow: 'scroll' }}
      >
        <Fade in={open}>
          <Box sx={styleBox}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <img
                  src={quiz.image}
                  alt={quiz.name}
                  width='100%'
                />
              </Grid>
              <Grid container item xs={12} md={6} direction='column' justifyContent='space-between' >
                <Grid item>
                    <Typography variant='subtitle1' marginBottom='5px'>
                      {quiz.name}
                    </Typography>
                    <Typography variant='body2' marginBottom='5px'>
                      {quiz.description}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      Time estimate for this quiz is {timeForQuiz}
                    </Typography>
                </Grid>
                <Grid item>
                  <Button
                    variant='contained'
                    color='success'
                    size='small'
                    onClick={handleClickClose}
                    sx={{ width: '100%', marginTop: 1 }}
                  >
                    Close Modal
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </div>
);

export default BasicModal;
