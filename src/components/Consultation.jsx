
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
