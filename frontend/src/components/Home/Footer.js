import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

const Footer = () => {
    return (
        <footer id="Footer">
            <footer className="site-footer bg-4 site-footer-2 pt-190">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-widget">
                                <h4 className="title">Our Services</h4>
                                <ul>
                                    <li><a href="#0"><i className="fal fa-angle-right "></i></a></li>
                                    <li><a href="#0"><i className="fal fa-angle-right "></i> </a></li>
                                    <li><a href="#0"><i className="fal fa-angle-right "></i> </a></li>
                                    <li><a href="#0"><i className="fal fa-angle-right "></i> </a></li>
                                    <li><a href="#0"><i className="fal fa-angle-right "></i> </a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-widget service-menu">
                                <h4 className="title">Our Company</h4>
                                <ul>
                                    <li><a href="#0"><i className="fal fa-angle-right "></i> </a></li>
                                    <li><a href="#0"><i className="fal fa-angle-right "></i> </a></li>
                                    <li><a href="#0"><i className="fal fa-angle-right "></i> </a></li>
                                    <li><a href="#0"><i className="fal fa-angle-right "></i> </a></li>
                                    <li><a href="#0"><i className="fal fa-angle-right "></i> </a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-6 offset-xl-1 col-lg-6">
                            <div className="footer-widget footer-contact-widget">
                                <h4 className="title">Contact Us</h4>
                                <div className="footer-contact-info">
                                    <div className="content">
                                        <p> Rabindra Sarani, near Sudebi Nursing Home, Durga Nagar, North Dumdum, Kolkata, West Bengal 700065</p>
                                        <a href="#0"><i className="fal fa-angle-right"></i> Get Direction</a>
                                        <hr />
                                        <a href="tel:800-567-8990"><span><i className="fas fa-phone mr-1"></i></span>7439222628</a>
                                        <a href="mailto:office@example.com"><span><i className="fas fa-envelope mr-1"></i></span>adding soon</a>
                                    </div>
                                    <div className="box rounded">
                                        <Link to="/admin">
                                            <h2><span>login</span>
                                                Admin Panel</h2>
                                            <span className="icon"><i className="fas fa-user-shield"></i></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="copyright mt-100 pt-30 pb-30 text-center">
                                <p>Copyright By@Chandan Biswas - 2026</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </footer>
    );
};

export default Footer;