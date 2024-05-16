import React from "react";
import "./main.css";
//let me import images so we dont have this error on the browser
import img from '../../assets/Hotelcity-mexico.jpg'//Pendiente imagen
//Let me paste the arry named data
const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious statys and adventurous activities.",
  },
];

export const Main = () => {
  return (
    <section className="main container section">
      <div className="sectTitle">
        <h3 className="title">Destinos más visitados</h3>
      </div>

      <div className="secContent grid">
        {/*se guy, here we are g*/}

        {
          Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} 
              className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>     

                <div className="cardInfo"></div>

              </div>
            )
          }
        )}
      </div>
    </section>
  );
};

export default Main;
