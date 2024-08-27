import React from "react";

export const Featured = (props) => {
  return (
    <div id="featured" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Featured Speakers</h2>
          <p>
            We will continue updating
          </p>
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 featured">
                  <div className="thumbnail">
                    {" "}
                    <img src={d.img} alt="..." className="featured-img" />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job1}</p>
                      <p>{d.job2}</p>
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
