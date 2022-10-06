import * as React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './run.css';
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Toolbar from "@mui/material/Toolbar";
// import Button from "@mui/material/Button";
function Homepag() {
    const navigate = useNavigate();
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
    };
    return (
        <>

            <div className='r_back'>

                <div className='row r_h1'>
                    
                    <Box sx={{ display: "flex" }}>
                        <AppBar color="transparent" component="nav">
                            <Toolbar>
                                <>
                                    <h1 className='logo'>TrainerGoesOnline</h1>
                                    <div className='nav'>
                                        
                                        <Button sx={{ color: "#ffff", fontWeight: "100", fontSize: ".9vw", marginRight: ".4vw" }} onClick={() => navigate("/")}>
                                            LOOSE FAT
                                        </Button>
                                        <Button sx={{ color: "#ffff", fontSize: ".9vw", fontWeight: "100", marginRight: ".4vw" }} onClick={() => navigate("/")}>
                                            SUPPLIMENTS
                                        </Button>
                                        <Button sx={{ color: "#ffff", fontSize: ".9vw", fontWeight: "100", marginRight: ".4vw" }} onClick={() => navigate("/")}>
                                            7 DAY DETOX
                                        </Button>
                                        <Button sx={{ color: "#ffff", fontSize: ".9vw", fontWeight: "100", marginRight: ".4vw" }} onClick={() => navigate("/")}>
                                            LEAN MUSCLE
                                        </Button>
                                        <Button sx={{ color: "#ffff", fontSize: ".9vw", fontWeight: "100", marginRight: ".4vw" }} onClick={() => navigate("/")}>
                                            CLOTHING
                                        </Button>
                                        <Button sx={{ color: "#ffff", fontSize: ".9vw", fontWeight: "100", marginRight: ".4vw" }} onClick={() => navigate("/")}>
                                            ABOUT
                                        </Button>
                                        <Button sx={{ color: "#ffff", fontSize: ".9vw", fontWeight: "100", marginRight: ".4vw" }} onClick={() => navigate("/")}>
                                            BLOG
                                        </Button>
                                        <Button sx={{ color: "#ffff", fontSize: ".9vw", fontWeight: "100", marginRight: ".4vw" }} onClick={() => navigate("/")}>
                                            CONTACTS
                                        </Button>
                                        <Button sx={{ color: "#ffff", fontSize: ".9vw", fontWeight: "100", marginRight: ".4vw" }} onClick={() => navigate("/")}>
                                            REVIEWS
                                        </Button>
                                        <Button sx={{ color: "#ffff", fontSize: ".9vw", fontWeight: "100", marginRight: ".4vw" }} onClick={() => navigate("/")}>
                                            MY ACCOUNT
                                        </Button>
                                    </div>
                                </>
                            </Toolbar>

                        </AppBar>

                    </Box>
                </div>
                <div className='row r_box'>
                    <div>WHAT IS YOUR #1 GOAL?</div>
                </div>
                <br/>
                <br/>
                <div className='row r_box1'>
                    <div className='col-6 r_x1'>
                        <div className='row r1'>
                            <div>Lose Fat</div>
                        </div>
                        <div className='rb1'>
                            <Stack spacing={6} direction="row">
                                <Button variant="contained">I WANT TO LOSE FAT!</Button>
                            </Stack>
                        </div>
                    </div>
                    <div className='col-6 r_x2'>
                        <div className='row r1'>
                            <div>Gain Mass</div>
                        </div>
                        <div className='rb1'>
                            <Stack spacing={6} direction="row">
                                <Button variant="contained">I WANT TO GAIN LEAN MASS!</Button>
                            </Stack>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <div className='row'>
                    <Slider {...settings}>
                        <div>
                            <img src="https://cdn.shopify.com/s/files/1/1060/9112/products/183_492x.png?v=1579804734" style={{ width: "90%" }} ></img>
                        </div>
                        <div>
                            <img src="https://cdn.shopify.com/s/files/1/1060/9112/products/healthy-mindsetposter-hot-pink-01_1800x.jpg?v=1641843335" style={{ width: "90%" }}></img>
                        </div>
                        <div>
                            <img src="https://st3.depositphotos.com/15985744/18411/v/1600/depositphotos_184114572-stock-illustration-sport-healthy-lifestyle-infographics-elements.jpg" style={{ width: "90%" }}></img>
                        </div>
                        <div>
                            <img src="https://www.shutterstock.com/image-vector/only-way-finish-start-running-600w-488912599.jpg" style={{ width: "90%" }}></img>
                        </div>
                        <div>
                            <img src="https://www.shutterstock.com/image-vector/vector-typographic-running-poster-template-600w-1064317586.jpg" style={{ width: "90%" }} ></img>
                        </div>
                        <div>
                            <img src="https://www.shutterstock.com/image-vector/boxing-gloves-hanging-air-on-600w-1409261939.jpg" style={{ width: "90%" }}></img>
                        </div>
                        <div>
                            <img src="https://www.shutterstock.com/image-vector/illustration-woman-doing-asana-international-600w-655129738.jpg" style={{ width: "90%" }}></img>
                        </div>
                    </Slider>
                </div>
                <br/>
                <br/>
                <div>
                    <h1 className='cont'>Contact Us</h1>
                    <div>
                        <p className='cont'><img src="https://static.vecteezy.com/system/resources/thumbnails/000/552/683/small/location_pin_002.jpg" style={{ width: "1%" }}/>       Gachibowli, Hyderabad</p>
                        <p className='cont'><img src="https://icon2.cleanpng.com/20180623/jwo/kisspng-mobile-phones-business-telephone-system-business-c-white-phone-icon-5b2dd46f3abfb9.4434500615297301592406.jpg" style={{ width: "1%" }}/>       9553278421</p>
                        <a href="https://www.facebook.com/trainergoesonline/" style={{ textDecoration: 'none' }}><p className='cont'><img src="https://www.clipartmax.com/png/full/416-4169142_facebook-logo-facebook-white-icon-png-2018.png" style={{ width: "1%" }}/>       TrainerGoesOnline</p></a>
                        <a href="https://www.instagram.com/trainergoesonline/?hl=en" style={{ textDecoration: 'none' }}><p className='cont'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ45TYXdgAJ1HJ8-tahLzEfx9gngXmi4a4kRA&usqp=CAU" style={{ width: "1%" }}/>       TrainerGoesOnline</p></a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Homepag;