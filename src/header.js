import React, { Component } from "react";
import { throttle } from "lodash";

export default class Header extends Component {
  componentDidMount() {
    window.addEventListener("scroll", throttle(this.handleScroll, 200));
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const header = document.querySelector(".header-container");
    if (header) {
      if (window.pageYOffset > 20) {
        header.classList.add("active-header");
      } else {
        header.classList.remove("active-header");
      }
    }
  };

  render() {
    return (
      <div className="header-container">
        <div className="header">
           <h2>LOGO</h2>
           <span>PINGTHIS</span>
        </div>
      </div>
    );
  }
}
