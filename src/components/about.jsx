import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-8 col-md-6">
            {" "}
            <img src="img/about2.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h3>{props.data ? props.data.paragraph : "loading..."}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
