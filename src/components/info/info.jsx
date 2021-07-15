import React, { Component } from 'react';
import './info.css'
import Video from '../../images/Rectangle 100.svg'
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import ErrorRoundedIcon from '@material-ui/icons/ErrorRounded';
class Info extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="main-info-section-for-teachers">
                    <div className="left-content-info-section">
                        <div className="data-to-teach-how-to-use data-to-teach-how-to-use-main">
                            <p className="inside-bigger-paragraph">
                            Umumiy ma’lumot
                            </p>
                            <span className="inside-typic-content">
                            Talabalaringiz ularga yaxshi tuzilgan, amaliyotda qo'llangan va foydali kurs taqdim etayotganingizga ishonch hosil qilishi eng muhim omildir. Bizning muvaffaqiyatli-spikerlarimiz.asosiy vaqtlarini kurslarni to'g'ri rejalashtirish uchun sarflaydi. Chunki to'g'ri rejalashtirilgan kurs talabalarni qo'ygan maqsadlariga tezroq yetishishlariga yordam beradi.
                            </span>
                        </div>
                        <div className="data-to-teach-how-to-use">
                            <p className="inside-bigger-paragraph">
                            1-qadam
                            </p>
                            <p className="inside-smaller-paragraph">Kurs mavzusini tanlang.</p>
                            <span className="inside-typic-content">
                            O'zingiz tajribaga ega va yoqtirgan biror-bir mavzu tanlang. EduOn’da siz tanlagan mavzu bo'yicha talab va raqobatni tushunishga yordam beradigan bir nechta foydali vositalar mavjud.
                            </span>
                        </div>
                        <div className="data-to-teach-how-to-use">
                            <p className="inside-bigger-paragraph">
                            2-qadam
                            </p>
                            <p className="inside-smaller-paragraph">Kurs maqsadingizni va maqsad qilinayotgan auditoriyangizni aniqlab oling.</p>
                            <span className="inside-typic-content">
                            Kursingizni yaratishni boshlashdan oldin, siz kimga dars berayotganingizni va kurs tugaguniga qadar o'quvchilaringizni qayerga olib borishni xohlayotganingizni aniqlab olishingiz kerak.
                            </span>
                        </div>
                        <div className="data-to-teach-how-to-use">
                            <p className="inside-bigger-paragraph">3-qadam</p>
                            <p className="inside-smaller-paragraph">Talabalar siz o'rgatayotgan bilimlarni qanday amaliyotda qo'llashlarini aniqlab oling.</p>
                            <span className="inside-typic-content">
                            EduOn o'quvchilari o'zlarining bilimlarini amaliy mashg'ulotlarda qo'llashni yaxshi ko'radilar. Siz kiritishingiz mumkin bo'lgan turli xil amaliyot turlari mavjud, shuning uchun siz o'zingizning mavzuingiz uchun eng yaxshisini tanlab olishingiz kerak.
                            </span>
                        </div>
                        <div className="data-to-teach-how-to-use">
                            <p className="inside-bigger-paragraph">4-qadam</p>
                            <p className="inside-smaller-paragraph">Kursingizning rejasini yarating.</p>
                            <span className="inside-typic-content">
                            Kursingizning rejasi sizning kursingiz uchun asosdir. Kurslar ketma-ketligini rejalashtirib olsangiz, video tayyorlash jarayonida qiyinchiliklarga duch kelmaysiz.
                            </span>
                        </div>
                    </div>
                    <div className="right-video-info-section">
                        <div className="top-video-info-section">
                            <img src={Video} alt="" />
                        </div>
                        <div className="bottom-video-info-section">
                            <button className="bottom-video-btn">
                                <PhoneInTalkIcon color="primary"/>
                                Admin bilan aloqa
                            </button>
                            <button className="bottom-video-btn">
                                <ErrorRoundedIcon color="primary"/>
                                Foydalanish shartlari
                            </button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Info;