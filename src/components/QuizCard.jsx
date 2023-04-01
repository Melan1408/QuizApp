import React, { useState } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from '@mui/material';
import { Link } from 'react-router-dom';
import BasicModal from './Modals/BasicModal';
import BasicButton from './styled/BasicButton';

const QuizCard = ({ quiz }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const func = {
    modalOpen: () => setModalOpen(true),
    modalClose: () => setModalOpen(false),
  };

  const handleClick = (funcName) => func[funcName];

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardMedia
          component='img'
          alt='quiz name'
          height='140'
          image={quiz.image}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {quiz.name}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {quiz.description}
          </Typography>
        </CardContent>
        <CardActions>
          <BasicButton variant='h6' component={Link} to={`/${quiz.name.toLowerCase()}`} sx={{
            mr: '10px',
            p: '7px 10px',
          }}>
            Go to Quiz
          </BasicButton>
          <BasicButton variant='h6' size='small' onClick={handleClick('modalOpen')} sx={{
            p: '7px 10px',
          }}>
            Show More
          </BasicButton>
        </CardActions>
        <BasicModal open={modalOpen} handleClickClose={handleClick('modalClose')} quiz={quiz} />
      </Card>
    </Grid>
  );
};

export default QuizCard;
