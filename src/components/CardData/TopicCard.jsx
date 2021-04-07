import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from "react-router-dom";

const TopicCard = (props) =>{

    useEffect(() =>{
        AOS.init({duration: 2000,
            delay: 200,
            once: false,
            mirror: false,
        });
        // AOS.init();
    }, []);

    return (
        <React.Fragment>
            <div className="col-lg-4 col-md-6 my-2">
                <div className="card" data-aos="fade-up" data-aos-duration="500">
                    <div className="card-header">
                        <h5 className="card-title">{props.title}</h5>
                    </div>
                    <img src={props.imgSrc} className="img-fluid" style={{height: "250px"}} alt=""/>
                    <div className="card-body">
                        <p className="card-text">{props.text}</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default TopicCard
