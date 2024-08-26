import React from "react";

export const Media = (props) => {
  return (
    <div id="mediapartners">
      <div className="container">
        <div className="section-title text-center">
          <h3>Media Partners</h3>
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
        <div className="row center">
          <a href="#features" className="btn btn-custom btn-lg page-scroll">
            BECOME OUR PARTNER
          </a>
        </div>
      </div>
    </div>
  );
};
