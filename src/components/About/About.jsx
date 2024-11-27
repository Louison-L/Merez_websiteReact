/* import React from "react";*/

const About = () => {
  return (
    <div>
      {/* Header Section */}
      <section className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center p-4">
          <a href="#">
            <img src="/img/logo.png" alt="Logo" className="w-32" />
          </a>
          
        </div>
      </section>

      {/* Page Header */}
      <section className="bg-cover bg-center py-20 text-center text-white" style={{ backgroundImage: "url('/img/about/banner.png')" }}>
        <h2 className="text-4xl font-bold">#KnowUs</h2>
        <p className="text-lg mt-2">Lorem ipsum dolor sit amet, consectetur</p>
      </section>

      {/* About Section */}
      <section className="container mx-auto py-16 flex flex-wrap items-center">
        <img src="/img/about/a6.jpg" alt="About" className="w-full lg:w-1/2 rounded-lg shadow-md" />
        <div className="w-full lg:w-1/2 lg:pl-10 mt-8 lg:mt-0">
          <h2 className="text-3xl font-bold mb-4">Who We Are?</h2>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="mt-4 text-gray-700">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>
          <p className="mt-4 font-semibold">Create stunning images with as much or as little control as you like thanks to choice of Basic and Creative Modes.</p>
        </div>
      </section>

      {/* About App Section */}
      <section className="text-center py-16 bg-gray-100">
        <h1 className="text-3xl font-bold">Download Our <a href="#" className="text-blue-600 hover:underline">App</a></h1>
        <div className="mt-8 mx-auto w-3/4 rounded-lg overflow-hidden shadow-lg">
          <video className="w-full" autoPlay muted loop>
            <source src="/img/about/1.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {[
            { img: "/img/features/f1.png", text: "Free Shipping" },
            { img: "/img/features/f2.png", text: "Online Order" },
            { img: "/img/features/f3.png", text: "Save Money" },
            { img: "/img/features/f4.png", text: "Promotions" },
            { img: "/img/features/f5.png", text: "Happy Sell" },
            { img: "/img/features/f6.png", text: "24/7 Support" },
          ].map((feature, index) => (
            <div key={index} className="p-4">
              <img src={feature.img} alt={feature.text} className="mx-auto mb-4" />
              <h6 className="font-bold">{feature.text}</h6>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="w-full lg:w-1/2">
            <h4 className="text-xl font-bold">Sign Up For Newsletters</h4>
            <p className="text-gray-600 mt-2">Get E-mail updates about our latest shop and <span className="text-blue-600">special offers.</span></p>
          </div>
          <div className="w-full lg:w-1/2 mt-4 lg:mt-0 flex items-center">
            <input
              type="text"
              placeholder="Your email address"
              className="p-2 border border-gray-300 rounded-l w-full lg:w-auto"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700">Sign Up</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Footer Columns */}
          <div>
            <img src="/img/logo.png" alt="Logo" className="w-32 mb-4" />
            <h4 className="text-lg text-white">Contact</h4>
            <p>Address: 562 Wellington Road, Street 32, San Francisco</p>
            <p>Phone: +01 2222 365</p>
            <p>Hours: 10:00 - 18:00, Mon-Sat</p>
          </div>
          <div>
            <h4 className="text-lg text-white">About</h4>
            <a href="#" className="block hover:text-white">About Us</a>
            <a href="#" className="block hover:text-white">Delivery Information</a>
            <a href="#" className="block hover:text-white">Privacy Policy</a>
          </div>
          <div>
            <h4 className="text-lg text-white">My Account</h4>
            <a href="#" className="block hover:text-white">Sign In</a>
            <a href="#" className="block hover:text-white">View Cart</a>
          </div>
          <div>
            <h4 className="text-lg text-white">Install App</h4>
            <p>From Apple Store or Google Play</p>
          </div>
        </div>
        <div className="text-center mt-8">© 2021, Ecommerce Template</div>
      </footer>
    </div>
  );
};

export default About;
