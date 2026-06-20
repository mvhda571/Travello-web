import img from "../assets/logo.svg"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import { IoRocket } from "react-icons/io5"

export default function Footer() {
  return (
    <footer className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div>
          <img src={img} alt="Travello Logo" />
        </div>

        {/* Subscribe Section */}
        <div className="relative bg-purple-50 rounded-3xl p-10 md:p-14 text-center mb-16 overflow-hidden">

          <div className="absolute top-5 right-5 w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white text-xl">
            <IoRocket size={24} />
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 max-w-3xl mx-auto mb-8">
            Subscribe to get information, latest news and other
            interesting offers about Jadoo
          </h2>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <input
              type="email"
              placeholder="Your email"
              className="w-full md:w-96 px-5 py-3 rounded-lg border border-gray-200 outline-none"
            />

            <button className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-3 rounded-lg transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

          <div>
            <h2 className="text-3xl font-bold mb-3">Travello</h2>
            <p className="text-gray-500 text-sm">
              Book your trip in minute, get full Control for much longer.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-500">
              <li>About</li>
              <li>Careers</li>
              <li>Mobile</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-500">
              <li>Help / FAQ</li>
              <li>Press</li>
              <li>Affiliates</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">More</h3>
            <ul className="space-y-2 text-gray-500">
              <li>Airlinefees</li>
              <li>Airline</li>
              <li>Low fare tips</li>
            </ul>
          </div>

          <div>
            <div className="flex gap-3 mb-5">
              <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition cursor-pointer">
                <FaFacebook size={18} />
              </div>

              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400 text-white flex items-center justify-center hover:opacity-90 transition cursor-pointer">
                <FaInstagram size={18} />
              </div>

              <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-blue-400 hover:border-blue-400 hover:text-white transition cursor-pointer">
                <FaTwitter size={18} />
              </div>
            </div>

            <p className="font-medium mb-3">Discover our app</p>

            <div className="flex gap-3">
              <button className="bg-black text-white px-4 py-2 rounded-lg text-sm">
                Google Play
              </button>

              <button className="bg-black text-white px-4 py-2 rounded-lg text-sm">
                App Store
              </button>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-400 text-sm mt-12">
          All rights reserved @jadoo.co
        </p>
      </div>
    </footer>
  );
}
