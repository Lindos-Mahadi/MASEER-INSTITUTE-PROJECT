import React from 'react';
import Counter from "./Counter";

function AnimateBody() {
    const myStyle = {
        overflow: "hidden",
        width: "100%"
    };
    return (
        <React.Fragment>
                <section className="counter-section" style={myStyle}>
                    <div className="bg-secondary text-center text-white">
                        <div className="row"> 
                            <div className="col-md-3">
                                <i className="fa fa-facebook"></i>
                                <h1><Counter to="2050" /></h1>
                                <h3>Facebook Follower</h3>
                            </div>
                            <div className="col-md-3">
                                <i className="fa fa-instagram"></i>
                                <h1><Counter to="3050" /></h1>
                                <h3>Intagram Follower</h3>
                            </div>
                            <div className="col-md-3">
                                <i className="fa fa-youtube"></i>
                                <h1><Counter to="5050" /></h1>
                                <h3>YouTube Follower</h3>
                            </div>
                            <div className="col-md-3">
                                <i className="fa fa-twitter"></i>
                                <h1><Counter to="7050" /></h1>
                                <h3>Twitter Follower</h3>
                            </div>
                         </div>
                   </div>
                 </section>
        </React.Fragment>
    )
}

export default AnimateBody
