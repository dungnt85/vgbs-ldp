import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <img src="img/intro-blue.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
