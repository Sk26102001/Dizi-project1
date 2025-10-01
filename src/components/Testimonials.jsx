// export default function Testimonials() {
//   return (
//     <section className="bg-white py-16 px-6">
//       <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
//       <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
//         <div className="bg-gray-50 p-6 rounded-lg shadow">
//           <p className="italic text-gray-600 mb-4">“Amazing company to work with! They guided us...”</p>
//           <div className="flex items-center gap-4">
//             <img src="/assets/client1.jpg" alt="client" className="w-12 h-12 rounded-full" />
//             <div>
//               <h4 className="font-bold">Alice Johnson</h4>
//               <p className="text-gray-500 text-sm">Marketing Head</p>
//             </div>
//           </div>
//         </div>
//         <div className="bg-gray-50 p-6 rounded-lg shadow">
//           <p className="italic text-gray-600 mb-4">“They transformed our digital strategy completely...”</p>
//           <div className="flex items-center gap-4">
//             <img src="/assets/client2.jpg" alt="client" className="w-12 h-12 rounded-full" />
//             <div>
//               <h4 className="font-bold">Michael Lee</h4>
//               <p className="text-gray-500 text-sm">CEO</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



// import React from "react";
// import { Star, Quote } from "lucide-react";

// const testimonials = [
//   {
//     name: "Malika Kenny",
//     role: "UI Dev TechOne",
//     image: "https://bytewave-next.vercel.app/_next/image?url=%2Fimages%2Favatar%2FIMG-8.png&w=3840&q=75",
//     text: "Nathan is our data guru. His analytical mindset and ability to extract valuable insights from friendly data.",
//   },
//   {
//     name: "Malika Kenny",
//     role: "UI Dev TechOne",
//     image: "https://bytewave-next.vercel.app/_next/image?url=%2Fimages%2Favatar%2FIMG-9.png&w=3840&q=75",
//     text: "Their team's expertise and commitment to excellence are unmatched. They delivered our project ahead.",
//   },
//   {
//     name: "Malika Kenny",
//     role: "UI Dev TechOne",
//     image: "https://bytewave-next.vercel.app/_next/image?url=%2Fimages%2Favatar%2FIMG-10.png&w=3840&q=75",
//     text: "Great experience working with them. The process was smooth and the results exceeded our expectations.",
//   },
// ];

// export default function Testimonials() {
//   return (
//     <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
//       <div className="max-w-6xl mx-auto text-center mb-12 px-4">
//         <h2 className="text-3xl md:text-6xl font-semibold mb-4">Testimonials</h2>
//         <p className="text-gray-600 max-w-3xl mx-auto text-xl">
//           Discover exceptional experiences through testimonials from our satisfied customers.
//         </p>
//       </div>

//       <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 px-4">
//         {testimonials.map((t, i) => (
//           <div key={i} className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-4 relative">
//             <div className="flex space-x-1 text-yellow-400">
//               {Array.from({ length: 5 }).map((_, idx) => (
//                 <Star key={idx} size={18} fill="currentColor" />
//               ))}
//             </div>
//             <p className="text-gray-700 leading-relaxed">{t.text}</p>
//             <div className="flex items-center gap-4 mt-2">
//               <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full object-cover" />
//               <div>
//                 <h3 className="text-lg font-semibold">{t.name}</h3>
//                 <p className="text-gray-500 text-sm">{t.role}</p>
//               </div>
//             </div>
//             <Quote className="absolute bottom-6 right-6 text-purple-600" size={32} strokeWidth={3} />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

import React, { useState } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Malika Kenny",
    role: "UI Dev TechOne",
    image: "https://bytewave-next.vercel.app/_next/image?url=%2Fimages%2Favatar%2FIMG-8.png&w=3840&q=75",
    text: "Nathan is our data guru. His analytical mindset and ability to extract valuable insights from friendly data.",
  },
  {
    name: "John Doe",
    role: "Backend Dev ByteWave",
    image: "https://bytewave-next.vercel.app/_next/image?url=%2Fimages%2Favatar%2FIMG-11.png&w=3840&q=75",
    text: "Working with this team has been phenomenal. They are very responsive and professional.",
  },
  {
    name: "Jane Smith",
    role: "Product Manager",
    image: "https://bytewave-next.vercel.app/_next/image?url=%2Fimages%2Favatar%2FIMG-12.png&w=3840&q=75",
    text: "Their attention to detail and dedication to deadlines is impressive. Highly recommend!",
  },
  {
    name: "Malika Kenny",
    role: "UI Dev TechOne",
    image: "https://bytewave-next.vercel.app/_next/image?url=%2Fimages%2Favatar%2FIMG-9.png&w=3840&q=75",
    text: "Their team's expertise and commitment to excellence are unmatched. They delivered our project ahead.",
  },
  {
    name: "Malika Kenny",
    role: "UI Dev TechOne",
    image: "https://bytewave-next.vercel.app/_next/image?url=%2Fimages%2Favatar%2FIMG-10.png&w=3840&q=75",
    text: "Great experience working with them. The process was smooth and the results exceeded our expectations.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white w-screen">
      {/* Section Header */}
      <div className="w-full text-center mb-12 px-4">
        <h2 className="text-3xl md:text-6xl font-semibold mb-4">Testimonials</h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-xl">
          Discover exceptional experiences through testimonials from our satisfied customers.
        </p>
      </div>

      {/* Testimonial Slider */}
      <div className="w-full relative overflow-hidden px-4 lg:min-h-[300px]">
        <div
          className="flex transition-transform duration-500 gap-6"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-10 flex flex-col gap-4 relative min-w-full 
                         md:min-w-[40%] lg:min-w-[40%] lg:min-h-[200px]
                         shadow-[0_10px_20px_rgba(0,0,0,0.2),0_6px_6px_rgba(0,0,0,0.15),0_0_10px_rgba(0,0,0,0.1)]"
            >
              {/* Star rating */}
              <div className="flex space-x-1 text-yellow-400">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} size={20} fill="currentColor" />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-gray-700 leading-relaxed text-lg">{t.text}</p>

              {/* User info */}
              <div className="flex items-center gap-4 mt-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold">{t.name}</h3>
                  <p className="text-gray-500 text-sm">{t.role}</p>
                </div>
              </div>

              {/* Blue vertical quote icon */}
              <Quote
                className="absolute bottom-13  right-6 text-blue-500"
                size={48}
                strokeWidth={3}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              current === idx ? "bg-black" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
}
