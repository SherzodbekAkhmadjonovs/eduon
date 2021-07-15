import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "./eduoncourses.css";
import Img from "../../images/courseimg.svg";
import Comments from "../../images/comment.svg";
import Star from "../../images/Star 2.svg";
import Sold from "../../images/Bag.svg";
import CRM from "../../images/crm.svg";
import { Link } from "react-router-dom";
const data = require("../../json/eduoncourses.json");
const newData = require("../../json/newcourseedu.json");
class EduonCourses extends Component {
  state = {
    datas: data,
    newData: newData,
  };
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <div className="main-content-for-eduon-courses">
            <p className="uploaded-courses-div-paragraph-element">
              Yuklangan kurslar
            </p>
            <div className="uploaded-courses-from-teacher">
              {this.state.datas.map((data) => {
                return (
                  <div className="curses-div-from-teacher">
                    <div className="img-div-course-div">
                      <img src={Img} alt="" />
                    </div>
                    <div className="course-title-from-courses-div">
                      <span>{data.title}</span>
                    </div>
                    <div className="course-price-rating-comment-number-show-div">
                      <span className="course-rating-of-teacher">
                        <div>
                          <img src={Star} alt="" />
                        </div>
                        {data.rating}
                        <span>{data.ratingnum}</span>
                      </span>
                      <span className="course-sold-indicator">
                        <div>
                          <img src={Sold} alt="" />
                        </div>
                        {data.sold}
                      </span>
                      <span className="course-comments-from-students">
                        <div>
                          <img src={Comments} alt="" />
                        </div>
                        {data.comments}
                      </span>
                    </div>
                    <div className="course-price-and-editing-button-show-div">
                      <span>
                        {data.price} <span> </span>
                        <span className="inside-span-sum">so`m</span>
                      </span>
                      <button>
                        <Link to="/courses/tahrirlash">Tahrirlash</Link>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="uploaded-courses-div-paragraph-element2">
              Yangi kurs
            </p>
            <div className="new-courses-from-teacher">
              {this.state.newData.map((newData) => {
                return (
                  <div className="new-course-div-from-teacher">
                    <div className="top-new-course-div">
                      <img src={CRM} alt="" />
                    </div>
                    <div className="title-content-of-new-course-div">
                      <div>
                        <p>{newData.title}</p>
                      </div>
                      <div className="title-content-of-new-course-div-button-div">
                        <button>Davom ettirish</button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}
export default EduonCourses;
