import { useState } from "react";
import React from "react";

export const Footer = (props) => {
  return (
    <div>
      <div id="footer">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <p>ORGANIZED BY</p>
            </div>
            <div className="row">
              <div className="logo-image">
                <a href="https://huba.vn/" target="_blank">
                  <img src="/img/huba-footer.png" alt="" />
                </a>
                <a href="https://vietnambrandpurpose.com/vi" target="_blank">
                  <img src="/img/vbp-footer.png" alt="" />
                </a>
              </div> 
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-globe"></i> www.vietnambrandpurpose.com
                </span>
              </p>
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> anh.lq@purposeant.asia
                </span>
              </p>
              <p>
                <div className="social">
                <ul>
                  <li>
                    <a href="https://www.facebook.com/vietnambrandpurpose" target="_blank">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/vietnam-brand-purpose/" target="_blank">
                      <i className="fa fa-linkedin"></i>
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
