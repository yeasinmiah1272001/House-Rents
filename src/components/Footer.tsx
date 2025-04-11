import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <Container className=" grid grid-cols-1 md:grid-cols-4 gap-6 ">
        {/* Find Houses Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Find Houses</h3>
          <p className="text-gray-400 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
            incidunt architecto soluta laboriosam.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-gray-400">
              <FaMapMarkerAlt /> 95 South Park Avenue, USA
            </li>
            <li className="flex items-center gap-2 text-gray-400">
              <FaPhoneAlt /> +456 875 369 208
            </li>
            <li className="flex items-center gap-2 text-gray-400">
              <FaEnvelope /> support@findhouses.com
            </li>
          </ul>
        </div>

        {/* Navigation Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Navigation</h3>
          <ul className="space-y-2">
            <li>Home One</li>
            <li>Properties Right</li>
            <li>Properties List</li>
            <li>Property Details</li>
            <li>Agents Listing</li>
          </ul>
        </div>

        {/* Twitter Feeds Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Twitter Feeds</h3>
          <ul className="space-y-4">
            <li className="text-gray-400">
              <FaTwitter className="inline text-blue-400" /> @Findhouses All
              Share Them With Me Baby Said Inspet. <br />
              <span className="text-sm">about 5 days ago</span>
            </li>
            <li className="text-gray-400">
              <FaTwitter className="inline text-blue-400" /> @Findhouses All
              Share Them With Me Baby Said Inspet. <br />
              <span className="text-sm">about 5 days ago</span>
            </li>
            <li className="text-gray-400">
              <FaTwitter className="inline text-blue-400" /> @Findhouses All
              Share Them With Me Baby Said Inspet. <br />
              <span className="text-sm">about 5 days ago</span>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Newsletters</h3>
          <p className="text-gray-400 mb-4">
            Sign Up for Our Newsletter to get Latest Updates Offers. Subscribe
            to receive news in your inbox.
          </p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full px-4 py-2 rounded-l-lg bg-gray-700 text-gray-400 focus:outline-none"
            />
            <button className="px-4 py-2 bg-red-500 text-white rounded-r-lg hover:bg-red-600">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </Container>
      {/* Bottom Section */}
      <div className="mt-8 text-center text-gray-500 border-t border-gray-700 pt-4">
        2021 © Copyright - All Rights Reserved.
        <div className="flex justify-center space-x-4 mt-2">
          <FaFacebookF className="hover:text-white cursor-pointer" />
          <FaTwitter className="hover:text-white cursor-pointer" />
          <FaInstagram className="hover:text-white cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
