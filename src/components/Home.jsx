import React, { useEffect } from 'react';
import CardHome from './Card';
import CardLogic from './CardData/CardLogic';
import AOS from 'aos';
import Typical from "react-typical";
import AnimateBody from './AnimateCounter/AnimateBody';

let curDate = new Date();
curDate = curDate.getHours();
let greeting = "";
const cssStyle= {};
if(curDate >= 1 && curDate < 12)
{
    greeting = "Morning";
    cssStyle.color = "green";
} else if (curDate >= 12 && curDate < 19)
{
    greeting = "afternoon";
    cssStyle.color = "Orange";
} else {
    greeting = "Night";
    cssStyle.color = "Black";
}

const Home = () =>{

    useEffect(() =>{
        AOS.init();
    }, []);

    return (
        <React.Fragment>
            <section className="home">
                <div className="dark-overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-6 mx-auto header">
                                <div className="head-line text-center pt-5 mt-5">
                                    <h3 className="display-3 text-white mt-sm-5">Good <span style={cssStyle}> {greeting} </span> Sir </h3>
                                    <h1 data-aos="fade-up" data-aos-delay="1000" className="text-white">It's a Quranic Foundation</h1>
                                    <h2 className="text-white"> 
                                    <Typical
                                            loop={Infinity}
                                            wrapper='b'
                                            steps={['Learn Quran,', 2000,
                                                'Get Jannat.', 2000
                                        ]}
                                        />
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="row home-button">
                            <div className="col-8 mx-auto">
                                <div className="row">
                                <div className="col-6 col-md-6">
                                    <a href="/course" type="button" class="btn btn-outline-info btn-lg float-right d-none d-md-block">stay with us</a>
                                    </div>
                                    <div className="col-sm-12 col-md-6 pt-sm-5 pt-md-0 second-button">
                                    <a href="/contact" type="button" class="btn btn-outline-warning btn-lg btn-two">contact us</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <CardHome />
            <CardLogic />
            <AnimateBody />
        </React.Fragment>
    )
}
export default Home;