import { useState } from 'react';

const ContactSection = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Reset error message
    setErrorMessage('');

    // Validasi kosong
    if (!email.trim() || !message.trim()) {
      setErrorMessage('Email dan pesan tidak boleh kosong.');
      return;
    }

    // Validasi format email
    if (!emailPattern.test(email)) {
      setErrorMessage('Format email tidak valid. Contoh: nama@gmail.com');
      return;
    }

    // Tampilkan popup dan reset form
    setShowPopup(true);
    setEmail('');
    setMessage('');
    setErrorMessage('');
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <section id='contact'>
        <p className='section__text__p1'>Get in Touch</p>
        <h1 className='title'>Contact Me</h1>

        <div className='contact-info-upper-container'>
          <div className='contact-info-container'>
            <i className='fas fa-envelope'></i>
            <p>
              <a href='mailto:rezkydesyafa@gmail.com'>rezkydesyafa@gmail.com</a>
            </p>
          </div>
          <div className='contact-info-container'>
            <i className='fab fa-linkedin'></i>
            <p>
              <a href='https://www.linkedin.com/in/rezkydesyafa/'>
                rezkydesyafa
              </a>
            </p>
          </div>
        </div>

        <div className='input-container'>
          <h3 className='input-text-h3'>
            Feel free to reach out to me for any questions or opportunities!
          </h3>
          <div className='inputan'>
            <input
              type='email'
              id='email'
              className='input-name'
              placeholder='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              className='input-name'
              id='pesan'
              name='pesan'
              rows='3'
              cols='40'
              placeholder='message..'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          {/* Area pesan error */}
          {errorMessage && <div id='error-message'>{errorMessage}</div>}

          <button
            id='btnNama'
            className='btn-message btn-color-1'
            onClick={handleSubmit}
          >
            Send
          </button>
        </div>
      </section>

      {/* Popup Notification */}
      {showPopup && (
        <div
          id='popup'
          className='popup'
          style={{ display: 'flex' }}
          onClick={closePopup}
        >
          <div className='popup-content' onClick={(e) => e.stopPropagation()}>
            <div className='popup-icon'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='rgba(4,4,4,1)'
              >
                <path d='M1.94607 9.31543C1.42353 9.14125 1.4194 8.86022 1.95682 8.68108L21.043 2.31901C21.5715 2.14285 21.8746 2.43866 21.7265 2.95694L16.2733 22.0432C16.1223 22.5716 15.8177 22.59 15.5944 22.0876L11.9999 14L17.9999 6.00005L9.99992 12L1.94607 9.31543Z'></path>
              </svg>
            </div>
            <h2>Message Sent Successfully!</h2>
            <p>
              Thank you for contacting me, I will reply to your message as soon
              as possible.
            </p>
            <button
              id='closePopup'
              className='btn btn-color-1'
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactSection;
