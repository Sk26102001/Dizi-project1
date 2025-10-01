

import { useState } from "react";
import { Check } from "lucide-react";
import { CiPlay1 } from "react-icons/ci";

export default function VideoSection() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-8 bg-[#FAF8F3] rounded-2xl">
      {/* Left Section with Image / Video */}
      <div className="   p-6 flex flex-col">
        <h3 className="text-4xl font-semibold mb-7">
          100 Years Of History Serving The Poconos Region
        </h3>

        <div className="relative rounded-xl overflow-hidden min-h-[350px]">
          {!showVideo ? (
            <>
              {/* Thumbnail Image */}
              <img
                src="https://bytewave-next.vercel.app/_next/image?url=%2Fimages%2Fcomponent%2Fabout3.png&w=3840&q=75"
                alt="CEO"
                className="w-full h-[350px] object-cover rounded-xl"
              />

              {/* Caption */}
              <p className="absolute bottom-3 left-4 text-white text-lg font-semibold drop-shadow-lg">
                Tony Nguyen, CEO, Bytewave
              </p>

              {/* Round Play Button */}
              <button
                onClick={() => setShowVideo(true)}
                className="absolute inset-0 flex items-center justify-center"
              >
                <span className="w-16 h-16 flex items-center justify-center bg-black rounded-full">
                  <span className="text-white  text-2xl ml-1"><CiPlay1 /></span>
                </span>
              </button>
            </>
          ) : (
            /* YouTube Video Embed */
            <iframe
              className="w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/RaQKTgGyyyo?autoplay=1"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>

      {/* Right Section */}
      <div className="bg-white shadow rounded-2xl p-6 flex flex-col justify-between mr-15">
        <div>
          <h3 className="text-4xl font-semibold mb-7 mt-4">
            Unlock Your Financial Potential Today!
          </h3>
          <ul className="space-y-4 text-gray-800 text-lg">
            <li className="flex items-start gap-2">
              <Check className="text-blue-600 w-6 h-6 mt-1" />
              <span>Supported By Experienced Financial Experts.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-blue-600 w-6 h-6 mt-1" />
              <span>Optimizing Investment Portfolios And Assets.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-blue-600 w-6 h-6 mt-1" />
              <span>Building Stable Financial Plans For The Future.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-blue-600 w-6 h-6 mt-1" />
              <span>Ensuring Financial Security Through Suitable Insurance.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-blue-600 w-6 h-6 mt-1" />
              <span>Guidance On Tax Planning & Wealth Preservation.</span>
            </li>
          </ul>
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition self-start mt-6">
          Our Services
        </button>
      </div>
    </section>
  );
}
