import './Contact.scss';

import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_swvyoxt',
        'template_8ftm5lg',
        formRef.current,
        'lq24gSWS0vbWO6eVi'
      )
      .then(() => {
        alert('Message sent successfully!');
        window.location.reload(false);
      })
      .catch((e) => {
        alert('Failed to send the message, please try again');
        console.log(e);
      });
  };

  return (
    <div className="contact">
      <div className="contact__content">
        <div className="contact__content-description">
          <h3>Contact me</h3>
          <p>
            I am interested in freelance and full time opportunities - highly
            ambitious about large/small projects which are customer facing.
            However, if you have any other requests, question or opportunities,
            please feel free to contact me using the form below
          </p>
        </div>

        <div className="contact__content-form">
          <form ref={formRef} onSubmit={sendEmail}>
            <ul>
              <li className="half">
                <input type="text" name="name" placeholder="Name" required />
              </li>
              <li className="half">
                <input type="email" name="email" placeholder="Email" required />
              </li>
              <li>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </li>

              <li>
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                ></textarea>
              </li>

              <li>
                <input type="submit" className="btn-submit" value="SEND" />
              </li>
            </ul>
          </form>
        </div>
      </div>

      <div className="contact__content-map-info">
        Aneesh Saravu Karekad,
        <br />
        Ontario, Canada
        <br />
        <span>aneeshsk1996@gmail.com</span>
      </div>

      <div className="contact__content-map">
        <MapContainer center={[44.101999, -79.443053]} zoom={13}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[44.101999, -79.443053]}>
            <Popup>
              Aneesh lives somewhere around here, come over for a cup of coffee
              :)
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Contact;
