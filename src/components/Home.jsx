import React, { useEffect } from 'react';
import CardHome from './Card';
import CardLogic from './CardData/CardLogic';
import AOS from 'aos';
import Typical from "react-typical";
// import AnimateBody from './AnimateCounter/AnimateBody';
// import AppSlide from './AppSlide';
import AppSlide from '../components/slider/AppSlide';


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
            
            <AppSlide  />
            <CardHome />
            <CardLogic />
            {/* <AnimateBody /> */}
        </React.Fragment>
    )
}
export default Home;