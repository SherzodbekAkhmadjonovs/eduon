import React, { Component } from "react";
import InfoRoundedIcon from "@material-ui/icons/InfoRounded";
import "./economics.css";
import Swap1 from "../../images/Swap.svg";
import Swap2 from "../../images/Swap2.svg";
const data = require("../../json/moliya.json");
class Economics extends Component {
  state = {
    data: data,
  };
  render() {
    return (
      <React.Fragment>
        <div className="economics-main-container">
          <div className="top-payment-card-wrapper">
            <div className="left-card-wrapper">
              <div className="top-teachers-card-name-for-using">
                <span>Uzcard</span>
              </div>
              <div className="middle-teachers-card-number-for-using">
                <span>
                  **** **** ****{" "}
                  <span id="middle-teachers-card-number-for-using-inside-span-in-span">
                    1234
                  </span>
                </span>
              </div>
              <div className="info-about-teachers-card-owner">
                <div className="left-info-about-teachers-card-owner">
                  <span className="card-owner-div">Karta egasi</span>
                  <span className="owner-of-card-name">Ibrohim Ismagilov</span>
                </div>
                <div className="right-info-about-teachers-card-owner">
                  <span className="card-working-date-div">Muddati</span>
                  <span className="card-working-date">22/12</span>
                </div>
              </div>
            </div>
            <div className="right-card-wrapper">
              <div className="right-card-criteria-cards">
                <div className="cards-wrapper-div">
                  <p className="card-balance-div-in-teacher-content">Balans</p>
                  <div>
                    <span className="card-balance-in-numbers-indicator">
                      11,000,000 <span>so’m</span>
                    </span>
                  </div>
                </div>
                <div className="cards-wrapper-div right-side-of-card-wrapper-div">
                  <p className="card-balance-div-in-teacher-content">
                    Hozirgacha umumiy kirim
                  </p>
                  <div>
                    <span className="card-balance-in-numbers-indicator">
                      198,000,000 <span>so’m</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="right-card-criteria-info-sections">
                <p>
                  <InfoRoundedIcon color="primary" />
                  Pul har oyning 10 sanasigacha kartangizga yuboriladi.
                </p>
                <p>
                  <InfoRoundedIcon color="primary" />
                  Pul yuborilishi uchun hisobingizda kamida 50.000 so’m bo’lishi
                  lozim.
                </p>
              </div>
            </div>
          </div>
          <div className="main-content-for-payment-methods">
            <h4>Kirim chiqimlar</h4>
            {this.state.data.map((data) => {
              return (
                <div className="main-content-done-payments">
                  {data.holat !== "kirim" ? (
                    <img src={Swap1} alt="" />
                  ) : (
                    <img src={Swap2} alt="" />
                  )}
                  <span className="data-json-data-ism">{data.ismi}</span>
                  <span className="data-json-data-sana">{data.sana}</span>
                  <span className="data-json-data-qiymat">{data.qiymat}</span>
                  <span className="data-json-data-status">{data.status}</span>
                </div>
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Economics;
