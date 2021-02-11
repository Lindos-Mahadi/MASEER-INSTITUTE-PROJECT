import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

let imgUrl = "https://images.unsplash.com/photo-1590075865003-e48277faa558?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";

const alignText={
    textAlign: 'justify',
    padding: '10px',
}

const Card = () =>{

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
            <section className="comp-card my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-white text-justify">
                            <h3 className="display-3" data-aos="fade-down" data-aos-delay="500">Learn About Quran</h3>
                            <p className="lead" style={alignText} data-aos="fade-right" data-aos-delay="500">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum voluptatibus obcaecati at minus magnam culpa exercitationem libero labore, ab quis deleniti veniam nisi, ea magni nihil repellendus eos ut! Inventore molestiae quos vitae accusantium fuga laborum corporis ea, natus quod sed eos quis blanditiis omnis mollitia reiciendis veritatis quisquam qui?
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Dolorum voluptatibus obcaecati at minus magnam culpa exercitationem libero labore, ab quis deleniti veniam nisi, ea magni nihil repellendus eos ut! Inventore molestiae quos vitae accusantium fuga laborum corporis ea, natus quod sed eos quis blanditiis omnis mollitia reiciendis veritatis quisquam qui?
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                        <div className="col-md-6 topic-img" data-aos="flip-left" data-aos-delay="500">
                            <img className="img-fluid float-right" src={imgUrl} alt="img" />
                        </div>
                    </div>
                </div>
            </section>
      </React.Fragment>
    );
  };
  
  export default Card;