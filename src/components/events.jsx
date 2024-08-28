import React from "react";

export const Events = (props) => {
  return (
    <div id="events" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Key Events</h2>
        </div>
        <div className="col-md-10 col-md-offset-1 row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-10 col-sm-10 col-md-4 col-md-offset-1 event-item">
                  {" "}
                  <img src={d.img} alt="" className="event-img" />
                  <h3>{d.subtitle}</h3>
                  <h3>{d.date}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
