import React from "react";

export const Testimonials = (props) => {
  return (
    <div id="testimonials" className="text-center">
      <div className="container">
        <div className="section-title text-center">
          <h2>Tools & Technologies</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <div className="testimonial">
                    {" "}
                    <a href={d.link}>
                      <img
                        src={d.img}
                        alt="..."
                        className="team-img"
                        style={{
                          borderRadius: "50%",
                          width: "200px", // Adjust the width and height as needed
                          height: "200px",
                          objectFit: "cover", // This ensures the image covers the circular area
                        }}
                      />
                    </a>
                    <div className="caption">
                      <h4>{d.name}</h4>
                      {/* <p>{d.job}</p> */}
                    </div>
                  </div>
                  {/* <div className="testimonial">
                    <a href={d.link}>
                      <div className="testimonial-image">
                        {" "}
                        <img
                          src={d.img}
                          style={{
                            borderRadius: "50%",
                            width: "200px", // Adjust the width and height as needed
                            height: "200px",
                            objectFit: "cover", // This ensures the image covers the circular area
                          }}
                          alt=""
                        />{" "}
                      </div>
                    </a>
                    <div className="testimonial-content">
                      <p>"{d.text}"</p>
                      <a href={d.link} className="btn btn-custom">
                        {d.name}
                      </a>
                    </div>
                  </div> */}
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
