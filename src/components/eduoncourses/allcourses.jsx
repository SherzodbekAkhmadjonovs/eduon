import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import EduonCourses from "./eduoncourses";
import EduonCourse from "./eduoncourse";
class AllCourse extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Switch>
            <Route exact path="/courses/barchasi" component={EduonCourses} />
            <Route path="/courses/tahrirlash" component={EduonCourse} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default AllCourse;
