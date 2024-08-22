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
                    <div className="testimonial-content">
                      <p>"Vietnam Brand Purpose là tổ chức tiên phong Tư vấn chiến lược Xây dựng Thương hiệu Quốc Gia Việt Nam và các thương hiệu Made-in-Vietnam, với tầm nhìn gia tăng giá trị và xếp hạng Thương hiệu Việt Nam trên trường quốc tế, vươn Top 30 giá trị Thương hiệu quốc gia mạnh nhất trên thế giới."</p>
                    </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
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
              <h3>Thông tin liên hệ</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Địa chỉ
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Điện thoại
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
