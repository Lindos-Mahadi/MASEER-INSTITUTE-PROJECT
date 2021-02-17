import React from 'react'
import Course from './Course'
import CourseData from './CourseData';
import styled from "styled-components";

const CoursesFunc = () =>{
    return (
        <React.Fragment>
                <section className="bg-image">
                    <div className="container">
                        <div className="row">
                            {
                                CourseData.map((val, index) =>{
                                    return(
                                        <Course
                                            key={index}
                                            title={val.title}
                                            cOutLine={val.cOutLine}
                                            pOne={val.pOne}
                                            pTwo={val.pTwo}
                                            pThree={val.pThree}
                                            pFour={val.pFour}
                                            pFive={val.pFive}
                                            pSix={val.pSix}
                                            pSeven={val.pSeven}
                                            pEight={val.Eight}
                                            pNine={val.pNine}
                                            pTen={val.pTen}
                                         />
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
        </React.Fragment>
    )
}

export default CoursesFunc
// const sec = styled.section`
// background-image:url("https://images.unsplash.com/photo-1613425269135-fb9f19ae7be8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80");
// `;
