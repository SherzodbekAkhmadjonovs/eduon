import React, { Component } from "react";
import Plus from "../../images/Paper Plus.svg";
import ProfilePhoto from "../../images/imgprofile.png";
class ProfInfo extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="main-content-for-prof-info-wrapper-div">
          <div className="top-info-for-profile-div">
            <div className="left-top-info-for-profile-div">
              <div className="profile-picture-for-profinfo">
                <img src={ProfilePhoto} alt="" />
              </div>
            </div>
            <div className="right-top-info-for-profile-div">
              <div className="right-top-info-top-part-of-profinfo">
                <input
                  type="text"
                  value="Ulug’bek"
                  className="right-top-profile-div-inputs"
                />
                <input
                  type="text"
                  value="+998 (94) 627-17-68"
                  className="right-top-profile-div-inputs"
                />
                <input
                  type="text"
                  value="Mamasaidov"
                  className="right-top-profile-div-inputs"
                />
                <input
                  type="text"
                  value="Ulugbek.eduon@gmail.com"
                  className="right-top-profile-div-inputs"
                />
              </div>
              <div className="right-top-info-top-part-of-profinfo-mobile-responsive">
                <div className="top-right-top-info-top-part-of-profinfo-mobile-responsive">
                  <div className="left-top-right-top-info-top-part-of-profinfo-mobile-responsive">
                    <div className="profile-picture-for-profinfo">
                      <img src={ProfilePhoto} alt="" />
                    </div>
                  </div>
                  <div className="right-top-right-top-info-top-part-of-profinfo-mobile-responsive">
                    <input
                      type="text"
                      value="Ulug’bek"
                      className="right-top-profile-div-inputs right-top-profile-div-inputs-mobile-responsive"
                    />
                    <input
                      type="text"
                      value="Mamasaidov"
                      className="right-top-profile-div-inputs right-top-profile-div-inputs-mobile-responsive right-top-profile-div-inputs-mobile-responsive2"
                    />
                  </div>
                </div>
                <div className="bottom-right-top-info-top-part-of-profinfo-mobile-responsive">
                  <input
                    type="text"
                    value="Ulugbek.eduon@gmail.com"
                    className="right-top-profile-div-inputs"
                  />
                  <input
                    type="text"
                    value="+998 (94) 627-17-68"
                    className="right-top-profile-div-inputs"
                  />
                </div>
              </div>
              <div className="middle-main-profinfo-for-profinfo-div">
                <div className="info-divs-inside-inputs-and-titles">
                  <p>Tug’ilgan sana</p>
                  <input type="text" value="16.01.2002" />
                </div>
                <div className="info-divs-inside-inputs-and-titles">
                  <p>Kasb/Status</p>
                  <input type="text" value="Marketolog" />
                </div>
                <div className="info-divs-inside-inputs-and-titles">
                  <p>Mamlakat</p>
                  <input type="text" value="O’zbekiston" />
                </div>
                <div className="info-divs-inside-inputs-and-titles">
                  <p>Viloyat</p>
                  <input type="text" value="Toshkent shahri" />
                </div>
                <div className="info-divs-inside-inputs-and-titles">
                  <p>Kompaniya va logotip</p>
                  <div className="alone-input-of-profinfo-div-outside-div-block">
                    <input
                      type="text"
                      value="O`zbekiston"
                      className="alone-input-of-profinfo-div"
                    />
                    <button>
                      <img src={Plus} alt="" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="second-middle-main-profinfo-for-profinfo-div">
                <div className="info-divs-inside-inputs-and-titles">
                  <p>Karta egasi</p>
                  <input type="text" value="Huzayfa Baxromiy" />
                </div>
                <div className="info-divs-inside-inputs-and-titles">
                  <p>Karta nomeri</p>
                  <input type="text" value="8600 3992 3791 7733" />
                </div>
                <div className="info-divs-inside-inputs-and-titles">
                  <p>Amal qilish muddati</p>
                  <input
                    type="date"
                    id="start"
                    name="trip-start"
                    value="2018-07-22"
                    min="2018-01-01"
                    max="2018-12-31"
                  />
                </div>
              </div>
              <div className="third-middle-main-profinfo-for-profinfo-div">
                <div className="thirds-middle-main">
                  <div className="info-divs-inside-inputs-and-titles">
                    <p>Eski parol</p>
                    <input type="password" value="qwertyuiop12345" required />
                  </div>
                  <div className="info-divs-inside-inputs-and-titles">
                    <p>Yangi parol</p>
                    <input type="password" value="zxcdsaqwe" required />
                  </div>
                </div>
                <div className="btn-thirds-middle-main">
                  <button>Saqlash</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProfInfo;
