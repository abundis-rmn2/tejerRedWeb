import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/index.css";
import Menu from "../components/menu";
import Inicio from "../homepage/inicio";
import Contexto from "../homepage/contexto";
import Proyectos from "../homepage/proyectos";
import Contacto from "../homepage/contacto";

const IndexPage = () => {
  const containerRef = useRef(null);
  const locoScrollRef = useRef(null);
  const [menuPosition, setMenuPosition] = useState("bottom");
  const [menuVisible, setMenuVisible] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    import("locomotive-scroll").then((module) => {
      const LocomotiveScroll = module.default;

      locoScrollRef.current = new LocomotiveScroll({
        el: containerRef.current,
        smooth: true,
        multiplier: 1.2,
      });

      locoScrollRef.current.on("scroll", ScrollTrigger.update);

      ScrollTrigger.scrollerProxy(containerRef.current, {
        scrollTop(value) {
          return arguments.length
            ? locoScrollRef.current.scrollTo(value, 0, 0)
            : locoScrollRef.current.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: containerRef.current.style.transform ? "transform" : "fixed",
      });

      ScrollTrigger.create({
        trigger: sectionRefs.section2.current,
        scroller: containerRef.current,
        start: "top top",
        onEnter: () => {
          setMenuVisible(false);
          setTimeout(() => {
            setMenuPosition("top");
            setMenuVisible(true);
          }, 300);
        },
        onLeaveBack: () => {
          setMenuVisible(false);
          setTimeout(() => {
            setMenuPosition("bottom");
            setMenuVisible(true);
          }, 300);
        },
      });

      ScrollTrigger.addEventListener("refresh", () => locoScrollRef.current.update());
      ScrollTrigger.refresh();

      return () => {
        locoScrollRef.current.destroy();
        ScrollTrigger.removeEventListener("refresh", () => locoScrollRef.current.update());
        ScrollTrigger.kill();
      };
    });
  }, []);

  const sectionRefs = {
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
    section4: useRef(null),
  };

  const scrollToSection = (section) => {
    if (locoScrollRef.current && sectionRefs[section].current) {
      const menuHeight = document.querySelector("nav").offsetHeight; // Dynamically get menu height
      locoScrollRef.current.scrollTo(sectionRefs[section].current, {
        duration: 1,
        offset: -menuHeight, // Use menu height as offset
      });
    }
  };

  return (
    <>
      <Menu 
        scrollToSection={scrollToSection} 
        menuPosition={menuPosition} 
        menuVisible={menuVisible} 
      />

      <div className="App" ref={containerRef} data-scroll-container>
        <Inicio ref={sectionRefs.section1} />
        <Contexto ref={sectionRefs.section2} />
        <Proyectos ref={sectionRefs.section3} />
        <Contacto ref={sectionRefs.section4} />
      </div>
    </>
  );
};

export default IndexPage;
