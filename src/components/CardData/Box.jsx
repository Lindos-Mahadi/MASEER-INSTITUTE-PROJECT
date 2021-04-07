import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Explore from '../Explore';

const box={
    boxShadow: '10px 5px 20px 0 #89729E, 0 4px 5px 0 #89729E',
    // marginTop: '-70px',
    backgroundColor: ' #006442',
    color: ' #E08A1E'
}
const midbox={
    boxShadow: '5px 5px 10px 0  #317589, 0 4px 5px 0  #317589',
    // marginTop: '-100px',
    backgroundColor: '#D24D57'
};

const alignText={
    textAlign: 'justify',
    padding: '10px',
}

const Box = () =>{

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
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card" style={box} data-aos="fade-right" data-aos-delay="1000">
                            <div className="card-body">
                                <p className="lead" style={alignText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto velit veritatis mollitia ducimus, iste porro repellendus ex id quis adipisci. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae non esse a alias officia accusamus?</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 my-2">
                        <div className="card" style={midbox} data-aos="fade-up" data-aos-delay="1000">
                            <div className="card-body">
                                <p className="lead" style={alignText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto velit veritatis mollitia ducimus, iste porro repellendus ex id quis adipisci. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae non esse a alias officia accusamus?</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card" style={box} data-aos="fade-left" data-aos-delay="1000">
                            <div className="card-body">
                                <p className="lead" style={alignText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto velit veritatis mollitia ducimus, iste porro repellendus ex id quis adipisci. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae non esse a alias officia accusamus?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Box

