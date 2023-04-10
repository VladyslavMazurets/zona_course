import React from 'react';

function ContactUs() {
  return (
    <div className="bg-black">
      <div>
        <form>
          <label htmlFor="name">
            <input name="name" />
          </label>
          <label htmlFor="email">
            <input name="email" />
          </label>
          <label htmlFor="text">
            <textarea name="text" />
          </label>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
