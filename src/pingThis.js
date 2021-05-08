import React, { Component } from "react";
import "./App.scss";
import Header from "./header";
import Home from "./home";
import Tiles from "./tiles";
import { throttle } from "lodash";

export default class PingThis extends Component {
  componentDidMount() {
    window.addEventListener("scroll", throttle(this.handleScroll, 200));
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const toTop = document.querySelector(".to-top");
    if (toTop) {
      if (window.pageYOffset > 100) {
        toTop.classList.add("active");
      } else {
        toTop.classList.remove("active");
      }
    }
  };

  render() {
    return (
      <div className="home-page-wrapper">
        <Header />
        <div className="home-container">
          <Home />
        </div>
        <div className="image-container">
          <Tiles />
        </div>
        <div
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="to-top"
        >
          <img className="next-icon" src="/top-icon.svg" alt="to-top" />
        </div>
      </div>
    );
  }
}
