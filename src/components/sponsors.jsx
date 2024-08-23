import React from "react";

export const Sponsors = (props) => {
  return (
    <div id="sponsors">
      <div className="container">
        <div className="section-title text-center">
          <h2>Partners</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
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
