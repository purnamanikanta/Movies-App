import {FaGoogle, FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa'

import './index.css'

const Footer = () => (
  <>
    <div className="footer-container">
      <button type="button" className="anchor-btn">
        <FaGoogle className="icon" />
      </button>
      <button type="button" className="anchor-btn">
        <FaTwitter className="icon" />
      </button>
      <button type="button" className="anchor-btn">
        <FaInstagram className="icon" />
      </button>

      <a href="https://youtu.be/qZziz52ej74?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BJT3mjhvHRpWiI6Fmbbe9vA%3D%3D">
        <button type="button" className="anchor-btn">
          <FaYoutube className="icon" />
        </button>
      </a>
    </div>
    <a href="https://www.linkedin.com/in/purna-manikantha-allada-a7a58921b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BJT3mjhvHRpWiI6Fmbbe9vA%3D%3D">
      <p className="contact-us"> Contact us</p>
    </a>
  </>
)

export default Footer
