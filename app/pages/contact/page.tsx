// -- REACT
import { FC } from "react";
// -- COMPONENTS
import { Hero } from "../../ui/components/Hero";
import { InputText } from "../../ui/components/Input/Index";
import Map from "../../ui/components/Map";
import { HeadSection } from "../../ui/components/HeadSection";
// -- STYLE
import "./contact.scss";
import { Button } from "../../ui/components/Button";

const Contact: FC = () => {
  return (
    <div id="contact">
      <Hero title="Contact Us" />
      <div className="contactContainer">
        {/* HEAD */}
        <HeadSection headText="Contact Us" title="Contact For Any Query" />
        {/* INFO CONTACT */}
        <div className="infoContactContainer">
          <div className="infoContact">
            <div className="infoHead">
              <h4>Booking</h4>
              <div className="line"></div>
            </div>
            <div className="contact">
              <i className="fa-solid fa-envelope"></i>
              <span>info@example.com</span>
            </div>
          </div>
          <div className="infoContact">
            <div className="infoHead">
              <h4>General</h4>
              <div className="line"></div>
            </div>
            <div className="contact">
              <i className="fa-solid fa-envelope"></i>
              <span>info@example.com</span>
            </div>
          </div>
          <div className="infoContact">
            <div className="infoHead">
              <h4>Technical</h4>
              <div className="line"></div>
            </div>
            <div className="contact">
              <i className="fa-solid fa-envelope"></i>
              <span>info@example.com</span>
            </div>
          </div>
        </div>
        {/* MAPS AND INPUT */}
        <div className="mapsAndForm">
          <div className="mapsContainer">
            <Map lat={45.610550610806136} lng={9.233765268536718}/>
          </div>
          <div className="inputContainer">
            <form>
              <div className="info">
                <div className="infoInputContainer">
                  <InputText
                    name="name"
                    type="text"
                    label="Your Name"
                    customClass="infoInput"
                  />
                </div>
                <div className="infoInputContainer">
                  <InputText
                    name="email"
                    type="email"
                    label="Your Email"
                    customClass="infoInput"
                  />
                </div>
              </div>
              <div className="subject">
                <InputText name="subject" type="text" label="Subject" />
              </div>
              <div className="textAreaContainer">
                <label>Message</label>
                <textarea />
              </div>
              <div className="buttonContainer">
                <Button
                  ariaLabel="send message"
                  labelBtn="send message"
                  fullWidth
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
