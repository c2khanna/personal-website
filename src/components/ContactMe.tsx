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
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (status !== 'idle' && status !== 'loading') {
      setStatus('idle');
    }
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.name.trim() === '' || formData.email.trim() === '' || formData.message.trim() === '') {
      setStatus('error');
      setErrorMessage('Please fill out all required fields (Name, Email, Message).');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message. Please try again.');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '', number: '' });
    } catch (err: unknown) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error ? err.message : 'An unexpected error occurred. Please try again.'
      );
    }
  };

  return (
    <div className={styles.contactMeContainer} id="contact-me">
      <div className="heading-container">
        <br />
        <br />
        <br />
        <Reveal as="h1" config={headingConfig}>
          Contact Me
        </Reveal>
      </div>
      <div className={styles.contactMeContent}>
        <Reveal config={bodyConfig}>
          <div className={styles.contactMeIntro}>
            If you have any questions or want to reach out to me, feel free to get in touch!
          </div>
          <form onSubmit={handleSubmit} suppressHydrationWarning>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name*"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                required
                disabled={status === 'loading'}
                suppressHydrationWarning
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                required
                disabled={status === 'loading'}
                suppressHydrationWarning
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
                disabled={status === 'loading'}
                suppressHydrationWarning
              />
            </div>
            <div>
              <input
                type="text"
                name="number"
                placeholder="Phone Number"
                value={formData.number}
                onChange={handleChange}
                autoComplete="tel"
                disabled={status === 'loading'}
                suppressHydrationWarning
              />
            </div>

            {status === 'success' && (
              <div className={`${styles.statusMessage} ${styles.statusSuccess}`}>
                Thank you! Your message has been sent successfully.
              </div>
            )}

            {status === 'error' && (
              <div className={`${styles.statusMessage} ${styles.statusError}`}>
                {errorMessage}
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={status === 'loading'}
              >
                <div>{status === 'loading' ? 'Sending...' : 'Send'}</div>
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </div>
  );
}
