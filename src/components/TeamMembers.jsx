// import React from "react";
// import { LinkedinIcon } from "lucide-react";

// const teamMembers = [
//   { name: "Annette Black", role: "Graphic Designer", image: "https://bytewave-next.vercel.app/_next/image?url=%2Fimages%2Favatar%2FIMG-4.png&w=3840&q=75", linkedin: "#" },
//   { name: "Jane Cooper", role: "CEM - digiNova", image: "https://bytewave-next.vercel.app/_next/image?url=%2Fimages%2Favatar%2FIMG-5.png&w=3840&q=75", linkedin: "#" },
//   { name: "Brooklyn Simmons", role: "Photographer", image: "https://bytewave-next.vercel.app/_next/image?url=%2Fimages%2Favatar%2FIMG-6.png&w=3840&q=75", linkedin: "#" },
//   { name: "Theresa Webb", role: "CEM - digiNova", image: "https://bytewave-next.vercel.app/_next/image?url=%2Fimages%2Favatar%2FIMG-7.png&w=3840&q=75", linkedin: "#" },
//   { name: "Kathryn Murphy", role: "Photographer", image: "https://bytewave-next.vercel.app/_next/image?url=%2Fimages%2Favatar%2FIMG-8.png&w=3840&q=75", linkedin: "#" },
//   { name: "Cameron Williamson", role: "CEM - digiNova", image: "https://bytewave-next.vercel.app/_next/image?url=%2Fimages%2Favatar%2FIMG-9.png&w=3840&q=75", linkedin: "#" },
// ];

// export default function TeamMembers() {
//   return (
//     <section className="py-12 bg-white">
//       <div className="max-w-6xl mx-auto px-4 text-start mb-10">
//         <h2 className="text-3xl font-bold mb-2">Meet Our Leaders</h2>
//         <p className="text-gray-600">
//           Discover exceptional experiences through testimonials from our satisfied customers.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
//         {teamMembers.map((member, index) => (
//           <div key={index} className="rounded-2xl shadow-md overflow-hidden bg-gray-50">
//             <img src={member.image} alt={member.name} className="w-full h-72 object-cover" />
//             <div className="p-6 text-center">
//               <div className="flex items-center justify-center gap-2 mb-1">
//                 <h3 className="text-xl font-semibold">{member.name}</h3>
//                 <a
//                   href={member.linkedin}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 transition"
//                 >
//                   <LinkedinIcon className="w-4 h-4 text-gray-700" />
//                 </a>
//               </div>
//               <p className="text-gray-500">{member.role}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


import React from "react";
import { FaLinkedinIn } from "react-icons/fa";

const teamMembers = [
  { name: "Annette Black", role: "Graphic Designer", image: "https://bytewave-next.vercel.app/_next/image?url=%2Fimages%2Favatar%2FIMG-4.png&w=3840&q=75", linkedin: "#" },
  { name: "Jane Cooper", role: "CEM - digiNova", image: "https://bytewave-next.vercel.app/_next/image?url=%2Fimages%2Favatar%2FIMG-5.png&w=3840&q=75", linkedin: "#" },
  { name: "Brooklyn Simmons", role: "Photographer", image: "https://bytewave-next.vercel.app/_next/image?url=%2Fimages%2Favatar%2FIMG-6.png&w=3840&q=75", linkedin: "#" },
  { name: "Theresa Webb", role: "CEM - digiNova", image: "https://bytewave-next.vercel.app/_next/image?url=%2Fimages%2Favatar%2FIMG-7.png&w=3840&q=75", linkedin: "#" },
  { name: "Kathryn Murphy", role: "Photographer", image: "https://bytewave-next.vercel.app/_next/image?url=%2Fimages%2Favatar%2FIMG-8.png&w=3840&q=75", linkedin: "#" },
  { name: "Cameron Williamson", role: "CEM - digiNova", image: "https://bytewave-next.vercel.app/_next/image?url=%2Fimages%2Favatar%2FIMG-9.png&w=3840&q=75", linkedin: "#" },
];

export default function TeamMembers() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center mb-10">
        <h2 className="text-5xl font-semibold mb-2">Meet Our Leaders</h2>
        <p className="text-gray-600 text-xl">
          Discover exceptional experiences through testimonials from our satisfied customers.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="rounded-2xl shadow-md overflow-hidden bg-gray-50">
            <img src={member.image} alt={member.name} className="w-full lg:w-[80] h-85 object-cover" />
            <div className="p-6">
              {/* Name, Role on left & LinkedIn on right */}
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-gray-500">{member.role}</p>
                </div>
 <a
    href={member.linkedin}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-300 hover:bg-gray-200 transition"
  >
    <FaLinkedinIn className="w-4 h-4  " />
  </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}




