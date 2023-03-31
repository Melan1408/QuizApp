import React, { useState } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
} from '@mui/material';
import { Link } from 'react-router-dom';
import BasicModal from './Modals/BasicModal';

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
          <Button variant='h6' sx={{
            p: '7px 15px',
            color: '#696F79',
            background: 'white',
            borderRadius: '12px',
            fontFamily: 'Poppins',
            fontWeight: '600',
            border: '2px solid #696F79',
            ':hover': { color: 'white', background: '#696F79' },
          }}>
            <Link
            style={{ textDecoration: 'none', color: 'inherit' }}
            to={`/${quiz.name.toLowerCase()}`}
            >
             Go to Quiz
            </Link>
          </Button>
          <Button variant='h6' size='small' onClick={handleClick('modalOpen')} sx={{
            p: '7px 15px',
            color: '#696F79',
            background: 'white',
            borderRadius: '12px',
            fontFamily: 'Poppins',
            fontWeight: '600',
            border: '2px solid #696F79',
            ':hover': { color: 'white', background: '#696F79' },
          }}>Show More</Button>
        </CardActions>
        <BasicModal open={modalOpen} handleClickClose={handleClick('modalClose')} quiz={quiz} />
      </Card>
    </Grid>
  );
};

export default QuizCard;
