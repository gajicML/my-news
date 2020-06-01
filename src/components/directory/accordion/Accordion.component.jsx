import React, { useState, useRef } from "react";
import Chevron from "./Accordion.Chevron.component.jsx";
import PropTypes from "prop-types";
import "./Accordion.style.scss";

import PreviewArticle from "../../directory/preview-article/PreviewArticle.component.jsx";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setActiveCategory } from "../../../redux/actions/categoryActions";

const Accordion = (props) => {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");

  const [slice, setSlice] = useState(5);

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  }

  const articles = props.categoryNews.slice(0, slice);

  const items = articles.map(({ id, title, urlToImage, description }) => {
    return (
      <PreviewArticle
        key={id}
        id={id}
        title={title}
        urlToImage={urlToImage}
        description={description}
      />
    );
  });
  return (
    <div className="accordion__section">
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <div className="accordion__title">
          {" "}
          <Link to="/">
            <p className="title" onClick={props.setActiveCategory}>
              {props.category}
            </p>
          </Link>
        </div>
        <Chevron className={`${setRotate}`} width={10} fill={"#777"} />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion__content"
      >
        <div className="preview_wrapper">{items}</div>
      </div>
    </div>
  );
};

Accordion.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

export default connect(null, { setActiveCategory })(withRouter(Accordion));
