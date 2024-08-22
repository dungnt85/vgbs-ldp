import { useState } from "react";
import React from "react";

export const Footer = (props) => {
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="testimonial">
                <div className="testimonial-image">
                  <img src="/img/vbp-footer.png" alt="" />
                </div>
                <div className="testimonial-image">
                  <img src="/img/vbp-footer.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
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
          <div className="col-md-12">
            <div className="row">
              <p>A member of Purpose Group. Copyright © 2024 Vietnam Brand Purpose. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
