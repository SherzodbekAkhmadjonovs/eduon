import React, { Component } from "react";
import "./statistics.css";
import { Doughnut } from "react-chartjs-2";
import Users from "../../images/users.svg";
import Ticket from "../../images/Ticket.svg";
import Folder from "../../images/Folder.svg";
import Fourth from "../../images/fourth.svg";
import ProgressBar from "react-customizable-progressbar";
import Rating from "@material-ui/lab/Rating";
import { Line, Circle } from "rc-progress";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const countries = require("../../json/location-stats1.json");
const cities = require("../../json/location-stats2.json");
const data = require("../../json/data.json");

const progress = 70;

const yosh1_17 = 10;
const yosh18_23 = 47;
const yosh24_29 = 10;
const yosh30_35 = 10;
const yosh36_45 = 10;

class Statistics extends Component {
  state = {
    countries: countries,
    cities: cities,
    data: data,
    countryShow: true,
  };
  handleCountry = () => {
    this.setState({
      countryShow: true,
    });
  };
  render() {
    const circleContainerStyle = {
      width: "158px",
      height: "158px",
    };
    return (
      <React.Fragment>
        <div className="stats-main-container">
          <div className="course-stats-in-numbers">
            <div className="courses-info-div">
              <div className="left-side-of-courses-stats--info-div">
                <p>341</p>
                <span>Sotilgan kurslar</span>
              </div>
              <div className="right-side-of-courses-stats--info-div">
                <div className="right-side-of-courses-stats--info-div-first">
                  <img src={Ticket} alt="" />
                </div>
              </div>
            </div>
            <div className="courses-info-div info-div">
              <div className="left-side-of-courses-stats--info-div">
                <p>235</p>
                <span>O’quvchilar soni</span>
              </div>
              <div className="right-side-of-courses-stats--info-div">
                <div className="right-side-of-courses-stats--info-div-second">
                  <img src={Users} alt="" />
                </div>
              </div>
            </div>
            <div className="courses-info-div info-div">
              <div className="left-side-of-courses-stats--info-div">
                <p>27</p>
                <span>Kurslar soni</span>
              </div>
              <div className="right-side-of-courses-stats--info-div">
                <div className="right-side-of-courses-stats--info-div-third">
                  <img src={Folder} alt="" />
                </div>
              </div>
            </div>
            <div className="courses-info-div info-div bigger-info-div">
              <div className="left-side-of-courses-stats--info-div">
                <p>15,500,000</p>
                <span>Balans</span>
              </div>
              <div className="right-side-of-courses-stats--info-div right-side-of-info-div-fourth-divest">
                <div className="right-side-of-courses-stats--info-div-fourth">
                  <img src={Fourth} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="course-teaching-auditory">
            <div className="main-container-auditory"></div>
            <div className="right-sidebar-auditory">
              <p>O’quvchilar yoshi</p>
              <div className="stat__2_2">
                <div
                  style={circleContainerStyle}
                  className="stat_2_2_inside-div"
                >
                  <Circle
                    percent={[
                      yosh18_23,
                      yosh1_17,
                      yosh24_29,
                      yosh30_35,
                      yosh36_45,
                    ]}
                    gapDegree={0}
                    gapPosition="top"
                    strokeWidth={14}
                    trailWidth={14}
                    strokeLinecap="round"
                    strokeColor={[
                      "#F2C94C",
                      "Orange",
                      "#6FCF97",
                      "#2D9CDB",
                      "#006AFF",
                    ]}
                  />
                </div>
                <ul className="ul-binnasa-div">
                  <li className="li_1">1-17</li>
                  <li className="li_2">18-23</li>
                  <li className="li_3">24-29</li>
                  <li className="li_4">30-35</li>
                  <li className="li_5">36-45</li>
                  <li className="li_6">46+</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="course-stats-in-diagrams">
            <div className="courses-left-diagram">
              <div className="courses-left-with-span-and-select-div">
                <span>Ko`rsatkich</span>
                <select name="" id="">
                  <option value="umumiy">Umumiy</option>
                </select>
              </div>
              <div className="rating-mui-div">
                <div>
                  <Rating name="size-medium_1" defaultValue={1} />
                  <span className="rating-mui-div-inside-span">5 ta</span>
                </div>
                <div>
                  <Rating name="size-medium_1" defaultValue={2} />
                  <span className="rating-mui-div-inside-span">2 ta</span>
                </div>
                <div>
                  <Rating name="size-medium_1" defaultValue={3} />
                  <span className="rating-mui-div-inside-span">12 ta</span>
                </div>
                <div>
                  <Rating name="size-medium_1" defaultValue={4} />
                  <span className="rating-mui-div-inside-span">32 ta</span>
                </div>
                <div>
                  <Rating name="size-medium_1" defaultValue={5} />
                  <span className="rating-mui-div-inside-span">54 ta</span>
                </div>
                <div className="last-child-of-mui-rating-div">
                  <span className="rating-span-totally-score-title">
                    O’rtacha
                  </span>
                  <span className="rating-span-totally-score">4,4</span>
                </div>
              </div>
            </div>
            <div className="courses-middle-diagram">
              <div className="courses-middle-diagram-selection">
                <select name="" id="" className="first-child-select">
                  <option value="Sotilgan kurslar">Sotilgan kurslar</option>
                </select>
                <select name="" id="" className="second-child-select">
                  <option value="hafta">hafta</option>
                  <option value="oy">oy</option>
                </select>
              </div>
              <ResponsiveContainer width="100%" height="80%">
                <AreaChart
                  width={400}
                  height={130}
                  data={data}
                  margin={{
                    top: 10,
                    right: 15,
                    left: 15,
                    bottom: 0,
                  }}
                >
                  <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#006AFF" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#006AFF" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="day" axisLine={false} />
                  <YAxis axisLine={true} />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="Summa"
                    stroke="#006AFF"
                    fillOpacity={1}
                    fill="url(#colorUv)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="courses-right-diagram">
              <p>O’quvchilar jinsi</p>
              <div className="progress-bar-svg">
                <ProgressBar
                  className="progress-bar"
                  radius={100}
                  progress={progress}
                  strokeWidth={30}
                  strokeColor="#006AFF"
                  strokeLinecap="round"
                  trackStrokeWidth={30}
                >
                  <div className="indicator">
                    <div>{progress}%</div>
                  </div>
                </ProgressBar>
              </div>
              <ul className="ul-gender">
                <li className="gender-man">Yigitlar</li>
                <li className="gender-women">Qizlar</li>
              </ul>
            </div>
          </div>
          <div className="course-student-locations">
            <div className="course-student-locations-div">
              <div className="course-student-locations-div-selection">
                <div className="left-side-locations-div-selection">
                  Joylashuv
                </div>
                <div className="right-side-locations-div-selection">
                  <select name="" id="selection-of-locations">
                    <option value="davlat">Davlat</option>
                    <option value="shahar">Shahar</option>
                  </select>
                </div>
              </div>
              {this.state.countryShow === true ? (
                <div className="course-location-div-countries">
                  {this.state.countries.map((country) => {
                    return (
                      <React.Fragment>
                        <div>
                          <div className="spanation-div">
                            <span className="spanation-div-first">
                              {country.country}
                            </span>
                            <span className="spanation-div-second">
                              {country.percent}%
                            </span>
                          </div>
                          <div>
                            <Line
                              percent={country.percent}
                              strokeWidth="5"
                              trailWidth="5"
                              strokeColor="#006AFF"
                            ></Line>
                          </div>
                        </div>
                      </React.Fragment>
                    );
                  })}
                </div>
              ) : (
                <div className="course-location-div-cities">
                  {this.state.cities.map((city) => {
                    return (
                      <React.Fragment>
                        <div>
                          <div className="spanation-div">
                            <span className="spanation-div-first">
                              {city.cities}
                            </span>
                            <span className="spanation-div-second">
                              {city.percent}%
                            </span>
                          </div>
                          <div>
                            <Line
                              percent={city.percent}
                              strokeWidth="5"
                              trailWidth="5"
                              strokeColor="#006AFF"
                            ></Line>
                          </div>
                        </div>
                      </React.Fragment>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Statistics;
