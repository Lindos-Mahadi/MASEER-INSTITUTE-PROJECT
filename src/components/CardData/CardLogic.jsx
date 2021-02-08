import React from 'react';
import CData from './CData';
import TopicCard from './TopicCard';


const CardLogic = () =>{
  return(
    <React.Fragment>
      <section className="card-logic my-5">
      <div className="container">
      <h3 className="text-uppercase">Top Cources</h3>
        <div className="row">
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
      </section>
    </React.Fragment>
  );
};

export default CardLogic;
