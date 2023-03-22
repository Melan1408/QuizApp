import { Component } from 'react';
import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import { quizes } from "../api/api"
import QuizCard from './QuizCard';

export default class Quiz extends Component {

    state = {
        quizes: []
    }

    constructor() {
        super();       
    }

    render() {
        return (
            <Container sx={{ p: 8 }}>
                <Grid container spacing={{ xs: 2, md: 3 }}>
                    {this.state.quizes.map((quiz, index) => (
                        <QuizCard
                            key={index}
                            quiz={quiz}
                        />))}
                </Grid>
            </Container >
        );
    }

    componentDidMount() {
        quizes.fetch()
            .then(quizes => this.setState({ ...this.state, quizes }));
    }
}
