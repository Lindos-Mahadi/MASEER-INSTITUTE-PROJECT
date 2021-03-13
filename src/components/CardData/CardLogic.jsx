import React from 'react';
import CData from './CData';
import TopicCard from './TopicCard';
import Explore from '../Explore';


const CardLogic = () =>{
  return(
    <React.Fragment>
      <section className="card-logic mt-5 card-image">
          <div className="container">
            <h3 className="text-uppercase py-3" style={{fontWeight:'bold'}}>Our Course at a glance !</h3>
            <div className="row ">
                {
                CData.map((val, index) => {
                    return (
                        <TopicCard 
                        key={index}
                        title={val.title}
                        imgSrc={val.imgSrc}
                        text={val.text}
                        />
                    );
                })
              }
            </div>
          </div>
          <Explore />
      </section>
      
    </React.Fragment>
  );
};

export default CardLogic;
