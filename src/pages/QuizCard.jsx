import React, { useState } from 'react';
import BasicAlert from '../components/Modals/BasicAlert';
import BasicModal from '../components/Modals/BasicModal';
import { 
    Card, 
    CardActions, 
    CardContent, 
    CardMedia, 
    Button, 
    Typography, 
    Grid 
} from "@mui/material";

const QuizCard = ({ quiz }) => {

    const func = {
        'alertOpen': () =>  setAlertOpen(true),
        'alertClose': () =>  setAlertOpen(false),
        'modalOpen': () =>  setModalOpen(true),
        'modalClose': () =>  setModalOpen(false),
    }

    const [alertOpen, setAlertOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
  
    const handleClick = (funcName) => func[funcName];

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card>
                <CardMedia
                    component="img"
                    alt="quiz name"
                    height="140"
                    image={quiz.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {quiz.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {quiz.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={handleClick('alertOpen')}>Start quiz</Button>
                    <Button size="small" onClick={handleClick('modalOpen')}>Show More</Button>
                </CardActions>
                <BasicAlert open={alertOpen} handleClickClose={handleClick('alertClose')} text={"Quiz is start!"} />
                <BasicModal open={modalOpen} handleClickClose={handleClick('modalClose')} quiz={quiz} timeForQuiz={"5min"} />
            </Card>
        </Grid>
    );
}

export default QuizCard;
