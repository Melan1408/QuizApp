import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import axios from 'axios';
import QuizItem from './QuizItem';

const QuizPage = () => {

    let [quizes, setQuizes] = useState([]);

    useEffect(() => {
        (async () => {
            const {data} = await axios.get("https://6410b130ff89c2e2d4e668e4.mockapi.io/quizes");
            setQuizes(data);
        })();
    }, []); 

    return (
        <Container sx={{ p: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }}>
                {quizes.map((quiz, index) => (
                    <QuizItem
                        key={index}
                        quiz={quiz}
                    />))}
            </Grid>
        </Container >
    );
}

export default QuizPage;