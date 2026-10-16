'use client';

import React, { useState } from 'react';
import styles from './ContactMe.module.scss';

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    number: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert('One or more of the required fields are empty');
      return;
    }

    setStatus('sending');

    // Open mailto fallback or send to API
    const subject = encodeURIComponent('Inquiry from personal website');
    const body = encodeURIComponent(
      `${formData.message}\n\nMy contact info is:\n${formData.name}\n${formData.email}\n${formData.number}`
    );

    window.location.href = `mailto:chaitanyakhanna13@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setStatus('idle');
      setFormData({ name: '', email: '', message: '', number: '' });
      alert('Email client opened to send message!');
    }, 500);
  };

  return (
    <div className={styles.contactMeContainer} id="contact-me">
      <div className="heading-container">
        <h1>Contact Me</h1>
      </div>

      <div className={styles.contactMeContent}>
        <div className={styles.contactMeIntro}>
          If you have any questions or want to reach out to me, feel free to get in touch!
        </div>

        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name*"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Message*"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              type="tel"
              name="number"
              placeholder="Phone Number"
              value={formData.number}
              onChange={handleChange}
            />
          </div>
          <div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className={styles.sendButton}
            >
              {status === 'sending' ? 'Sending...' : 'Send'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
