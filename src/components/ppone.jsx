// import { Image } from "./image";
// import React from "react";

// export const Gallery = (props) => {
//   return (
//     <div id="portfolio" className="text-center">
//       <div className="container">
//         <div className="section-title">
//           <h2>Documents</h2>

//         </div>
//         <div className="row">
//           <div className="portfolio-items">
//             {props.data
//               ? props.data.map((d, i) => (
//                   <div
//                     key={`${d.title}-${i}`}
//                     className="col-sm-6 col-md-4 col-lg-4"
//                   >
//                     <Image
//                       title={d.title}
//                       largeImage={d.largeImage}
//                       smallImage={d.smallImage}
//                     />
//                   </div>
//                 ))
//               : "Loading..."}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import { Image } from "./image";
import React from "react";

export const PPOne = (props) => {
  const downloadPDF = (url, fileName) => {
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.download = fileName;
    link.click();
  };

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <button className="horizontal-line">Progress Presentation 1</button>
        <div className="row">
          <div
            style={{
              marginTop: "10px",
            }}
            className="portfolio-items"
          >
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-3"
                    style={{
                      marginTop: "10px",
                      marginBottom: "20px",
                    }}
                  >
                    <img
                      src={d.smallImage}
                      alt="..."
                      className=""
                      style={{
                        marginBottom: "10px",
                        width: "120px",
                        height: "120px",
                      }}
                    />
                    <div className="caption">
                      <h4>{d.title}</h4>
                    </div>
                    <button
                      className="btn btn-custom-c"
                      onClick={() => downloadPDF(d.url, d.title + ".pdf")}
                    >
                      Download PDF
                    </button>
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
