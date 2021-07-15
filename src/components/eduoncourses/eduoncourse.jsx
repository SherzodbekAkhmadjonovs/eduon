import React, { useState } from "react";
import Modal from "react-modal";
import "./eduoncourses.css";
import File from "../../images/file.svg";
import Test from "../../images/test.svg";
import Certificate from "../../images/certificate.svg";
import Video from "../../images/video.svg";
import Img from "../../images/courseimg.svg";
import Left from "../../images/Arrow - Left Circle.svg";
import Right from "../../images/Arrow - Right Circle.svg";
import Edit from "../../images/Edit.svg";
import Delete from "../../images/Delete.svg";
import Paper from "../../images/Paper Plus.svg";
function EduonCourse() {
  const [isOpen, setisOpen] = useState(false);
  const [isModalOpen, setisModalOpen] = useState(false);
  const [isModal, setisModal] = useState(false);
  const [isReact, setisReact] = useState(false);
  const [cover, setCover] = useState("");
  return (
    <React.Fragment>
      <div className="one-course-content-by-id">
        <div className="top-course-elements-to-editing-and-uploading">
          <div className="div-upload-video-file-test">
            <button onClick={() => setisOpen(true)}>
              <img src={Video} alt="" />
              <span>Video yuklash</span>
            </button>
          </div>
          <div className="div-upload-video-file-test">
            <button onClick={() => setisModalOpen(true)}>
              <img src={File} alt="" />
              <span>Fayl yuklash</span>
            </button>
          </div>
          <div className="div-upload-video-file-test">
            <button onClick={() => setisModal(true)}>
              <img src={Test} alt="" />
              <span>Test yuklash</span>
            </button>
          </div>
          <div className="div-upload-video-file-test">
            <button onClick={() => setisReact(true)}>
              <img src={Certificate} alt="" />
              <span>Sertifikat yuklash</span>
            </button>
          </div>
        </div>
        <h3 className="course-structure-title">Kurs tarkibi</h3>
        <div className="uploaded-course-file-inside-div">
          <div className="uploaded-video-course-inside-div-element">
            <div className="img-div-element-div">
              <img src={Img} alt="" />
            </div>
            <div className="course-title-div-element-div">
              <span>Blog yuritishni 0 dan o’rganamiz. Amaliy mashg’ulot.</span>
            </div>
            <div className="course-parametres-for-settings">
              <div className="left-side-course-parametres">
                <div>
                  <img src={Left} alt="" />
                </div>
                <span>1</span>
                <div>
                  <img src={Right} alt="" />
                </div>
              </div>
              <div className="right-side-course-parametres">
                <div>
                  <img src={Edit} alt="" />
                </div>
                <div>
                  <img src={Delete} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="uploaded-video-course-inside-div-element">
            <div className="img-div-element-div">
              <img src={Img} alt="" />
            </div>
            <div className="course-title-div-element-div">
              <span>Blog yuritishni 0 dan o’rganamiz. Amaliy mashg’ulot.</span>
            </div>
            <div className="course-parametres-for-settings">
              <div className="left-side-course-parametres">
                <div>
                  <img src={Left} alt="" />
                </div>
                <span>1</span>
                <div>
                  <img src={Right} alt="" />
                </div>
              </div>
              <div className="right-side-course-parametres">
                <div>
                  <img src={Edit} alt="" />
                </div>
                <div>
                  <img src={Delete} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="uploaded-file-course-inside-div-element">
            <div className="file-name-of-parametres">
              <span>Fayl: diajdiuh.doc</span>
            </div>
            <div className="file-title-of-file-course">
              <span>Blog yuritishni 0 dan o’rganamiz. Amaliy mashg’ulot.</span>
            </div>
            <div className="course-parametres-for-settings">
              <div className="left-side-course-parametres">
                <div>
                  <img src={Left} alt="" />
                </div>
                <span>2</span>
                <div>
                  <img src={Right} alt="" />
                </div>
              </div>
              <div className="right-side-course-parametres">
                <div>
                  <img src={Edit} alt="" />
                </div>
                <div>
                  <img src={Delete} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
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
          <div className="course-name-title">
            <p>Video nomi</p>
            <input type="text" />
          </div>
          <div className="course-name-title">
            <p>Kursni tanlash</p>
            <select className="category-select-variant" name="cars">
              <option value="Kurs nomi">Kurs nomi</option>
              <option value="Video">Video</option>
              <option value="Biznes, marketing">Biznes, marketing</option>
              <option value="Biznes, marketing">Biznes, marketing</option>
            </select>
          </div>
          <div className="course-image-file">
            <p>Video rasmi</p>
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
          <div className="course-image-file">
            <p>Video yuklash</p>
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
          <div className="course-type2">
            <div className="left-course-type">
              <p>Video tartib raqami</p>
              <select
                className="category-select-variant2 variant-3"
                name="types"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
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
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setisModalOpen(false)}
          style={{
            overlay: {
              backgroundColor: "rgb(36, 71, 120, 0.36)",
            },
            content: {
              width: "554px",
              height: "410px",
              left: "0",
              right: "0",
              marginLeft: "auto",
              marginRight: "auto",
              borderRadius: "24px",
              padding: "39px 36px 39px 36px",
              marginTop: "105px",
            },
          }}
        >
          <div className="top-modal-file-upload-from-teacher-div">
            <p>Fayl nomi</p>
            <input
              type="text"
              value="Raqobatdan qutulish usullari"
              className="top-modal-file-upload-from-teacher-div-input"
            />
          </div>
          <div className="midlle-modal-file-upload-from-teacher-div">
            <p>Faylni yuklang</p>
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
          <div className="bottom-modal-file-upload-from-teacher-div">
            <div className="modal-close-and-upload-buttons">
              <button id="close-btn" onClick={() => setisModalOpen(false)}>
                Bekor qilish
              </button>
              <button id="upload-course-btn">Yuklash</button>
            </div>
          </div>
        </Modal>
        <Modal
          isOpen={isModal}
          onRequestClose={() => setisModal(false)}
          style={{
            overlay: {
              backgroundColor: "rgb(36, 71, 120, 0.36)",
            },
            content: {
              width: "554px",
              height: "410px",
              left: "0",
              right: "0",
              marginLeft: "auto",
              marginRight: "auto",
              borderRadius: "24px",
              padding: "39px 36px 39px 36px",
              marginTop: "105px",
            },
          }}
        >
          <div className="top-modal-file-upload-from-teacher-div">
            <p>Fayl nomi</p>
            <input
              type="text"
              value="Raqobatdan qutulish usullari"
              className="top-modal-file-upload-from-teacher-div-input"
            />
          </div>
          <div className="midlle-modal-file-upload-from-teacher-div">
            <p>Faylni yuklang</p>
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
          <div className="bottom-modal-file-upload-from-teacher-div">
            <div className="modal-close-and-upload-buttons">
              <button id="close-btn" onClick={() => setisModal(false)}>
                Bekor qilish
              </button>
              <button id="upload-course-btn">Yuklash</button>
            </div>
          </div>
        </Modal>
        <Modal
          isOpen={isReact}
          onRequestClose={() => setisReact(false)}
          style={{
            overlay: {
              backgroundColor: "rgb(36, 71, 120, 0.36)",
            },
            content: {
              width: "554px",
              height: "410px",
              left: "0",
              right: "0",
              marginLeft: "auto",
              marginRight: "auto",
              borderRadius: "24px",
              padding: "39px 36px 39px 36px",
              marginTop: "105px",
            },
          }}
        >
          <div className="top-modal-file-upload-from-teacher-div">
            <p>Fayl nomi</p>
            <input
              type="text"
              value="Raqobatdan qutulish usullari"
              className="top-modal-file-upload-from-teacher-div-input"
            />
          </div>
          <div className="midlle-modal-file-upload-from-teacher-div">
            <p>Faylni yuklang</p>
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
          <div className="bottom-modal-file-upload-from-teacher-div">
            <div className="modal-close-and-upload-buttons">
              <button id="close-btn" onClick={() => setisReact(false)}>
                Bekor qilish
              </button>
              <button id="upload-course-btn">Yuklash</button>
            </div>
          </div>
        </Modal>
      </div>
    </React.Fragment>
  );
}

export default EduonCourse;
