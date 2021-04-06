import React from 'react'
import Course from './Course'
import CourseData from './CourseData';

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

export default CoursesFunc;
