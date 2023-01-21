import React, { useState, useEffect } from "react";

function AnimeScroll() {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const sectionsElements = document.querySelectorAll(
      ".js-scroll, .js-scroll2"
    );
    setSections(sectionsElements);
  }, []);

  const windowMetade = window.innerHeight * 1;

  useEffect(() => {
    function handleScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionVisible = sectionTop - windowMetade < 0;
        if (sectionVisible) {
          section.classList.add("ativo");
        } else {
          section.classList.remove("ativo");
        }
      });
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections, windowMetade]);

  return <div/>;
}

export default AnimeScroll;
