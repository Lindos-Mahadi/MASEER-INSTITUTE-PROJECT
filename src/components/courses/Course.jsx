import React, { useEffect } from 'react';
import AOS from 'aos';
import styled from "styled-components";
import ReactModal from '../ReactModal';
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
            <Card className="col-lg-6 col-sm-12">
                <div className="card" data-aos="zoom-in" data-aos-duration="1000">
                    <div className="card-header">
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
                        <ReactModal></ReactModal>
                    </div>
                </div>
            </Card>
        </React.Fragment>
    )
}

export default Course

const Card = styled.div`
    .card{
        height: 620px;
        padding: 15px;
        background: #EEEEEE;
        margin-bottom: 20px;
        h4{
            font-size: 20px;
        }
    }
    .card-header{
        background: #6C7A89;
        color: #000;
    }
`