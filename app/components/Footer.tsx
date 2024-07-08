import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faXTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#030125] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6">
            <h2 className="text-xl font-normal" style={{ fontFamily: 'Goldman' }}>HilltTech.</h2>
            <p>We are a major distributor<br /> of Oppo phones and<br />accessories in Nigeria.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6">
            <h2 className="text-lg font-bold">Shopping</h2>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/products">Products</Link></li>
              <li><Link href="/cart">Cart</Link></li>
              <li><Link href="/login">Login</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-7">
            <h2 className="text-lg font-bold mb-4">Contact Us</h2>
            <ul>
              <li className="flex items-center mb-5">
                <FontAwesomeIcon icon={faPhone} className="mr-2" /> +234 902 4567 100
              </li>
              <li className="flex items-center mb-5">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> hillttech@hilltinc.com
              </li>
              <li className="flex items-center mb-5">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" /> No 2, Bola Street, Ikeja, Lagos
              </li>
            </ul>
            <div className="flex mt-4">
              <Link href="#" className="mr-4">
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
              <Link href="#" className="mr-4">
                <FontAwesomeIcon icon={faXTwitter} />
              </Link>
              <Link href="#">
                <FontAwesomeIcon icon={faWhatsapp} />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="mb-2 md:mb-0">© 2024 HilltTech Inc. All rights reserved.</p>
          <p>
            <Link href="/privacy-policy" className="mr-4">Privacy Policy</Link>
            <Link href="/terms-and-conditions">Terms and Conditions</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
