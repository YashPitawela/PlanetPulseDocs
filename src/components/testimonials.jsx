import React from "react";

export const Testimonials = (props) => {
  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>Tools & Technologies</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <div className="testimonial">
                    {/* <div className="testimonial-image">
                      {" "}
                      <img src={d.img} alt="" />{" "}
                    </div> */}
                    <div className="testimonial-content">
                      {/* <p>"{d.text}"</p> */}
                      <a href={d.link} className="btn btn-custom">
                {d.name}
              </a>
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
