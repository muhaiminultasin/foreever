import React, { useEffect } from "react";

const AdsterraAd = () => {
  useEffect(() => {
    // Create the first script for `atOptions`
    const script1 = document.createElement("script");
    script1.type = "text/javascript";
    script1.innerHTML = `
      atOptions = {
		'key' : '930a3b1c968d41d6495796abfb61d276',
		'format' : 'iframe',
		'height' : 300,
		'width' : 160,
		'params' : {}
    `;

    // Create the second script to load the external script
    const script2 = document.createElement("script");
    script2.type = "text/javascript";
    script2.src = "//www.highperformanceformat.com/930a3b1c968d41d6495796abfb61d276/invoke.js";
    script2.async = true;

    // Append both scripts to the ad container
    const adContainer = document.getElementById("adsterra-banner");
    if (adContainer) {
      adContainer.appendChild(script1);
      adContainer.appendChild(script2);
    }

    // Cleanup scripts to avoid duplicates
    return () => {
      if (adContainer) {
        adContainer.innerHTML = "";
      }
    };
  }, []);

  return (
    <div>
      <h2>Adsterra Banner Ad:</h2>
      {/* Banner container */}
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
