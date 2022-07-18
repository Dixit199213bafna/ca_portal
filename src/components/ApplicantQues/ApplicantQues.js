import React from "react";

const ApplicantQues = () => {
    return (
        <React.Fragment>
            <div>
                <p>Why do you wish to become Campus Ambassador?</p>
                <div className="field_value">
                  <input type="text" placeholder="(short answer type)"/> 
                </div>
            </div>
            <div>
                <p>Why do you this you are right candidate for this position?</p>
                <div className="field_value">
                  <input type="text" placeholder="(short answer type)"/> 
                </div>
            </div>
            <div>
                <div className="field_value">
                  <input type="checkbox"/>
                  <label>I agree to all the Terms and Conditions stated by Shaastra for the Campus Ambassador Program on the CA website</label>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ApplicantQues;