import React from 'react';
import './contact-page.scss';

/* eslint-disable-next-line */
export interface ContactPageProps {}

export function ContactPage(props: ContactPageProps) {
  return (
    <div className="section-container contact-page-container" id="contact-page">
      <div className="section-content-container">
        <div className="page-title">Contact</div>
        <p>Here's some of the way you can reach out to me if you want.</p>
      </div>
    </div>
  );
}

export default ContactPage;
