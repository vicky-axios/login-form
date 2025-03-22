import React, { useState, useEffect } from 'react';
import { Card, CardMedia, CardContent, Typography, Grid, Container } from '@mui/material';

const FakeApi = () => {
    const [fake, setFake] = useState([]);

    useEffect(() => {
        fakestore();
    }, []);

    const fakestore = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const jsonData = await response.json();
        setFake(jsonData);
    };

    return (
        <Container 
            maxWidth="lg" 
            sx={{ 
                backgroundColor: "#f4f3f3", 
                padding: 4, 
                minHeight: "100vh",
                width: "100%"
            }}
        >
            <Typography 
                variant="h4" 
                align="center" 
                gutterBottom 
                sx={{
                    color: "#333",
                    fontSize: "2rem",
                    marginBottom: "2em",
                    fontWeight: "bold"
                }}
            >
                All Products
            </Typography>

            <Grid container spacing={3} justifyContent="center">
                {fake.map((values) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={values.id}>
                        <Card 
                            sx={{ 
                                backgroundColor: "#fff", 
                                padding: 2, 
                                boxShadow: "2px 2px 10px rgba(0,0,0,0.1)", 
                                display: "flex", 
                                flexDirection: "column",
                                alignItems: "center",
                                textAlign: "center",
                                borderRadius: "10px"
                            }}
                        >
                            <CardMedia
                                component="img"
                                image={values.image}
                                alt={values.title}
                                sx={{ 
                                    objectFit: "contain", 
                                    width: "100%", 
                                    height: "200px",
                                    padding: "10px"
                                }}
                            />
                            <CardContent>
                                <Typography 
                                    variant="h6" 
                                    sx={{
                                        fontSize: "1rem",
                                        fontWeight: "bold",
                                        color: "#222",
                                        height: "50px",
                                        overflow: "hidden"
                                    }}
                                >
                                    {values.title}
                                </Typography>
                                <Typography 
                                    variant="body2" 
                                    color="textSecondary"
                                    sx={{ height: "40px", overflow: "hidden" }}
                                >
                                    {values.category}
                                </Typography>
                                <Typography 
                                    variant="h6" 
                                    sx={{ 
                                        color: "#d32f2f", 
                                        fontWeight: "bold", 
                                        marginTop: "10px"
                                    }}
                                >
                                    ${values.price}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default FakeApi;