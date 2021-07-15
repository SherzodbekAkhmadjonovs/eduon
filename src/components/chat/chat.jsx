import React, { Component } from "react";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import First from "./first";
import Second from "./second";
import Chat1 from "../../images/chat1.svg";
import Chat2 from "../../images/chat2.svg";
import "./chat.css";
class Chat extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="wrapper-container-chatting-for-padding">
          <BrowserRouter>
            <div className="chats-content">
              <Switch>
                <Route path="/chat1">
                  <First />
                </Route>
                <Route path="/chat2">
                  <Second />
                </Route>
              </Switch>
            </div>
            <div className="chat-choice-content">
              <NavLink activeClassName="choosen-chat" to="/chat1">
                <div className="profile-for-chatting">
                  <div className="left-for-profile-chat-picture">
                    <img src={Chat1} alt="" />
                  </div>
                  <div className="right-for-profile-chat-info">
                    <p>Sadriddin A.</p>
                    <span>Qanaqeykan kurs?</span>
                  </div>
                </div>
              </NavLink>
              <NavLink activeClassName="choosen-chat" to="/chat2">
                <div className="profile-for-chatting profile-for-chatting-master">
                  <div className="left-for-profile-chat-picture">
                    <img src={Chat2} alt="" />
                  </div>
                  <div className="right-for-profile-chat-info">
                    <p>Abduvosiq A.</p>
                    <span>Assalamu alaykum...</span>
                  </div>
                </div>
              </NavLink>
            </div>
          </BrowserRouter>
        </div>
      </React.Fragment>
    );
  }
}

export default Chat;
