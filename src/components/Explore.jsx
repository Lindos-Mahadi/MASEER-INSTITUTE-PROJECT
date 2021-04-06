import React from 'react'
import {Link} from "react-router-dom";

const Explore= (props) => {
    const myStyle = {
        overflow: "hidden",
        width: "100%"
    };
    return (
        <React.Fragment>
            <section className="explorer-section" style={myStyle}>
                <div className="row">
                    <div className="col-lg-3 col-md-2 col-12 mx-auto">
                        <Link exact className="py-3 nav-link text-dark text-center" to="/course">
                                <h2 className="font-weight-bold text-info">Explore More</h2>
                        </Link>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default Explore;
