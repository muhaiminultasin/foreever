import React, { useEffect, useRef } from "react";

const AdsterraAd = () => {
  const adDiv = useRef(null);

  const atOptions = {
    key: "930a3b1c968d41d6495796abfb61d276",
    format: "iframe",
    height: 90,
    width: 1000,
    params: {},
  };

  useEffect(() => {
  
    const confScript = document.createElement("script");
    const invokeScript = document.createElement("script");
  
    confScript.type = "text/javascript";
    confScript.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`;
    
    invokeScript.type = "text/javascript";
    invokeScript.src = `//www.profitablecreativeformat.com/${atOptions.key}/invoke.js`;
  
    // console.log(`Script URL: ${invokeScript.src}`); Debug log
  
    if (adDiv.current) {
      adDiv.current.appendChild(confScript);
      adDiv.current.appendChild(invokeScript);
    }
  }, []); 

  return <div ref={adDiv}></div>;
};

export default AdsterraAd;
