import React, { Component } from "react";
class ProfCard extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="main-content-for-profcard-wrapper">
          <div className="top-div-of-profcard-for-inputs">
            <div className="info-divs-inside-inputs-and-titles info-divs-inside-inputs-and-titles-profcard-div-input">
              <p>Karta egasi</p>
              <input type="text" value="Huzayfa Baxromiy" />
            </div>
            <div className="info-divs-inside-inputs-and-titles info-divs-inside-inputs-and-titles-profcard-div-input">
              <p>Karta nomeri</p>
              <input type="text" value="8600 3992 3791 7733" />
            </div>
            <div className="info-divs-inside-inputs-and-titles info-divs-inside-inputs-and-titles-profcard-div-input">
              <p>Amal qilish muddati</p>
              <input
                type="date"
                name="trip-start"
                value="2018-07-22"
                min="2018-01-01"
                max="2018-12-31"
              />
            </div>
          </div>
          <div className="bottom-div-of-profcard-for-button info-divs-inside-inputs-and-titles-profcard-div-button">
            <div className="btn-profcard-middle-main">
              <button>Saqlash</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProfCard;
