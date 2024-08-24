import { useState } from "react";
import React from "react";

export const Footer = (props) => {
  return (
    <div>
      <div id="footer">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-2 col-sm-4 col-4">
                <div className="logo-image">
                  <img src="/img/vbp-footer.png" alt="" />
                </div>
              </div>
              <div className="col-md-2 col-sm-4 col-4">
                <div className="logo-image">
                  <img src="/img/vbp-footer.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> info@vietnambrandpurpose.com
                </span>
              </p>
              <p>
                <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.linkedin : "/"}>
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
