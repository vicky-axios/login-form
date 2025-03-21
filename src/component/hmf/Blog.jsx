import React, { useState, useEffect } from 'react';
import { Card, CardMedia, CardContent, Typography, Grid, Container, Grid2 } from '@mui/material';

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
                backgroundColor: "#000", 
                padding: 4, 
                minHeight: "100vh" 
            }}
        >
            <Typography 
                variant="h2" 
                align="center" 
                gutterBottom 
                sx={{
                    color: "aqua",
                    fontSize: "5rem",
                    marginBottom: "2em",
                    fontFamily: "'Stylish', sans-serif"
                }}
            >
                Fake API Store
            </Typography>
            <Grid2 
                container 
                spacing={3} 
                justifyContent="center"
            >
                {fake.map((values) => (
                    <Grid2 item xs={12} sm={6} md={4} key={values.id}>
                        <Card 
                            sx={{ 
                                width: "100%", 
                                backgroundColor: "rgba(255, 255, 255, 0.1)", 
                                padding: 2, 
                                boxShadow: "2px 2px 10px white", 
                                color: "#fff",
                                display: "flex", 
                                flexDirection: "column", 
                                alignItems: "center",
                                textAlign: "center"
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="300"
                                image={values.image}
                                alt={values.title}
                                sx={{ 
                                    objectFit: "contain", 
                                    width: "300px", 
                                    height: "300px" 
                                }}
                            />
                            <CardContent>
                                <Typography 
                                    variant="h6" 
                                    component="div" 
                                    sx={{
                                        color: "#fff",
                                        fontFamily: "'Stylish', sans-serif"
                                    }}
                                >
                                    {values.title}
                                </Typography>
                                <Typography 
                                    variant="body2" 
                                    color="palegreen"
                                >
                                    {values.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid2>
                ))}
            </Grid2>
        </Container>
    );
};

export default FakeApi;


















// import React, { useState, useEffect } from 'react'
// import '../component/Fake.css'
// const FakeApi = () => {

//     {/* https://fakestoreapi.com/carts */ }
    
//     const [fake, setFake] = useState([]);
//     console.log(fake);
//     useEffect(() => {
//         fakestore();
//     }, [])

//     const fakestore = async () => {
//         const response = await fetch("https://fakestoreapi.com/products");
//         // console.log(response);
//         const jsonData = await response.json();
//         // console.log(jsonData);
//         setFake(jsonData);

//     }



//     return (
//         <>

//             <div>Fak Api Store </div>
//             <div className='container'>
//                 {fake.map((values) => {

//                     return (
//                     <>
//                             <div className='box'>
//                                 <div className='content'>
//                                     <h5>{values.title}</h5>
//                                     <p>{values.discription}</p>
//                                 </div>
//                                <img src={values.image} alt="" />
//                             </div>
//                         </>
//                     )


//                 })}

//             </div>
//         </>
//     )
// }

// export default FakeApi