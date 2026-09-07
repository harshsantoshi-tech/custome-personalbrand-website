import BookingPicker from "./BookingPicker";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-info">
        <div>
          <p className="contact-label">Contact</p>
          <h2 className="display contact-heading">
            Let's talk about your next move
          </h2>

          <div className="contact-detail">
            <p className="contact-detail-label">Email</p>
            <p className="contact-detail-value">
              <a href="mailto:elena@marshconsulting.com">elena@marshconsulting.com</a>
            </p>
          </div>
          <div className="contact-detail">
            <p className="contact-detail-label">Phone</p>
            <p className="contact-detail-value">+44 20 1234 5678</p>
          </div>
          <div className="contact-detail">
            <p className="contact-detail-label">Based in</p>
            <p className="contact-detail-value">London · working with clients globally</p>
          </div>
        </div>

        <div className="contact-social">
          <a href="#">LinkedIn</a>
          <a href="#">Newsletter</a>
        </div>
      </div>

      <div className="contact-booking-panel">
        <BookingPicker />
      </div>
    </section>
  );
}