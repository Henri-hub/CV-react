import React from 'react'
import Navigation from '../components/Navigation'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const Contact = () => {
  return (
    <div className='contact'>
      <Navigation />
      <div className='contactContent'>
        <div className='header'></div>
        <div className='contactBox'>
          <h1>Contactez-moi</h1>
          <ul>
            <li>
              <i className='fas fa-map-marker-alt'></i>
              <span>Cholet</span>
            </li>
            <li>
              <i className='fas fa-mobile-alt'></i>
              <CopyToClipboard text='0634360539'>
                <span
                  className='clickInput'
                  onClick={() => {
                    alert('Téléphone copié !')
                  }}
                >
                  06 34 36 05 39
                </span>
              </CopyToClipboard>
            </li>
            <li>
              <i className='fas fa-envelope'></i>
              <CopyToClipboard text='nsukulawayambuhenri@gmail.com'>
                <span
                  className='clickInput'
                  onClick={() => {
                    alert('E-mail copié !')
                  }}
                >
                  nsukulawayambuhenri@gmail.com
                </span>
              </CopyToClipboard>
            </li>
          </ul>
        </div>
        <div className='socialNetwork'>
          <ul>
            <a
              href='https://www.google.com'
              target='_blank'
              reel='noopener noreferer'
            >
              <h4>LinkedIn</h4>
              <i className='fab fa-linkedin'></i>
            </a>
            <a
              href='https://www.google.com'
              target='_blank'
              reel='noopener noreferer'
            >
              <h4>Github</h4>
              <i className='fab fa-github'></i>
            </a>
            <a
              href='https://www.google.com'
              target='_blank'
              reel='noopener noreferer'
            >
              <h4>LinkedIn</h4>
              <i className='fab fa-linkedin'></i>
            </a>
            <a
              href='https://www.google.com'
              target='_blank'
              reel='noopener noreferer'
            >
              <h4>LinkedIn</h4>
              <i className='fab fa-linkedin'></i>
            </a>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Contact
