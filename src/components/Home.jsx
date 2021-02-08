import React, { useEffect } from 'react';
import Card from './Card';
import Box from './CardData/Box';
import CardLogic from './CardData/CardLogic';
import AOS from 'aos';
// import 'aos/dist/aos.css';
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
        // AOS.init("{"duration: 2000"}");
        AOS.init();
    }, []);

    return (
        <React.Fragment>
            <section className="home">
                <div className="container">
                    <div className="row">
                        <div className="col-6 mx-auto header">
                            <div className="head-line text-center">
                                <h3 className="display-3">Good <span style={cssStyle}> {greeting} </span> Sir </h3>
                            <h1 data-aos="fade-up" data-aos-delay="1000">It's a Quranic Foundation</h1>
                            <h2> 
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
                </div>
            </section>
            {/* <Box /> */}
            <Card />
            <CardLogic />
            <AnimateBody />
        </React.Fragment>
    )
}
export default Home;