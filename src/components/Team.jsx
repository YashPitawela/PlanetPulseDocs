import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Team</h2>
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4 team">
                  <div className="thumbnail">
                    {" "}
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
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
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
