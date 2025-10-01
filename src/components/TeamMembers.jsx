

import React from "react";
import { FaLinkedinIn } from "react-icons/fa";

const teamMembers = [
  { name: "Annette Black", role: "Graphic Designer", image: "./IMG-4.webp", linkedin: "#" },
  { name: "Jane Cooper", role: "CEM - digiNova", image: "./IMG-5.webp", linkedin: "#" },
  { name: "Brooklyn Simmons", role: "Photographer", image: "./IMG-6.webp", linkedin: "#" },
  { name: "Theresa Webb", role: "CEM - digiNova", image: "./IMG-7.webp", linkedin: "#" },
  { name: "Kathryn Murphy", role: "Photographer", image: "./IMG-8.webp", linkedin: "#" },
  { name: "Cameron Williamson", role: "CEM - digiNova", image: "./IMG-9.webp", linkedin: "#" },
];

export default function TeamMembers() {
  return (
    <section className="py-12 bg-white">
      {/* Heading */}
      <div className="max-w-6xl mx-auto px-4 text-center mb-10">
        <h2 className="text-5xl font-semibold mb-2">Meet Our Leaders</h2>
        <p className="text-gray-600 text-xl">
          Discover exceptional experiences through testimonials from our satisfied customers.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto px-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col">
            {/* Bigger Image Card */}
            <div className="w-full h-96 rounded-2xl overflow-hidden shadow-md">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info row below image */}
            <div className="mt-4 flex items-center justify-between">
              {/* Left side: Name + Role */}
              <div>
                <h3 className="text-xl font-semibold hover:text-blue-700">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </div>

              {/* Right side: LinkedIn */}
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-300 hover:bg-blue-500 transition"
              >
                <FaLinkedinIn className="w-4 h-4 " />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


