import React from "react";

export const Partners = (props) => {
  return (
    <div id="partners">
      <div className="container">
        <div className="section-title text-center">
          <h2>Strategic Partners</h2>
        </div>
        <div className="col-xs-12 col-md-12 row center sponsors-image">
          <img src="img/partners/strategic1.png" alt="" />
        </div>
        <div className="section-title text-center">
          <h2>Media Partners</h2>
        </div>
        <div className="col-xs-12 col-md-12 row center sponsors-image">
          <img src="img/partners/media.png" alt="" />
        </div>
        <div className="row center">
          {/*<a href="mailto:anh.lq@purposeant.asia?subject=Partnership of Vietnam Global Brand Summit (TM)" className="btn btn-custom btn-lg page-scroll">
            BECOME OUR PARTNER
          </a>*/}
          <a href="mailto:anh.lq@purposeant.asia?subject=Partnership of Vietnam Global Brand Summit (TM)">
            <img className="btn-image" src="img/button.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};
