import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6 about-bg">
            <h2>{props.data ? props.data.title1 : "loading..."}</h2>
            <h2>{props.data ? props.data.title2 : "loading..."}</h2>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <p><b>{props.data ? props.data.paragraph1 : "loading..."}</b></p>
              <p><b>{props.data ? props.data.paragraph2 : "loading..."}</b></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
