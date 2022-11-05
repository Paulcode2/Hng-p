import FooterF from './logo.36d2d48a.png'
import FooterS from './I4G.png'
export default function Contact() {
    return(
        <div className="Contact">

          <div className="Con-Header">
          <h1>Contact Me</h1>
          <p>Hi there, contact me to ask me about anything you have in mind.</p>
          </div>
         
           <form
                action=""
                class="contact-form"
                name="contact"
              >
                <div className="names">
                <div>
                <span>First name</span> <br></br><input type="text"  placeholder="Enter your first name" id="first_name"/>
                  </div> 
                  <div>
                  <span>Last name</span> <br></br> <input type="text"  placeholder="Enter your last name" id="last_name"/> 
                  </div>
                  
                </div>
                <div>
                <span>Email</span> <br></br>
                <input type="text"  placeholder="yourname@email.com" id="email"/> 
                </div>
                <div class="input-control">
                <span>Messages</span> <br></br>
                  <textarea
                    name=""
                    id="message"
                    cols="15"
                    rows="8"
                    placeholder="Send me a message and I'll reply you as soon as possible..."
                  ></textarea> 
                </div>
                <div className="check">
                <input type="checkbox" id="check_btn" /> 
                <p>You agree to providing your data to Paul Levites who may contact you.</p>
                </div>
                <div>
                    <button id="btn_submit" >
                        <span>Send Message</span>
                    </button>
                </div>
              </form>

              <footer>
          <div>
            <img src={FooterF} alt="" />
          </div>
          <div class="footer-text">
            <p>HNG Internship 9 Frontend Task</p>
          </div>
          <div>
            <img src={FooterS} alt="" />
          </div>
        </footer>
        </div>
    )
}