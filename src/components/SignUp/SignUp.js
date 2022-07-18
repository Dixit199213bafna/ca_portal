import './SignUp.css';

function SignUp() {
    return (
        <div className="form login">
            <div className="form-content">
                <header>Sign Up</header>
                <form action="#">
                    <div>
            <div className="field input-field">
              <input type="text" placeholder="Name" className="input" />
            </div>
            <div className="field input-field">
              <input type="text" placeholder="College Name" className="input" />
            </div>
            <div className="field input-field">
              <input type="text" placeholder="College Address" className="input" />
            </div>
            <div className="field input-field">
              <input type="text" placeholder="College City" className="input" />
            </div>
            <div className="field input-field">
              <input type="text" placeholder="College State" className="input" />
            </div>
            <div className="field input-field">
              <input type="email" placeholder="Email" className="input" />
            </div>
            <div className="field input-field">
              <input type="text" placeholder="Degree" className="input" />
            </div>
            </div>
            <div>
            <div className="field input-field">
              <input type="text" placeholder="Branch" className="input" />
            </div>
            <div className="field input-field">
              <input
                type="number"
                placeholder="Year of Graduation"
                className="input"
              />
            </div>
            <div className="field input-field">
              <input type="text" placeholder="Postal Address" className="input" />
            </div>
            <div className="field input-field">
              <input type="text" placeholder="Postal City" className="input" />
            </div>
            <div className="field input-field">
              <input type="text" placeholder="Postal State" className="input" />
            </div>
            <div className="field input-field">
              <input type="number" placeholder="Pincode" className="input" />
            </div>
            <div className="field input-field">
              <input type="number" placeholder="Contact Number" className="input" />
            </div>
            </div>
            <div>
            <div className="field input-field">
              <input
                type="number"
                placeholder="Whatsapp Number"
                className="input"
              />
            </div>
            <div className="field input-field">
              <span>Were you a Shaastra CA previously ?</span>
              <div>
                <input type="radio" id="Q1" name="input" required />
                <label htmlFor="Q1">Yes</label>
                <input type="radio" id="Q2" name="input" required />
                <label htmlFor="Q2">No</label>
              </div>
            </div>
            <div className="field input-field">
              <p>Which social media sites do you use ?</p>
              <input type="checkbox" id="opt1" name="input1" />
              <label htmlFor="opt1">Facebook</label>
              <input type="checkbox" id="opt2" name="input2" />
              <label htmlFor="opt2">Linkedin</label>
              <input type="checkbox" id="opt3" name="input3" />
              <label htmlFor="opt3">Twitter</label>
              <input type="checkbox" id="opt4" name="input4" />
              <label htmlFor="opt4">Instagram</label>
            </div>
            <div className="field input-field">
              <p>
                Do you have any past experience in handling Positions of
                Responsibility ?
              </p>
              <input type="radio" id="yes" name="inputa" />
              <label htmlFor="yes">Yes</label>
              <input type="radio" id="no" name="inputa" />
              <label htmlFor="no">No</label>
            </div>
            <div className="field input-field">
              <p>Why do you wish to become a Campus Ambassador ?</p>
              <input
                type="text"
                placeholder="(short answer type)"
                className="input"
              />
            </div>
            <div className="field input-field">
              <p>
                Why do you think you are the right candidate for this position ?
              </p>
              <input
                type="text"
                placeholder="(short answer type)"
                className="input"
              />
            </div>
            <div className="field input-field">
              <input type="checkbox" id="agree" />
              <label htmlFor="agree" name="agree" id="class"
                >I agree to all the Terms and Conditions stated by Shaastra for
                the Campus Ambassador Program on the CA website.
              </label>
            </div>
            <div className="field button-field">
              <a href="page1.html" className="next">Next</a>
            </div>
            </div>
          </form>
            </div>
      </div>
    )
}

export default SignUp