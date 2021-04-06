import React, { useEffect } from 'react';
import AOS from 'aos';
import styled from "styled-components";
import {Link} from "react-router-dom";
// import ReactModal from '../ReactModal';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

const Course = (props) =>{

    useEffect(() =>{
        AOS.init({duration: 2000,
            delay: 200,
            once: false,
            mirror: false,
        });
    }, []);

    return (
        <React.Fragment>
            <Card className="col-lg-6 col-md-12">
                <div className="card" data-aos="zoom-in" data-aos-duration="500">
                    <div className="card-header bg-header">
                        <h4> {props.title} </h4>
                    </div>
                    <div className="card-body">
                        <h5> {props.cOutLine} </h5>
                        <p> {props.pOne} </p>
                        <p> {props.pTwo} </p>
                        <p> {props.pThree} </p>
                        <p> {props.pFour} </p>
                        <p> {props.pFive} </p>
                        <p> {props.pSix} </p>
                        <p> {props.pSeven} </p>
                        <p> {props.pEight} </p>
                        <p> {props.pNine} </p>
                        <p> {props.pTen} </p>
                    </div>
                    <div className="card-footer">
                        <Link exact className="nav-link text-dark text-center btn btn-success text-white btn-sm" to="/enrollments">
                            Enroll Course
                        </Link>
                    </div>
                </div>
            </Card>
        </React.Fragment>
    )
}

export default Course

const Card = styled.div`
    .card{
        height: 630px;
        padding: 15px;
        // background: #EEEEEE;
        margin-bottom: 20px;
        h4{
            font-size: 20px;
        }
        .card-header{
            background-color: #5B3256;
            color: #fff;
            border-radius: 25px 0 25px 0;
            border-bottom: 2px solid #5B3;
        }
        .card-body{
            background-color: #5B3256;
            border-radius: 0 25px 0 25px;
            p{
                font-size:17px;
            }
        }
        .card-body h5{
            color: #fff;
            font-weight: bold;
        }
        .card-footer{
            background-color: #6C7A89;
            border-top: none;
        }
        .card-footer button{
            color: #fff !important;
            font-weight: bold;

        }
        @media only screen and (max-width: 991px){
            height: 550px;
        }
        @media only screen and (max-width: 768px){
            height: 680px;
        }
        @media only screen and (max-width: 575px){
            height: 900px;
        }
        @media only screen and (max-width: 290px){
            height: 950px;
        }
        @media only screen and (max-width: 287px){
            height: 1000px;
        }
    }
`