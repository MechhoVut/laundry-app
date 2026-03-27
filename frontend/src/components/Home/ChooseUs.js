import { faLeaf, faLiraSign, faMedal, faMoneyBillAlt, faSoap, faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, CardBody, CardHeader, CardText, CardTitle, Col, Container, Row } from 'reactstrap';
import '../../App.css';

const service = [
	{
		src: <FontAwesomeIcon icon={faTruck} /> ,
		name: 'Free Pickup & Delivery ',
		title: 'We pick up and deliver your laundry right at your doorstep, on time and fresh like a daisy.'
	},
	{
		src: <FontAwesomeIcon icon={faSoap} /> ,
		name: 'Hygienic',
		title: 'Your clothes are washed hygienically, ensuring they are germ-free and clean. The way you think about laundry!'
	},
	{
		src: <FontAwesomeIcon icon={faLiraSign} /> ,
		name: 'Affordable',
		title: 'No Additional Charges! You pay exactly the price that is set and displayed.'
	},
	{
		src: <FontAwesomeIcon icon={faLeaf} /> ,
		name: 'Eco Friendly',
		title: 'Local residents love our reliable laundry and dry cleaning services for fast, accurate, and high-quality results without waste.'
	},
	{
		src: <FontAwesomeIcon icon={faMedal} /> ,
		name: 'Quality Guarantee',
		title: 'We are professionals in the laundry business, which means we always stay up to date with the latest technology and consistently deliver the best service.'
	},
	{
		src: <FontAwesomeIcon icon={faMoneyBillAlt} /> ,
		name: 'Transparent Pricing',
		title: 'With affordable prices, our services fit within the same budget or even less than other local laundry services near you.'
	}
];

const ChooseUs = () => {
    return (
        <section className="mb-3" id="ChooseUs">
        <Container>
            <div className="d-flex justify-content-center mt-5">
                <h2 className="text-primary head-title">Why Choose Us</h2>
            </div>
            <Row>
                {service.map(item => 
                    <Col md={4} className="d-flex justify-content-center mt-4" key={item.name}>
                        <Card style={{ width: '20rem' }}>
                            <CardHeader className="text-center mt-2 text-primary"><span className="icon-size">
                            {item.src}
                            </span></CardHeader>
                            <CardBody>
                                <CardTitle tag="h4" >{item.name}</CardTitle>
                                <CardText className="text-secondary">{item.title}</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                )}
            </Row>
        </Container>
    </section>
    );
};

export default ChooseUs;