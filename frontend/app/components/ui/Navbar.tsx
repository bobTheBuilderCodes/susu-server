"use client";

import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";

import { links, social } from "@/app/resources/data";

const Navbar: React.FC = () => {
  const [showLinks, setShowLinks] = useState<boolean>(false);
  const linksContainerRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const linksHeight = linksRef.current!.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current!.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current!.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img
            src={
              "https://www.ghanayello.com/img/gh/c/1591020094-98-cube-robotics-limited.jpg"
            }
            className="logo"
            alt="logo"
            height={50}
            width={50}
          />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        {/* <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon: Icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>
                  <Icon />
                </a>
              </li>
            );
          })}
        </ul> */}
      </div>
    </nav>
  );
};

export default Navbar;
