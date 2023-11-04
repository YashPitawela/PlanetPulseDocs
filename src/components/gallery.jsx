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

export const Gallery = (props) => {
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
        <div className="section-title">
          <h2>Documents</h2>
        </div>
        <button className="horizontal-line">Project Proposal Documents</button>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div key={`${d.title}-${i}`} className="col-sm-3">
                    <Image
                      
                      smallImage={d.smallImage}
                    />
                    <button className="btn btn-custom-c"
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
