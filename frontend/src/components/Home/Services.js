import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Container, Row } from 'reactstrap';

const services = [
	{
		src: require('../../images/service/wash-iron.jpeg'),
		name: 'Wash & Iron',
		title: 'All your regular wear garments will be washed, steam ironed and neatly packed for delivery.',
		link: '/wash-and-iron'
	},
	{
		src: require('../../images/service/wash-fold.jpg'),
		name: 'Dry Cleaning',
		title: 'Just in case you choose not to use our steam ironing services we will wash and fold them for you.',
		link: '/wash-and-fold'
	},
	{
		src: require('../../images/service/iron-fold.jpg'),
		name: 'Iron Only',
		title: 'Get back your dirty clothes. Your clothes we will ironed and pressed to look the best for you.',
		link: '/iron-and-fold'
	},
	{
		src: require('../../images/service/dry-cleaning.webp'),
		name: 'Mass Wash',
		title: 'This service is designed for handling high volumes of laundry at once, making it faster and more cost-effective.',
		link: '/dry-cleaning'
	},
	{
		src: require('../../images/service/subscription.jpg'),
		name: 'Urgent Package',
		title: 'You can use our emergency service to receive services easily and quickly in our machines using very safe. ',
		link: '/emergency-service'
	},
	{
		src: require('../../images/service/emergency.jpg'),
		name: 'Special Item Cleaning',
		title: 'This service focuses on cleaning bulky, delicate, or non-standard items such as blankets, quilts, curtains, and drapes.',
		link: '/subscription-based'
	}
];

const Services = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<section className="mb-3" id="services">
			<Container>
				<div className="d-flex justify-content-center mt-5">
					<h2 className="text-primary head-title">List Services</h2>
				</div>
				<Row>
					{services.map((service) => (
						<Col md={4} className="d-flex justify-content-center mt-4" key={service.src}>
							<Card style={{ width: '20rem' }}>
								<CardImg className="service-image" src={service.src} top />
								<CardBody>
									<CardTitle tag="h3" className="text-primary">
										{service.name}
									</CardTitle>
									<CardText>{service.title}</CardText>

									<Link to={service.link}>
										<Button color="danger" className="service-button">
											<i className="now-ui-icons arrows-1_minimal-right" />
											<span className="nav-name"> Select Service </span>
										</Button>
									</Link>
								</CardBody>
							</Card>
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default Services;
