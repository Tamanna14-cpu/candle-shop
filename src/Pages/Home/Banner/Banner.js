import React from 'react';
import { Container } from 'react-bootstrap';
import './Banner.css';
import banner1 from '../../../images/banner/banner-7.jpg';
import banner2 from '../../../images/banner/banner-6.jpg';
import banner3 from '../../../images/banner/banner-4.jpg';
import Fade from 'react-reveal/Fade';


const Banner = () => {
    return (
        <Container className="my-5">

            <div id="carouselExampleSlidesOnly" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={banner1} className="banner-img" alt="..." />
                        <div className="carousel-caption banner-txt">
                            <Fade top>
                                <h4 className="py-4 font-monospace">Candle & Diffusers</h4>
                                <h1 className="pb-4 fw-bold header-txt font-monospace">Orginal Design</h1>
                                <h5>combination of fragrance, flower & love have a artistic vibe now!</h5>
                                <button className="btn btn-outline-light mt-5">Read More</button>
                            </Fade>

                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={banner2} className="banner-img" alt="..." />
                        <div className="carousel-caption banner-txt">
                            <Fade top>
                                <h4 className="py-4 font-monospace">Candle & Diffusers</h4>
                                <h1 className="pb-4 fw-bold header-txt font-monospace">Handmade Candles</h1>
                                <h5>combination of fragrance, flower & love have a artistic vibe now!</h5>
                                <button className="btn btn-outline-light mt-5">Read More</button>
                            </Fade>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={banner3} className="banner-img" alt="..." />
                        <div className="carousel-caption banner-txt">
                            <Fade top>
                                <h4 className="py-4 font-monospace">Candle & Diffusers</h4>
                                <h1 className="pb-4 fw-bold header-txt font-monospace">Made With Love</h1>
                                <h5>combination of fragrance, flower & love have a artistic vibe now!</h5>
                                <button className="btn btn-outline-light mt-5">Read More</button>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>

        </Container>
    );
};

export default Banner;