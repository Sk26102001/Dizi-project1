

import React from "react";
import { Users, Trophy, Target, ShieldCheck } from "lucide-react";

const values = [
  { icon: <Users className="w-10 h-10 text-blue-600" />, title: "Customer Centricity", description: "Our clients are our priority. We listen to their needs, understand their challenges, and work tirelessly to deliver IT solutions that meet and exceed their expectations. Their success is our success." },
  { icon: <Trophy className="w-10 h-10 text-blue-600" />, title: "Quality Assurance", description: "We have a relentless commitment to quality. We set high standards and rigorously test and monitor our IT services to ensure they meet those standards. Quality is non-negotiable." },
  { icon: <Target className="w-10 h-10 text-blue-600" />, title: "Client Focus", description: "Our clients are the center of our IT universe. We listen to their needs, provide tailored solutions, and stand by them every step of the way. Their success is our success, excellence, integrity." },
  { icon: <ShieldCheck className="w-10 h-10 text-blue-600" />, title: "Integrity Always", description: "Integrity is the foundation of trust. We operate with complete transparency, ensuring the highest ethical standards in all our IT operations. Our clients rely on us for honesty and fairness." },
];

const recognitions = [
  "https://bytewave-next.vercel.app/_next/image?url=%2Fimages%2Faward%2F1.png&w=3840&q=75",
  "https://bytewave-next.vercel.app/_next/image?url=%2Fimages%2Faward%2F2.png&w=3840&q=75",
  "https://bytewave-next.vercel.app/_next/image?url=%2Fimages%2Faward%2F3.png&w=3840&q=75",
  "https://bytewave-next.vercel.app/_next/image?url=%2Fimages%2Faward%2F4.png&w=3840&q=75",
  "https://bytewave-next.vercel.app/_next/image?url=%2Fimages%2Faward%2F5.png&w=3840&q=75",
];

export default function ValuesAndRecognition() {
  return (
    <section className="bg-gradient-to-b from-[#f9f6f1] via-[#f9f6f1] to-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-semibold text-center mb-4">Our Journey Through Time</h2>
        <p className="text-xl text-center text-black mb-12">Discover exceptional experiences through testimonials from our satisfied customers.</p>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600 text-lg">{value.description}</p>
            </div>
          ))}
        </div>




        {/* Recognition Section */}
<div className="mt-16 flex flex-wrap items-start gap-6">
  {/* Text content */}
  <div className="flex-1 min-w-[50px]">
    <h3 className="text-2xl md:text-3xl font-bold mb-4">
      Outstanding Customer Service Recognition
    </h3>

  </div>

  {/* Recognition images */}
  <div className="flex gap-4 justify-start flex-1 min-w-[400px] mr-30">
    {recognitions.map((src, index) => (
      <img
        key={index}
        src={src}
        alt={`Recognition ${index + 1}`}
        className="w-32 h-32 object-contain flex-shrink-0"
      />
    ))}
  </div>
</div>

      </div>
    </section>
  );
}

