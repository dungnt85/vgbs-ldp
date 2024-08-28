import React from "react";

export const Events = (props) => {
  return (
    <div id="events" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Key Events</h2>
        </div>
        <div className="col-md-10 col-md-offset-1 row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-12 col-sm-12 col-md-6 col-lg-6 event-item">
                  {" "}
                  <img src={d.img} alt="" className="event-img" />
                  <h3>{d.subtitle}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
