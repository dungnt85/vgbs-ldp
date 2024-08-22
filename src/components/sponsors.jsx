import React from "react";

export const Sponsors = (props) => {
  return (
    <div id="sponsor">
      <div className="container">
        <div className="section-title text-center">
          <h2>Đối tác</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <div className="sponsor">
                    <div className="sponsor-image">
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
