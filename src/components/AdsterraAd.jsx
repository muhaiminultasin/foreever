import React, { useEffect } from "react";

const AdsterraAd = () => {
  useEffect(() => {
    // Creating the script to define ad options
    const script1 = document.createElement("script");
    script1.type = "text/javascript";
    script1.innerHTML = `
      atOptions = {
        'key': '930a3b1c968d41d6495796abfb61d276',
        'format': 'iframe',
        'height': 300,
        'width': 160,
        'params': {}
      };
    `;

    // Creating the second script to load the ad
    const script2 = document.createElement("script");
    script2.type = "text/javascript";
    script2.src = "https://www.highperformanceformat.com/930a3b1c968d41d6495796abfb61d276/invoke.js";
    script2.async = true;

    // Find the container element to append the scripts to
    const adContainer = document.getElementById("adsterra-banner");

    // Append the scripts once loaded
    if (adContainer) {
      adContainer.appendChild(script1);
      adContainer.appendChild(script2);
    }

    // Cleanup function to remove the ad scripts when component unmounts
    return () => {
      if (adContainer) {
        adContainer.innerHTML = "";
      }
    };
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <div>
      <h2>Adsterra Banner Ad:</h2>
      <div
        id="adsterra-banner"
        style={{
          textAlign: "center",
          width: "160px",
          height: "300px",
          margin: "20px auto",
        }}
      ></div>
    </div>
  );
};

export default AdsterraAd;
