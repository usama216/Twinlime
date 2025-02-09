import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import { IoLocationSharp, IoMail, IoCall } from 'react-icons/io5';

const Footer = () => {
  return (
  <>
  <footer className="bg-gray-900 text-gray-300 py-10 px-[10%]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {/* TwinLime Group */}
        <div>
          <h3 className="text-lg font-semibold text-gray-100">TwinLime Group</h3>
          <p className="mt-2 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          <div className="flex space-x-4 mt-4 text-lime-400">
            <FaFacebookF className="cursor-pointer hover:text-lime-300" />
            <FaTwitter className="cursor-pointer hover:text-lime-300" />
            <FaYoutube className="cursor-pointer hover:text-lime-300" />
            <FaInstagram className="cursor-pointer hover:text-lime-300" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-100">Quick Links</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li><a href="#" className="hover:text-lime-400">About Us</a></li>
            <li><a href="#" className="hover:text-lime-400">Partners</a></li>
            <li><a href="#" className="hover:text-lime-400">News</a></li>
            <li><a href="#" className="hover:text-lime-400">Food Industry</a></li>
            <li><a href="#" className="hover:text-lime-400">Contact</a></li>
            <li><a href="#" className="hover:text-lime-400">Packaging</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-gray-100">Contact Info</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li className="flex items-center space-x-2">
              <IoLocationSharp className="text-lime-400" />
              <span>Jl. Sunset Road No.815, Kuta, Badung, Bali 80361</span>
            </li>
            <li className="flex items-center space-x-2">
              <IoCall className="text-lime-400" />
              <span>(+62) 8152 254 239</span>
            </li>
            <li className="flex items-center space-x-2">
              <IoMail className="text-lime-400" />
              <span>contact@twinlime.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-gray-100">Newsletter</h3>
          <p className="mt-2 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="mt-4 flex">
            <input 
              type="email" 
              placeholder="Your Email Address" 
              className="w-full px-4 py-2 text-gray-900 rounded-l-lg focus:outline-none" 
            />
            <button className="bg-lime-400 px-4 py-2 rounded-r-lg hover:bg-lime-300">
              ✉
            </button>
          </div>
        </div>
      </div>

   
    </footer>
 <div className="border-t border-lime-400 text-center text-sm text-gray-400 pt-4 bg-gray-900 pb-4">
 Copyright &copy; 2025 by TwinLime Group | All Rights Reserved
</div>
</>
);
};

export default Footer;