import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          {/* <img src={require("../assets/images/logo.png")} height={100} />{" "} */}
          {/* <a className="navbar-brand page-scroll" href="#page-top">
            PLANETPULSE
          </a>{" "} */}
          <a className="page-scroll" href="#page-top">
          <img src={require("../assets/images/logo.png")} height={100} />{" "}
          </a>{" "}
        </div>

        <div
        style={{ marginTop: '20px' }}
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                Domain
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                Introduction
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Features
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Documents
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                Tools & Technologies
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                Team
              </a>
            </li>
            {/* <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};
