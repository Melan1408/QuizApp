import { Component } from 'react';
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

export default class QuizCard extends Component{

    state = {
        openAlert: false,
        openModal: false
    }

    constructor() {
        super();
        this.handleToggleOpenAlert = this.handleToggleOpenAlert.bind(this);
        this.handleToggleOpenModal = this.handleToggleOpenModal.bind(this);
    }
    
    render() {
        const {quiz} = this.props;
        return(
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
                        <Button size="small" onClick={this.handleToggleOpenAlert}>Start quiz</Button>
                        <Button size="small" onClick={this.handleToggleOpenModal}>Show More</Button>
                    </CardActions>
                    <BasicAlert open={this.state.openAlert} handleClickClose={this.handleToggleOpenAlert} text={"Quiz is start!"} />
                    <BasicModal open={this.state.openModal} handleClickClose={this.handleToggleOpenModal} quiz={quiz} timeForQuiz={"5min"} />
                </Card>
            </Grid>
        );
    }

    handleToggleOpenAlert() {
        this.setState({ ...this.state, openAlert: !this.state.openAlert });
    }

    handleToggleOpenModal() {
        this.setState({ ...this.state, openModal: !this.state.openModal });
    }
}
