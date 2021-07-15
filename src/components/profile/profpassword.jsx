import React, { Component } from 'react';
class ProfPassword extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="profpassword-wrapper-div-for-content">
                    <div className="top-div-for-profpassword-input">
                        <div className="divs-for-prof-passwaord-criteria">
                            <p>Eski parol</p>
                            <input type="password" value="qwertyuiop12345"/>
                        </div>
                        <div className="divs-for-prof-passwaord-criteria">
                            <p>Yangi parol</p>
                            <input type="password" value="zxcdsaqwe" />
                        </div>
                        <div className="divs-for-prof-passwaord-criteria">
                            <p>Yangi parolni tasdiqlash</p>
                            <input type="password"  value="zxcdsaqwe"/>
                        </div>
                    </div>
                    <div className="bottom-div-for-profpassword-button">
                        <button>Saqlash</button>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default ProfPassword;