// export default function Consultation() {
//   return (
//     <section className="bg-blue-900 text-white py-16 px-6">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
//         <div>
//           <h3 className="text-2xl font-bold mb-4">Free Consultation – Discover IT Solutions For Your Business</h3>
//           <ul className="list-disc list-inside space-y-2 text-gray-300">
//             <li>Tailored IT strategies</li>
//             <li>Cloud integration and automation</li>
//             <li>Cybersecurity & compliance</li>
//             <li>Scalable solutions</li>
//           </ul>
//         </div>
//         <form className="bg-white text-black p-6 rounded-lg shadow">
//           <h4 className="text-lg font-bold mb-4">Schedule A Free Consultation</h4>
//           <input type="text" placeholder="Your Name" className="w-full border p-2 rounded mb-3" />
//           <input type="email" placeholder="Email Address" className="w-full border p-2 rounded mb-3" />
//           <textarea placeholder="Your Message" className="w-full border p-2 rounded mb-3"></textarea>
//           <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">Submit</button>
//         </form>
//       </div>
//     </section>
//   );
// }




// import React from "react";

// export default function ConsultationSection() {
//   return (
//     <section className="bg-gradient-to-r from-[#4B4C63] to-[#7A4E4E] text-white py-16 px-6 md:px-12 lg:px-20">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//         {/* LEFT SIDE */}
//         <div>
//           <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium mb-4">
//             CONTACT US
//           </button>
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
//             Free Consultation – Discover IT Solutions For Your Business
//           </h2>
//           <p className="text-gray-200 mb-6 leading-relaxed">
//             Unlock the full potential of your business with our free consultation.
//             Our expert team will assess your IT needs, recommend tailored
//             solutions, and chart a path to success. Book your consultation now
//             and take the first step towards empowering your business with
//             cutting-edge technology.
//           </p>

//           <ul className="space-y-3 text-gray-100">
//             {[
//               "Confirmation of appointment details",
//               "Research and preparation by the IT services company",
//               "Consultation to discuss technology solutions",
//               "Needs assessment for tailored solutions",
//               "Presentation of proposed solutions",
//               "Project execution and ongoing support",
//               "Follow-up to evaluate effectiveness and satisfaction",
//             ].map((item, index) => (
//               <li key={index} className="flex items-start space-x-2">
//                 <span className="text-green-400">✔</span>
//                 <span>{item}</span>
//               </li>
//             ))}
//           </ul>

//           {/* CONTACT INFO */}
//           <div className="mt-8 space-y-3 text-gray-200">
//             <p>📧 hi.avitex@gmail.com</p>
//             <p>📞 1-333-345-6868</p>
//             <p>📍 101 E129th St, East Chicago, IN 46312, US</p>
//             <a
//               href="#"
//               className="text-blue-400 hover:underline"
//             >
//               Open map
//             </a>
//           </div>
//         </div>

//         {/* RIGHT SIDE FORM */}
//         <div className="bg-white text-gray-900 rounded-2xl shadow-lg p-8">
//           <h3 className="text-2xl font-bold mb-6 text-center">
//             Schedule A Free Consultation
//           </h3>
//           <form className="space-y-4">
//             <input
//               type="text"
//               placeholder="Name"
//               className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
//             />
//             <input
//               type="text"
//               placeholder="Phone"
//               className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
//             />
//             <input
//               type="email"
//               placeholder="Company Email"
//               className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
//             />
//             <input
//               type="text"
//               placeholder="Company / Organization"
//               className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
//             />

//             <select className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300">
//               <option>Financial Planning</option>
//               <option>IT Support</option>
//               <option>Software Development</option>
//               <option>Cloud Solutions</option>
//               <option>Other</option>
//             </select>

//             <textarea
//               placeholder="Message"
//               rows="4"
//               className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
//             ></textarea>

//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }




// import React from "react";

// export default function ConsultationSection() {
//   return (
//     <section className="bg-gradient-to-r from-[#4B4C63] to-[#7A4E4E] text-white py-16 px-6 md:px-12 lg:px-20">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
//         {/* LEFT SIDE */}
//         <div>
//           <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium mb-4">
//             CONTACT US
//           </button>
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
//             Free Consultation – Discover IT Solutions For Your Business
//           </h2>
//           <p className="text-gray-200 mb-6 leading-relaxed">
//             Unlock the full potential of your business with our free consultation.
//             Our expert team will assess your IT needs, recommend tailored
//             solutions, and chart a path to success. Book your consultation now
//             and take the first step towards empowering your business with
//             cutting-edge technology.
//           </p>

//           <ul className="space-y-3 text-gray-100">
//             {[
//               "Confirmation of appointment details",
//               "Research and preparation by the IT services company",
//               "Consultation to discuss technology solutions",
//               "Needs assessment for tailored solutions",
//               "Presentation of proposed solutions",
//               "Project execution and ongoing support",
//               "Follow-up to evaluate effectiveness and satisfaction",
//             ].map((item, index) => (
//               <li key={index} className="flex items-start space-x-2">
//                 <span className="text-green-400">✔</span>
//                 <span>{item}</span>
//               </li>
//             ))}
//           </ul>

//           {/* CONTACT INFO */}
//           <div className="mt-8 space-y-3 text-gray-200">
//             <p>📧 hi.avitex@gmail.com</p>
//             <p>📞 1-333-345-6868</p>
//             <p>📍 101 E129th St, East Chicago, IN 46312, US</p>

//             {/* EMBED GOOGLE MAP */}
//             <div className="mt-4 w-full h-64 rounded-lg overflow-hidden shadow-lg">
//               <iframe
//                 title="Business Location"
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2930.2347196345117!2d-87.4665381845453!3d41.63786687926584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f5f9a2bc8b6df%3A0xa1699c19a8b2d7c7!2s101%20E%20129th%20St%2C%20East%20Chicago%2C%20IN%2046312%2C%20USA!5e0!3m2!1sen!2sin!4v1696123456789!5m2!1sen!2sin"
//                 width="100%"
//                 height="100%"
//                 allowFullScreen=""
//                 loading="lazy"
//                 className="border-0"
//               ></iframe>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT SIDE FORM */}
//         <div className="bg-white text-gray-900 rounded-2xl shadow-lg p-8">
//           <h3 className="text-2xl font-bold mb-6 text-center">
//             Schedule A Free Consultation
//           </h3>
//           <form className="space-y-4">
//             <input
//               type="text"
//               placeholder="Name"
//               className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
//             />
//             <input
//               type="text"
//               placeholder="Phone"
//               className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
//             />
//             <input
//               type="email"
//               placeholder="Company Email"
//               className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
//             />
//             <input
//               type="text"
//               placeholder="Company / Organization"
//               className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
//             />

//             <select className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300">
//               <option>Financial Planning</option>
//               <option>IT Support</option>
//               <option>Software Development</option>
//               <option>Cloud Solutions</option>
//               <option>Other</option>
//             </select>

//             <textarea
//               placeholder="Message"
//               rows="4"
//               className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
//             ></textarea>

//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }


// import React from "react";
// import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

// const mapContainerStyle = {
//   width: "100%",
//   height: "300px",
// };

// const center = {
//   lat: 41.896778, // Latitude of 101 E129th St, East Chicago, IN
//   lng: -87.622333, // Longitude
// };

// export default function ConsultationSection() {
//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: "AIzaSyDPatNTXrfY9-pUTYX6dDwmAfr5N1G670U", // Add your API key here
//   });

//   if (loadError) return <p>Error loading map</p>;
//   if (!isLoaded) return <p>Loading map...</p>;

//   return (
//     <section className="bg-gradient-to-r from-[#4B4C63] to-[#7A4E4E] text-white py-16 px-6 md:px-12 lg:px-20">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//         {/* LEFT SIDE */}
//         <div>
//           <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium mb-4">
//             CONTACT US
//           </button>
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
//             Free Consultation – Discover IT Solutions For Your Business
//           </h2>
//           <p className="text-gray-200 mb-6 leading-relaxed">
//             Unlock the full potential of your business with our free consultation.
//             Our expert team will assess your IT needs, recommend tailored solutions,
//             and chart a path to success.
//           </p>

//           <ul className="space-y-3 text-gray-100">
//             {[
//               "Confirmation of appointment details",
//               "Research and preparation by the IT services company",
//               "Consultation to discuss technology solutions",
//               "Needs assessment for tailored solutions",
//               "Presentation of proposed solutions",
//               "Project execution and ongoing support",
//               "Follow-up to evaluate effectiveness and satisfaction",
//             ].map((item, index) => (
//               <li key={index} className="flex items-start space-x-2">
//                 <span className="text-green-400">✔</span>
//                 <span>{item}</span>
//               </li>
//             ))}
//           </ul>

//           {/* CONTACT INFO */}
//           <div className="mt-8 space-y-3 text-gray-200">
//             <p>📧 hi.avitex@gmail.com</p>
//             <p>📞 1-333-345-6868</p>
//             <p>📍 101 E129th St, East Chicago, IN 46312, US</p>
//             <a
//               href="https://www.google.com/maps/place/101+E+129th+St,+East+Chicago,+IN+46312"
//               target="_blank"
//               className="text-blue-400 hover:underline"
//             >
//               Open map
//             </a>

//             {/* Google Map */}
//             <div className="mt-4 rounded-lg overflow-hidden">
//               <GoogleMap
//                 mapContainerStyle={mapContainerStyle}
//                 zoom={15}
//                 center={center}
//               >
//                 <Marker position={center} />
//               </GoogleMap>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT SIDE FORM */}
//         <div className="bg-white text-gray-900 rounded-2xl shadow-lg p-8">
//           <h3 className="text-2xl font-bold mb-6 text-center">
//             Schedule A Free Consultation
//           </h3>
//           <form className="space-y-4">
//             <input
//               type="text"
//               placeholder="Name"
//               className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
//             />
//             <input
//               type="text"
//               placeholder="Phone"
//               className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
//             />
//             <input
//               type="email"
//               placeholder="Company Email"
//               className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
//             />
//             <input
//               type="text"
//               placeholder="Company / Organization"
//               className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
//             />
//             <select className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300">
//               <option>Financial Planning</option>
//               <option>IT Support</option>
//               <option>Software Development</option>
//               <option>Cloud Solutions</option>
//               <option>Other</option>
//             </select>
//             <textarea
//               placeholder="Message"
//               rows="4"
//               className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
//             ></textarea>
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }





import React from "react";

export default function ConsultationSection() {
  return (
    <section className="bg-gradient-to-r from-[#4B4C63] to-[#7A4E4E] text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium mb-4">
            CONTACT US
          </button>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
            Free Consultation – Discover IT Solutions For Your Business
          </h2>
          <p className="text-gray-200 mb-6 leading-relaxed">
            Unlock the full potential of your business with our free consultation.
            Our expert team will assess your IT needs, recommend tailored solutions,
            and chart a path to success.
          </p>

          <ul className="space-y-3 text-gray-100 text-xl">
            {[
              "Confirmation of appointment details",
              "Research and preparation by the IT services company",
              "Consultation to discuss technology solutions",
              "Needs assessment for tailored solutions",
              "Presentation of proposed solutions",
              "Project execution and ongoing support",
              "Follow-up to evaluate effectiveness and satisfaction",
            ].map((item, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-green-400">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
            {/* Line before address */}
  <div className="border-t border-gray-400 my-8"></div>

          {/* CONTACT INFO */}
          <div className="mt-4 space-y-3 text-gray-200 text-xl">
            <p>📧 hi.avitex@gmail.com</p>
            <p>📞 1-333-345-6868</p>
            <p>📍 101 E129th St, East Chicago, IN 46312, US</p>
<a
  href="https://www.google.com/maps/place/101+E+129th+St,+East+Chicago,+IN+46312"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-300 underline"
>
  Open Map
</a>

</div>


        </div>



{/* RIGHT SIDE FORM */}
<div className="bg-white text-gray-900 rounded-2xl shadow-lg p-6 w-full md:w-4/5 lg:w-3/4 mx-auto">
  <h3 className="text-3xl font-bold mb-4 text-center">
    Schedule A Free Consultation
  </h3>
  <form className="space-y-4">
    {/* Name */}
    <div className="flex flex-col">
      <label className="mb-1 text-md text-gray-400">Name</label>
      <input
        type="text"
        className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
      />
    </div>

    {/* Phone */}
    <div className="flex flex-col">
      <label className="mb-1 text-md text-gray-400">Phone</label>
      <input
        type="text"
        className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
      />
    </div>

    {/* Company Email */}
    <div className="flex flex-col">
      <label className="mb-1 text-md text-gray-400">Company Email</label>
      <input
        type="email"
        className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
      />
    </div>

    {/* Company / Organization */}
    <div className="flex flex-col">
      <label className="mb-1 text-md text-gray-400">Company / Organization</label>
      <input
        type="text"
        className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
      />
    </div>

    {/* Service Type */}
    <div className="flex flex-col">
      <label className="mb-1 text-md text-gray-400">Service Type</label>
      <select className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300">
        <option>Financial Planning</option>
        <option>Business Planning</option>
        <option>Development Planning</option>
      </select>
    </div>

    {/* Message */}
    <div className="flex flex-col">
      <label className="mb-1 text-md text-gray-400">Message</label>
      <textarea
        rows="4"
        className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
      ></textarea>
    </div>

    <button
      type="submit"
      className="w-full bg-blue-600 text-white py-2.5 rounded-md hover:bg-blue-700 transition"
    >
      Submit
    </button>
  </form>
</div>


      </div>
    </section>
  );
}
