import React, { useEffect } from 'react';
import { Nav } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import YouTubeIcon from '@material-ui/icons/YouTube';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import HomeIcon from '@material-ui/icons/Home';

const footerStyle={
  display: 'flex',
  // justifyContent: 'center',
  alignItems: 'center',
  height: '48vh'
}

const Footer = () =>{
    const year = new Date().getFullYear();
    
    useEffect(() =>{
      AOS.init({duration: 2000,
          delay: 200,
          once: false,
          mirror: false,
      });
      // AOS.init();
  }, []);

  return(
    <React.Fragment>
      <footer id="footer-section" className="footer">
        <div className="container">
            <div className="row">
              <div className="col-10 mx-auto">
                <Nav className="justify-content-center" style={footerStyle} activeKey="/home">
                    <Nav.Item data-aos="fade-up" data-aos-duration="1000" >
                      <Nav.Link href="https://www.facebook.com/maseerinstitute/" target="_blank">
                      <FacebookIcon  />
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item data-aos="fade-down" data-aos-duration="2000">
                      <Nav.Link href="/contact">
                      <WhatsAppIcon />
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item data-aos="fade-up" data-aos-duration="1000">
                      <Nav.Link href="/contact">
                      <MailOutlineIcon />
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item data-aos="fade-down" data-aos-duration="2000">
                      <Nav.Link href="/contact">
                          <AddIcCallIcon />
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item data-aos="fade-up" data-aos-duration="1000">
                      <Nav.Link href="/contact">
                          <YouTubeIcon />
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item data-aos="fade-down" data-aos-duration="2000">
                      <Nav.Link href="/contact">
                      <InstagramIcon />
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item data-aos="fade-up" data-aos-duration="1000">
                      <Nav.Link href="/contact">
                      <PinterestIcon />
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item data-aos="fade-down" data-aos-duration="2000">
                      <Nav.Link href="/contact">
                          <LinkedInIcon />
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item data-aos="fade-up" data-aos-duration="1000">
                      <Nav.Link href="/contact">
                          <RssFeedIcon />
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item data-aos="fade-down" data-aos-duration="2000">
                      <Nav.Link href="/contact">
                          <TwitterIcon />
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
              </div>
            </div>
            <div className="row">
              <div className="col-6 address">
                <h3>Address</h3>
                <p><HomeIcon /> Mirpur 10, Dhaka-1229.</p>
                <p><MailOutlineIcon /> info@maseerinstitute.com</p>
                <p> <AddIcCallIcon /> +88 01717757539</p>
              </div>
                <div className="col-6 text-right text-white">
                <p> {year} @ lindos. All Rights Reserved | Terms and Conditions.</p>
                </div>
            </div>
        </div>
    </footer>
    </React.Fragment>
  );
};

export default Footer;