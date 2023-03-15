import React from 'react';
import { 
    CardMedia, 
    Grid,
    Typography,
    Button,
    Fade,
    Modal,
    Box,
    Backdrop
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

const styleBtn = {
    width: '100%',
    marginTop: 1
}

const styleModal = {
    overflow: 'scroll'
}


const BasicModal = ({ open, handleClickClose, quiz, timeForQuiz }) => {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClickClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        sx={styleModal}
      >
        <Fade in={open}>
          <Box sx={styleBox}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <CardMedia
                  component="img"
                  alt="quiz name"
                  height="140"
                  image={quiz.image}
                />
              </Grid>
              <Grid item xs={12} md={6} container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1" component="div">
                      {quiz.name}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      {quiz.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Time estimate for this quiz is {timeForQuiz}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={12} container>
                  <Button
                    variant="contained"
                    color="success"
                    size="small"
                    onClick={handleClickClose}
                    sx={styleBtn}
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
}

export default BasicModal;