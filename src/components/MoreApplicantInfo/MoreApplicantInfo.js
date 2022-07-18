import React from "react";
import './MoreApplicant.css';

const MoreApplicantInfo = () => {
    return (
        <React.Fragment className ="more-info">
                <div>
                   <p>Were you a Shaastra CA previously?</p>
                   <div className="field_value">
                      <input type="radio" id="Y" name="fav_language" value="Y"/>
                      <label for="Y">Yes</label><br/>
                      <input type="radio" id="N" name="fav_language" value="N"/>
                      <label for="N">No</label><br/> 
                    </div>
                </div>
                <div>
                    <p>Whichh social media sites do you use?</p>
                    <div  className="field_value">
                        <input type="checkbox" value="facebook" name="media_Sites"/> Facebook
                        <input type="checkbox" value="linkedin" name="media_Sites"/> Linkedin
                        <input type="checkbox" value="twitter" name="media_Sites"/> Twitter
                        <input type="checkbox" value="instagram" name="media_Sites"/> Instagram
                    </div>
                </div>
                <div>
                   <p>Do you have any past experience in handling Positions of Responsibility?</p>
                   <div className="field_value">
                      <input type="radio" id="Y" name="responsibilty" value="Y"/>
                      <label for="Y">Yes</label><br/>
                      <input type="radio" id="N" name="responsibilty" value="N"/>
                      <label for="N">No</label><br/> 
                    </div>
                </div>
        </React.Fragment>
    )
}

export default MoreApplicantInfo;