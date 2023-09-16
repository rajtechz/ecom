import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import 'react-toastify/dist/ReactToastify.css'; 
import { toast } from 'react-toastify';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { ToastContainer } from 'react-toastify';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";
import p6 from "../assets/p6.jpg";
import p7 from "../assets/p7.jpg";
import p8 from "../assets/p8.jpg";

export default function Home() {
    const Data = [
        {
            "name": "charger",
            "price": "100",
            "category": "computers",
            "description": "",
            "image": p1
        },
        {
            "name": "Kiwi",
            "price": "10",
            "category": "Clothing",
            "description": "fashion, clothes , sweater, wool, cardigan,...",
            "image": p2
        },
        {
            "name": "grapes",
            "price": "50",
            "category": "Clothing",
            "description": "fashion, tie, clothes, accessory , accessoire,...",
            "image": p3
        },
        {
            "name": "pomegranate",
            "price": "600",
            "category": "Clothing",
            "description": "winter jacket ",
            "image": p4
        },
        {
            "name": "mobile",
            "price": "200",
            "category": "Clothing",
            "description": "winter jacket ",
            "image": p5
        }, {
            "name": "jacket",
            "price": "300",
            "category": "Clothing",
            "description": "winter jacket ",
            "image": p6
        },
        {
            "name": "cycle",
            "price": "400",
            "category": "Clothing",
            "description": "winter jacket ",
            "image": p7
        },
        {
            "name": "laptop",
            "price": "500",
            "category": "Clothing",
            "description": "winter jacket ",
            "image": p8
        }
    ];

    const [selectedItemName, setSelectedItemName] = useState(null);
    const [selectedItemPrice, setSelectedItemPrice] = useState(null);
    const [count, setCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const handleItemClick = (name, price) => {
        setSelectedItemName(name);
        setSelectedItemPrice(price);
    };

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const calculateTotalPrice = () => {
        if (selectedItemPrice !== null) {
            return selectedItemPrice * count;
        }
        return 0;
    };

    useEffect(() => {
        setTotalPrice(calculateTotalPrice());
    }, [count, selectedItemPrice]);

    const handleCancel = () => {
        toast.error('Order canceled!');
    };

    const handleBuy = () => {
        toast.success('Order placed successfully!');
    };

    return (
        <>
            <Box p={2}>
            <ToastContainer position="top-center" autoClose={3000} /> 

                <Grid container spacing={2}>
                    <Grid item xs={6} md={6} lg={6}>
                        <Box sx={{ display: 'flex', justifyContent: "space-between", p: 2 }}>
                            <Box sx={{ justifyContent: "center", textAlign: "center", alignItems: "center" }}>
                                <Typography>Product</Typography>
                                {selectedItemName && (
                                    <Box sx={{ mt: 2 }}>
                                        <Typography> {selectedItemName}</Typography>
                                    </Box>
                                )}
                            </Box>
                            <Box sx={{ justifyContent: "center", textAlign: "center", alignItems: "center" }}>
                                <Typography>Price</Typography>
                                <Box mt={2}>
                                    {selectedItemPrice && (
                                        <Typography>{selectedItemPrice}</Typography>
                                    )}
                                </Box>
                            </Box>
                            <Box sx={{ justifyContent: "center", textAlign: "center", alignItems: "center" }}>
                                <Typography>Quantity</Typography>
                                <Box sx={{ mt: 2, display: "flex", gap: 2 }}>
                                    <Button variant="outlined" onClick={handleDecrement}>
                                        <RemoveIcon />
                                    </Button>
                                    <span>{count}</span>
                                    <Button variant="outlined" onClick={handleIncrement}>
                                        <AddIcon />
                                    </Button>
                                </Box>
                            </Box>
                            <Box>

                                <Typography>Total</Typography>
                                <Box mt={2}>
                                    <Typography>{totalPrice}</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{ background: "#A0D6B4", p: 3 }}>
                            <Box sx={{ justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                                <Box mt={2} sx={{ display: "flex", justifyContent: "space-evenly" }}>

                                    <Typography> Quantity</Typography>
                                    <Typography>{count}</Typography>
                                </Box>
                                <Box mt={2} sx={{ display: "flex", justifyContent: "space-evenly" }}>

                                    <Typography>Total</Typography>
                                    <Typography>{totalPrice}</Typography>
                                </Box>

                            </Box>
                            <Box sx={{ display: "flex", gap: 3, justifyContent: "center", alignItems: "center", textAlign: 'center', mt: 10 }}>
                                <Button variant="contained" sx={{ background: "red" }} onClick={handleCancel}>
                                    Cancel
                                </Button>
                                <Button variant="contained" sx={{ background: "#12AD2B" }} onClick={handleBuy}>
                                    Buy
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container spacing={2}>
                            {Data.map((item, index) => (
                                <Grid item xs={6} sm={4} md={3} key={index}>
                                    <Card
                                        style={{ display: 'flex', flexDirection: 'column', height: '100%', cursor: 'pointer' }}
                                        onClick={() => handleItemClick(item.name, item.price)}
                                    >
                                        <CardMedia
                                            component="img"
                                            alt={item.name}
                                            height="140"
                                            image={item.image}
                                        />
                                        <CardContent style={{ flex: '1' }}>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {item.name}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                Price: {item.price}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                Category: {item.category}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                Description: {item.description}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
