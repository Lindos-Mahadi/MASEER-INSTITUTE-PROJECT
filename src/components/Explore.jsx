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
                    <div className="col-2 mx-auto">
                        <Link exact className="nav-link text-dark text-center" to="/course">
                                <h3 className="display-6 font-weight-bold text-info">Explore</h3>
                        </Link>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default Explore;
