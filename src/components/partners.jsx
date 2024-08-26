import React from "react";

export const Partners = (props) => {
  return (
    <div id="partners">
      <div className="container">
        <div className="section-title text-center">
          <h3>Partners</h3>
        </div>
        <div className="row center">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4 center">
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
