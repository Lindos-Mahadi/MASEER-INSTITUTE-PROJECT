import React from 'react'

function GoogleMaps() {

    const mapsStyle = {
        width: "100%",
        height: "450px",
        frameborder: "0",
        border: "0",
        allowfullscreen: "true",
    };

    return (
        <React.Fragment>
            <section className="my-0 py-0">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1318969.2169452882!2d89.44840726012964!3d24.06024056872592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1a8244609c3%3A0x74bfcb1b458a21b6!2sMirpur%2010%20Footbridge!5e0!3m2!1sen!2sus!4v1604588616282!5m2!1sen!2sus" style={mapsStyle}></iframe>
            </section>

        </React.Fragment>
    )
}

export default GoogleMaps
