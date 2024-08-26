import React from "react";

export const Sponsors = (props) => {
  return (
    <div id="sponsors">
      <div className="container">
        <div className="section-title text-center">
          <h2>Sponsors & Partners</h2>
          <h3>Sponsors</h3>
        </div>
        <div className="row center">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 center">
                  <div className="sponsors">
                    <div className="sponsors-image">
                      <img src={d.img} alt="" />
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
