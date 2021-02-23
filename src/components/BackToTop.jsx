import React, { useEffect, useState } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (document.documentElement.scrollTop > window.innerHeight/4) {
      console.log('Setting visible');
      setIsVisible(true);
    } else {
      console.log('Setting invisible');
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="btt-button">
      {isVisible && 
        <div onClick={scrollToTop}>
          <button className="btt-button">Back To Top</button>
        </div>}
    </div>
  );
}