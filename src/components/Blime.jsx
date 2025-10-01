// import React from "react";

// const timeline = [
//   {
//     date: "02/2016",
//     title: "The Early Days",
//     description: "In the early years, we were a small team with a big vision. We started with a handful of passionate individuals determined to make a difference.",
//     image: "https://bytewave-next.vercel.app/_next/image?url=%2Fimages%2Fblog%2Fitem16.png&w=3840&q=75",
//   },
//   {
//     date: "08/2019",
//     title: "Growth And Expansion",
//     description: "We expanded our operations, both in terms of scope and geography, to better serve the evolving needs of our clients.",
//     image: "https://bytewave-next.vercel.app/_next/image?url=%2Fimages%2Fblog%2Fitem11.png&w=3840&q=75",
//   },
//   {
//     date: "04/2022",
//     title: "Adapting To Change",
//     description: "We embraced emerging technologies, implemented sustainable practices, and fostered a culture of innovation that has allowed us to stay ahead of the curve.",
//     image: "https://bytewave-next.vercel.app/_next/image?url=%2Fimages%2Fblog%2Fitem14.png&w=3840&q=75",
//   },
//   {
//     date: "06/2022",
//     title: "Our Team",
//     description: "They are the heart of our organization, and their unwavering commitment to excellence has been the driving force behind our growth.",
//     image: "https://bytewave-next.vercel.app/_next/image?url=%2Fimages%2Fblog%2Fitem15.png&w=3840&q=75",
//   },
//   {
//     date: "12/2022",
//     title: "Client-Centric Approach",
//     description: "We have always placed their needs and satisfaction at the center of everything we do. Their trust and loyalty have been instrumental in our journey.",
//     image: "https://bytewave-next.vercel.app/_next/image?url=%2Fimages%2Fblog%2Fitem13.png&w=3840&q=75",
//   },
//   {
//     date: "04/2024",
//     title: "Looking Ahead",
//     description: "We remain dedicated to pushing boundaries, delivering unmatched IT Solution, and continuing to be a partner in the success of our clients.",
//     image: "https://bytewave-next.vercel.app/_next/image?url=%2Fimages%2Fblog%2Fitem12.png&w=3840&q=75",
//   },
// ];

// export default function Blime() {
//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-6xl mx-auto px-6">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Journey Through Time</h2>
//         <p className="text-center text-gray-500 mb-12">Tracing the Path of Our Legacy and Growth</p>

//         <div className="space-y-16">
//           {timeline.map((item, index) => (
//             <div key={index} className={`flex flex-col md:flex-row items-center md:gap-10 ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
//               <div className="flex-1 text-center md:text-left">
//                 <p className="text-sm text-gray-400">{item.date}</p>
//                 <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
//                 <p className="text-gray-600">{item.description}</p>
//               </div>
//               <div className="flex-1 mt-6 md:mt-0">
//                 <img src={item.image} alt={item.title} className="rounded-2xl shadow-md" />
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-15 text-center">
//           <h3 className="text-3xl font-semibold text-gray-900 ">Thank you for being a part of our history, and we look forward to a future</h3>
//          <h3 className="text-3xl font-semibold text-gray-900 mb-4">filled with shared successes and continued excellence.</h3>
            
       
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";

const timeline = [
  {
    date: "02/2016",
    title: "The Early Days",
    description:
      "In the early years, we were a small team with a big vision. We started with a handful of passionate individuals determined to make a difference.",
    image:
      "https://bytewave-next.vercel.app/_next/image?url=%2Fimages%2Fblog%2Fitem16.png&w=3840&q=75",
  },
  {
    date: "08/2019",
    title: "Growth And Expansion",
    description:
      "We expanded our operations, both in terms of scope and geography, to better serve the evolving needs of our clients.",
    image:
      "https://bytewave-next.vercel.app/_next/image?url=%2Fimages%2Fblog%2Fitem11.png&w=3840&q=75",
  },
  {
    date: "04/2022",
    title: "Adapting To Change",
    description:
      "We embraced emerging technologies, implemented sustainable practices, and fostered a culture of innovation that has allowed us to stay ahead of the curve.",
    image:
      "https://bytewave-next.vercel.app/_next/image?url=%2Fimages%2Fblog%2Fitem14.png&w=3840&q=75",
  },
  {
    date: "06/2022",
    title: "Our Team",
    description:
      "They are the heart of our organization, and their unwavering commitment to excellence has been the driving force behind our growth.",
    image:
      "https://bytewave-next.vercel.app/_next/image?url=%2Fimages%2Fblog%2Fitem15.png&w=3840&q=75",
  },
  {
    date: "12/2022",
    title: "Client-Centric Approach",
    description:
      "We have always placed their needs and satisfaction at the center of everything we do. Their trust and loyalty have been instrumental in our journey.",
    image:
      "https://bytewave-next.vercel.app/_next/image?url=%2Fimages%2Fblog%2Fitem13.png&w=3840&q=75",
  },
  {
    date: "04/2024",
    title: "Looking Ahead",
    description:
      "We remain dedicated to pushing boundaries, delivering unmatched IT Solution, and continuing to be a partner in the success of our clients.",
    image:
      "https://bytewave-next.vercel.app/_next/image?url=%2Fimages%2Fblog%2Fitem12.png&w=3840&q=75",
  },
];

export default function Blime() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* {horizontal line } */}
<div className="absolute left-1/2 top-32 bottom-32 w-px bg-gray-300 -translate-x-1/2 hidden md:block"></div>


        <h2 className="text-5xl  font-semibold text-center mb-4">
          Our Journey Through Time
        </h2>
        <p className="text-center text-xl text-gray-500 mb-12">
          Tracing the Path of Our Legacy and Growth
        </p>

        <div className="space-y-16 relative ">
          {timeline.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center  md:gap-10 relative ${
                index % 2 === 0 ? "" : "md:flex-row-reverse"
              }`}
            >
              {/* Text */}
              <div className="flex-1 text-center md:text-left">
                <p className="text-xl text-gray-400">{item.date}</p>
                <h3 className="text-3xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xl">{item.description}</p>
              </div>

              {/* Image */}
              <div className="flex-1 mt-6 md:mt-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-2xl shadow-md"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-3xl font-semibold text-gray-900">
            Thank you for being a part of our history, and we look forward to a
            future
          </h3>
          <h3 className="text-3xl font-semibold text-gray-900 mb-4">
            filled with shared successes and continued excellence.
          </h3>
        </div>
      </div>
    </section>
  );
}
