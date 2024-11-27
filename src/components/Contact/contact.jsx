/* import React from "react";*/

const Contact = () => {
  return (
    <div>
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
       
        </div>
      </header>

      {/* Page Header */}
      <section className="bg-gray-200 py-10 text-center">
        <h2 className="text-4xl font-semibold text-gray-800">#lets_talk</h2>
        <p className="text-gray-600 mt-2">LEAVE A MESSAGE, We love to hear from you!</p>
      </section>

      {/* Contact Details */}
      <section className="container mx-auto py-10 px-6 flex flex-col lg:flex-row items-start gap-10">
        <div className="flex-1">
          <span className="text-sm uppercase text-blue-500">Get in touch</span>
          <h2 className="text-3xl font-bold mt-2">Visit one of our Station locations or contact us today</h2>
          <h3 className="text-xl font-semibold mt-4">Head Office</h3>
          <ul className="mt-4 space-y-4">
            <li className="flex items-center text-gray-700">
              <i className="fas fa-map-marker-alt text-blue-500 mr-4"></i>
              KK89 Kigali, Kanombe Rwanda
            </li>
            <li className="flex items-center text-gray-700">
              <i className="fas fa-envelope text-blue-500 mr-4"></i>
              cara@gmail.com
            </li>
            <li className="flex items-center text-gray-700">
              <i className="fas fa-phone-alt text-blue-500 mr-4"></i>
              +250 123 456 789
            </li>
            <li className="flex items-center text-gray-700">
              <i className="fas fa-clock text-blue-500 mr-4"></i>
              Monday to Saturday: 9:00 am to 16:00 pm
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15949.988071018137!2d30.075399272256156!3d-1.954555498696867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6f46d387275%3A0x7b8b917a7206d1e2!2sKigali%20Convention%20Centre!5e0!3m2!1sen!2srw!4v1729494245744!5m2!1sen!2srw"
            className="w-full h-96 border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-blue-100 py-10">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-6">
          <div>
            <h4 className="text-2xl font-semibold">Sign Up For Newsletters</h4>
            <p className="text-gray-600 mt-2">
              Get E-mail updates about our latest station and{" "}
              <span className="text-blue-500 font-semibold">special offers</span>.
            </p>
          </div>
          <div className="mt-4 lg:mt-0">
            <input
              type="text"
              placeholder="Your email address"
              className="p-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="p-3 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600">
              Sign up
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
          <div>
            <img src="/img/logo.png" alt="Logo" className="w-32 mb-4" />
            <h4 className="text-lg font-semibold">Contact</h4>
            <p>Address: KK562 Kigali  Road, Street 32</p>
            <p>Phone: +250 784 956 879 / (250)795 656 000 </p>
            <p>Hours: 10:00 - 18:00, Mon-Sat</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">About</h4>
            <ul className="space-y-2 mt-2">
              <li><a href="#" className="hover:underline">About us</a></li>
              <li><a href="#" className="hover:underline">Delivery information</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold">My Account</h4>
            <ul className="space-y-2 mt-2">
              <li><a href="#" className="hover:underline">Sign In</a></li>
              <li><a href="#" className="hover:underline">View Cart</a></li>
              <li><a href="#" className="hover:underline">My WishList</a></li>
              <li><a href="#" className="hover:underline">Track Order</a></li>
              <li><a href="#" className="hover:underline">Help</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Install App</h4>
            <p>From Apple Store or Google Play</p>
            <div className="flex space-x-2 mt-2">
              <img src="/img/pay/app.jpg" alt="App Store" className="w-24" />
              <img src="/img/pay/play.jpg" alt="Google Play" className="w-24" />
            </div>
            <p className="mt-4">Secured payment Gateways</p>
            <img src="/img/pay/pay.png" alt="Payment" className="mt-2" />
          </div>
        </div>
        <p className="text-center mt-6">2024, Merez Official Website Template</p>
      </footer>
    </div>
  );
};

export default Contact;
