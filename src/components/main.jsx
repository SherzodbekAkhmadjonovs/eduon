import React, { useState } from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import Modal from "react-modal";
import Statistics from "./statistics/statistics";
import Economics from "./economics/economics";
import Profile from "./profile/profile";
import Info from "./info/info";
import Chat from "./chat/chat";
import SearchIcon from "@material-ui/icons/Search";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import AssessmentRoundedIcon from "@material-ui/icons/AssessmentRounded";
import AccountBalanceWalletRoundedIcon from "@material-ui/icons/AccountBalanceWalletRounded";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import StorageRoundedIcon from "@material-ui/icons/StorageRounded";
import CommentRoundedIcon from "@material-ui/icons/CommentRounded";
import Logo from "./../images/Logo.svg";
import Prof from "../images/Rectangle 6.svg";
import AddBoxRoundedIcon from "@material-ui/icons/AddBoxRounded";
import ErrorIcon from "@material-ui/icons/Error";
import "./main.css";
import AllCourses from "../components/eduoncourses/allcourses";
import EduonCourse from "./eduoncourses/eduoncourse";
import Paper from "../images/Paper Plus.svg";

Modal.setAppElement("#root");
function Main() {
  const [isOpen, setisOpen] = useState(false);
  const [cover, setCover] = useState("");
  return (
    <React.Fragment>
      <div className="main-component">
        <div className="navbar-main-menu">
          <div className="left-main-navbar-menu">
            <img src={Logo} alt="" />
          </div>
          <div className="middle-main-navbar-menu">
            <a href="#">Bosh sahifa</a>
            <a href="#">Kurslar</a>
            <a href="#">FAQ</a>
            <a href="#">Biz haqimizda</a>
          </div>
          <div className="right-main-navbar-menu">
            <SearchIcon color="disabled" />
            <span className="language-navbar-main">
              O`z <KeyboardArrowDownIcon color="disabled" />
            </span>
            <div className="profil-main-navbar">
              <img src={Prof} alt="" />
              <span id="profile-title-main-navbar">Murod N.</span>
            </div>
          </div>
        </div>
        <div className="main-content-for-teachers">
          <BrowserRouter>
            <div className="main-menu-to-sections">
              <div className="top-main-menu-to-sections">
                <div className="main-menu-section-links main-menu-section-links1">
                  <NavLink exact to="/" activeClassName="selected">
                    <div className="material-ui-icon">
                      <AssessmentRoundedIcon color="disabled" />
                    </div>
                    <div className="section-links-title">Statistika</div>
                  </NavLink>
                </div>
                <div className="main-menu-section-links main-menu-section-links2">
                  <NavLink activeClassName="selected" to="/economics">
                    <div className="material-ui-icon">
                      <AccountBalanceWalletRoundedIcon color="disabled" />
                    </div>
                    <div className="section-links-title">Moliya</div>
                  </NavLink>
                </div>
                <div className="main-menu-section-links main-menu-section-links3">
                  <NavLink activeClassName="selected" to="/courses/barchasi">
                    <div className="material-ui-icon">
                      <FolderOpenRoundedIcon color="disabled" />
                    </div>
                    <div className="section-links-title">Kurslarim</div>
                  </NavLink>
                </div>
                <div className="main-menu-section-links main-menu-section-links4">
                  <NavLink activeClassName="selected" to="/profile">
                    <div className="material-ui-icon">
                      <PersonRoundedIcon color="disabled" />
                    </div>
                    <div className="section-links-title">Profil</div>
                  </NavLink>
                </div>
                <div className="main-menu-section-links main-menu-section-links5">
                  <NavLink activeClassName="selected" to="/info">
                    <div className="material-ui-icon">
                      <StorageRoundedIcon color="disabled" />
                    </div>
                    <div className="section-links-title">Ma`lumotlar</div>
                  </NavLink>
                </div>
                <div className="main-menu-section-links main-menu-section-links6">
                  <NavLink activeClassName="selected" to="/chat">
                    <div className="material-ui-icon">
                      <CommentRoundedIcon color="disabled" />
                    </div>
                    <div className="section-links-title">Chat</div>
                  </NavLink>
                </div>
                <div className="react-modal-binnasa-div-outside">
                  <Modal
                    isOpen={isOpen}
                    onRequestClose={() => setisOpen(false)}
                    style={{
                      overlay: {
                        backgroundColor: "rgb(36, 71, 120, 0.36)",
                      },
                      content: {
                        width: "554px",
                        height: "830px",
                        left: "0",
                        right: "0",
                        marginLeft: "auto",
                        marginRight: "auto",
                        borderRadius: "24px",
                        padding: "39px 36px 39px 36px",
                      },
                    }}
                  >
                    <div className="courses-open-modal-title">
                      <ErrorIcon color="primary" />
                      <span>
                        Avval kurs ma’lumotlari so’ngra kurs videolari
                        yuklanadi. Hozir kurs ma’lumotlarini to’ldiring
                      </span>
                    </div>
                    <div className="course-name-title">
                      <p>Kurs nomi</p>
                      <input type="text" />
                    </div>
                    <div className="course-name-title">
                      <p>Kategoriya</p>
                      <select className="category-select-variant" name="cars">
                        <option value="Biznes, marketing">
                          Biznes, marketing
                        </option>
                        <option value="Biznes, marketing">
                          Biznes, marketing
                        </option>
                        <option value="Biznes, marketing">
                          Biznes, marketing
                        </option>
                        <option value="Biznes, marketing">
                          Biznes, marketing
                        </option>
                      </select>
                    </div>
                    <div className="course-image-file">
                      <p>Kurs rasmi</p>
                      <div>
                        <div className="course-file-name-label">
                          <div className="course-file-name-div">
                            <p className="course-file-name">{cover}</p>
                          </div>
                          <input
                            type="file"
                            name="photo"
                            id="video-cover"
                            onChange={(event) => {
                              setCover(event.target.files[0].name);
                            }}
                          />
                          <div className="video-cover-div">
                            <label htmlFor="video-cover">
                              <img src={Paper} alt="" />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="course-type">
                      <div className="left-course-type">
                        <p>Kurs turi</p>
                        <select
                          className="category-select-variant2"
                          name="types"
                        >
                          <option value="pullik">Pullik</option>
                          <option value="tekin">Tekin</option>
                        </select>
                      </div>
                      <div className="right-course-type">
                        <p>Narxi</p>
                        <input
                          type="text"
                          className="category-select-variant2"
                        />
                      </div>
                    </div>
                    <div className="about-course-write-content">
                      <p>Kurs haqida</p>
                      <textarea rows="4" cols="50"></textarea>
                    </div>
                    <div className="modal-close-and-upload-buttons">
                      <button id="close-btn" onClick={() => setisOpen(false)}>
                        Bekor qilish
                      </button>
                      <button id="upload-course-btn">Yuklash</button>
                    </div>
                  </Modal>
                </div>
              </div>
              <button
                className="bottom-main-menu-to-sections"
                onClick={() => setisOpen(true)}
              >
                <AddBoxRoundedIcon color="disabled" />
                <span id="material-ui-icon-title">Kurs yuklash</span>
              </button>
            </div>
            <div className="section-content-for-teachers">
              <Switch>
                <Route exact path="/">
                  <Statistics />
                </Route>
                <Route path="/economics">
                  <Economics />
                </Route>
                <Route path="/courses/barchasi">
                  <EduonCourse />
                </Route>
                <Route path="/profile">
                  <Profile />
                </Route>
                <Route path="/info">
                  <Info />
                </Route>
                <Route path="/chat">
                  <Chat />
                </Route>
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Main;
