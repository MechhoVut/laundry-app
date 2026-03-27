import React from 'react';
import '../../App.css';

const About = () => {
	return (
		<section className="pricing-area bg-3 pt-120 pb-120">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-xl-4 text-center">
						<div className="section-heading section-heading-2 white mb-70">
							<h2 className="section-title-primary">Price &amp; Plans</h2>
						</div>
					</div>
				</div>
				<div className="row mt-none-30 no-gutters">
					<div className="col-xl-4 col-lg-6 mt-30">
						<div className="single-pricing-box">
							<div className="icon-wrap">
								<div className="pricing-icon">
									<img className="default" src="assets/images/icons/pricing-1-icon-1.png" alt="" />
									<img className="hover" src="assets/images/icons/pricing-1-icon-1-h.png" alt="" />
								</div>
							</div>
							<div className="pricing-head">
								<h4 className="sub-title">Monthly Plan</h4> <br />
								<h2 className="price"><span>.</span><sup></sup></h2>
								<p>We will be launching this service soon.</p>
							</div>
							<ul>
								<li><i className="fal fa-check"></i>.</li>
								<li><i className="fal fa-check"></i>.</li>
								<li><i className="fal fa-check"></i>.</li>
								<li><i className="fal fa-check"></i>.</li>
							</ul>
							<a href="#0" className="site-btn">Book Now</a>
						</div>
					</div>
					<div className="col-xl-4 col-lg-6 mt-30">
						<div className="single-pricing-box active">
							<div className="icon-wrap">
								<div className="pricing-icon">
									<img className="default" src="assets/images/icons/pricing-1-icon-2-h.png" alt="" />
									<img className="hover" src="assets/images/icons/pricing-1-icon-2.png" alt="" />
								</div>
							</div>
							<div className="pricing-head">
								<h4 className="sub-title">Yearly Plan</h4> <br />
								<h2 className="price"><span>.</span><sup></sup></h2>
								<p>We will be launching this service soon.</p>
							</div>
							<ul>
								<li><i className="fal fa-check"></i>.</li>
								<li><i className="fal fa-check"></i>.</li>
								<li><i className="fal fa-check"></i>.</li>
								<li><i className="fal fa-check"></i>.</li>
							</ul>
							<a href="#0" className="site-btn">Book Now</a>
						</div>
					</div>
					<div className="col-xl-4 col-lg-6 mt-30">
						<div className="single-pricing-box">
							<div className="icon-wrap">
								<div className="pricing-icon">
									<img className="default" src="assets/images/icons/pricing-1-icon-3.png" alt="" />
									<img className="hover" src="assets/images/icons/pricing-1-icon-3-h.png" alt="" />
								</div>
							</div>
							<div className="pricing-head">
								<h4 className="sub-title text-danger">Urgent Package</h4> <br />
								<h2 className="price"><span>.</span><sup></sup></h2>
								<p>We will be launching this service soon.</p>
							</div>
							<ul>
								<li><i className="fal fa-check"></i>.</li>
								<li><i className="fal fa-check"></i>.</li>
								<li><i className="fal fa-check"></i>.</li>
								<li><i className="fal fa-check"></i>.</li>
							</ul>
							<a href="#0" className="site-btn">Order Now</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
