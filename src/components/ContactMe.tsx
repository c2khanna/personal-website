'use client';

import React, { useState } from 'react';
import Reveal from './Reveal';
import styles from './ContactMe.module.scss';

const headingConfig = { reset: true, viewFactor: 0.9, viewOffset: { top: 56, right: 0, bottom: 0, left: 0 } };
const bodyConfig = { reset: true, viewFactor: 0.5, viewOffset: { top: 56, right: 0, bottom: 0, left: 0 } };

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    number: '',
  });
  const [isButtonEnabled, setIsButtonEnabled] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = () => {
    setIsButtonEnabled(false);

    if (formData.name.trim() === '' || formData.email.trim() === '' || formData.message.trim() === '') {
      alert('One or more of the required fields are empty');
      setIsButtonEnabled(true);
      return;
    }

    const mailBody = `${formData.message}\n\nMy contact info is:\n${formData.name}\n${formData.email}\n${formData.number}`;
    const subject = encodeURIComponent('Inquiry from personal website');
    const body = encodeURIComponent(mailBody);

    window.location.href = `mailto:chaitanyakhanna13@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      alert('Email client opened to send message!');
      setFormData({ name: '', email: '', message: '', number: '' });
      setIsButtonEnabled(true);
    }, 500);
  };

  return (
    <div className={styles.contactMeContainer} id="contact-me">
      <div className="heading-container">
        <br />
        <br />
        <br />
        <Reveal config={headingConfig}>
          <h1>Contact Me</h1>
        </Reveal>
      </div>
      <div className={styles.contactMeContent}>
        <Reveal config={bodyConfig}>
          <div className={styles.contactMeIntro}>
            If you have any questions or want to reach out to me, feel free to get in touch!
          </div>
          <form>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name*"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Message*"
                rows={5}
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                name="number"
                placeholder="Phone Number"
                value={formData.number}
                onChange={handleChange}
              />
            </div>
            <div>
              <button
                onClick={sendEmail}
                type="button"
                disabled={!isButtonEnabled}
              >
                <div>Send</div>
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </div>
  );
}
