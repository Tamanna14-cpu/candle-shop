import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import './Products.css';
import Zoom from 'react-reveal/Zoom';


const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://limitless-everglades-29893.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 6)));
    }, [])


    return (
        <Container className="py-5">

            <h5 className="font-monospace  text-muted">Candles & Diffusers</h5>

            <h1 className="py-5 letter-spacing fw-bold text-uppercase" >
                <Zoom bottom cascade>
                    PICKS FOR THIS SEASON
                </Zoom>
            </h1>


            <Row xs={1} md={2} className="g-5 mb-5 pb-5 container">

                {
                    products.map((pd) => <Col key={pd._id}>

                        <Fade bottom>


                            <Card className="card-height service-card">

                                <Row md={2}>
                                    {/* <Col className="hover01">
                                        <figure> <Card.Img variant="top" className="service-img" src={pd.image} /></figure>

                                    </Col> */}

                                    <Col className="img-effect">
                                        <Card.Img variant="top" className="service-img img-fluid" src={pd.image} />
                                        <div className="middle">
                                            <i className="fas fa-heart text fs-4"></i>
                                            <i className="fab fa-instagram text fs-4"></i>
                                        </div>

                                    </Col>

                                    <Col>
                                        <Card.Body className="mt-5">

                                            <Card.Title className="font-monospace">
                                                {pd.title}
                                            </Card.Title>

                                            <Card.Text>
                                                <Rating
                                                    initialRating={pd.review}
                                                    readonly
                                                    emptySymbol="far fa-star"
                                                    fullSymbol="fas fa-star">
                                                </Rating>

                                                <div className="pt-2">{pd.description}</div>
                                                <div className="pt-2">${pd.price}</div>
                                            </Card.Text>
                                        </Card.Body>

                                        <Link to={`/placeOrder/${pd._id}`}>
                                            <button type="button" className="btn btn-outline-secondary service-btn">Book Now</button>
                                        </Link></Col>
                                </Row>

                                <hr />

                            </Card>
                        </Fade>

                    </Col>)
                }

            </Row>
        </Container>
    );
};

export default Products;