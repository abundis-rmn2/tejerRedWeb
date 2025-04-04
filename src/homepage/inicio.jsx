import React, { useEffect, useRef } from "react";
import "./inicio.css";
import SwiperComponent from "./sliderHome"; // Updated import path

const Inicio = React.forwardRef(({ scrollToNext }, ref) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current.play();
          console.log("playing");
        } else {
          videoRef.current.pause();
          console.log("pause");
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return (
    <section className="fullpage section-one" ref={ref}>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        className="background-video full-window"
      >
        <source src="/images/bgHome.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
      <div className="overlay">
        <SwiperComponent /> {/* Add SwiperComponent here */}
      </div>
    </section>
  );
});

export default Inicio;