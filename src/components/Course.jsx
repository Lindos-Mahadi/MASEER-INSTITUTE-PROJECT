import React, { useEffect } from 'react';
import AOS from 'aos';
import CoursesFunc from './courses/CoursesFunc';

const Course = () =>{

    useEffect(() =>{
        AOS.init({duration: 2000,
            delay: 200,
            once: false,
            mirror: false,
        });
    }, []);
    return (
        <React.Fragment>
            <section className="py-5"></section>
            <div className="container">
                <div className="row ">
                    <div className="col-12 text-center py-5">
                        <h1 data-aos="fade-left" data-aos-duration="1000">Our Popular Courses</h1>
                        <h3 data-aos="fade-right" data-aos-duration="1000">A modern and Unique style</h3>
                    </div>
                </div>
            </div>
            <CoursesFunc />
        </React.Fragment>
    )
}
export default Course;