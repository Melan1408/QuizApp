import React, { useState } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  IconButton,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import { Link } from 'react-router-dom';
import { quizesThunks } from '../store/modules/quizes';
import BasicModal from './Modals/BasicModal';
import BasicButton from './styled/BasicButton';

const QuizCard = ({ quiz }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [favorite, setFavorite] = useState(quiz.favorite);
  const dispatch = useDispatch();
  const handleFavorite = () => {
    setFavorite(!favorite);
    (async () => {
      await dispatch(quizesThunks.putQuiz({ ...quiz, favorite: !favorite }, quiz.id));
    })();
  };

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
            mr: '8px',
            p: '7px 5px',
          }}>
            Open
          </BasicButton>
          <BasicButton variant='h6' size='small' onClick={() => setModalOpen(true)} sx={{
            p: '7px 5px',
          }}>
            Show More
          </BasicButton>
          <IconButton sx={{
            color: quiz.favorite ? 'red' : 'inherit',
            '&:hover': { backgroundColor: '#ABB8C3' },
          }} onClick={handleFavorite}>
            <FavoriteTwoToneIcon />
          </IconButton>
        </CardActions>
        <BasicModal open={modalOpen} handleClickClose={() => setModalOpen(false)} quiz={quiz} />
      </Card>
    </Grid>
  );
};

export default QuizCard;
