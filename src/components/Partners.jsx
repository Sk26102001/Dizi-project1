// export default function Partners() {
//   return (
//     <section className="py-8 border-b">
//         <h1 className="text-center text-2xl font-semibold">Trusted by specialists all around the world</h1>
//       <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-10 opacity-70 mt-8 ">
//         <img src="https://bytewave-next.vercel.app/_next/image?url=%2Fimages%2Fbrand%2F4.png&w=3840&q=75" alt="partner" className="h-8" />
//         <img src="https://bytewave-next.vercel.app/_next/image?url=%2Fimages%2Fbrand%2F5.png&w=3840&q=75" alt="partner" className="h-8" />
//         <img src="https://bytewave-next.vercel.app/_next/image?url=%2Fimages%2Fbrand%2F2.png&w=3840&q=75" alt="partner" className="h-8" />
//         <img src="https://bytewave-next.vercel.app/_next/image?url=%2Fimages%2Fbrand%2F6.png&w=3840&q=75" alt="partner" className="h-8" />
//         <img src="https://bytewave-next.vercel.app/_next/image?url=%2Fimages%2Fbrand%2F3.png&w=3840&q=75" alt="partner" className="h-8" />
//         <img src="https://bytewave-next.vercel.app/_next/image?url=%2Fimages%2Fbrand%2F1.png&w=3840&q=75" alt="partner" className="h-8 " />
//       </div>
//     </section>
//   );
// }


// export default function Partners() {
//   return (
//     <section className="py-8 border-b overflow-hidden">
//       <h1 className="text-center text-2xl font-semibold">
//         Trusted by specialists all around the world
//       </h1>

//       <div className="mt-8 relative w-full overflow-hidden">
//         <div className="flex gap-15 animate-slide">
//           <img
//             src="https://bytewave-next.vercel.app/_next/image?url=%2Fimages%2Fbrand%2F4.png&w=3840&q=75"
//             alt="partner"
//             className="h-12"
//           />
//           <img
//             src="https://bytewave-next.vercel.app/_next/image?url=%2Fimages%2Fbrand%2F5.png&w=3840&q=75"
//             alt="partner"
//             className="h-12"
//           />
//           <img
//             src="https://bytewave-next.vercel.app/_next/image?url=%2Fimages%2Fbrand%2F2.png&w=3840&q=75"
//             alt="partner"
//             className="h-12"
//           />
//           <img
//             src="https://bytewave-next.vercel.app/_next/image?url=%2Fimages%2Fbrand%2F6.png&w=3840&q=75"
//             alt="partner"
//             className="h-12"
//           />
//           <img
//             src="https://bytewave-next.vercel.app/_next/image?url=%2Fimages%2Fbrand%2F3.png&w=3840&q=75"
//             alt="partner"
//             className="h-12"
//           />
//           <img
//             src="https://bytewave-next.vercel.app/_next/image?url=%2Fimages%2Fbrand%2F1.png&w=3840&q=75"
//             alt="partner"
//             className="h-12"
//           />
//           {/* Duplicate images for smooth looping */}
//           <img
//             src="https://bytewave-next.vercel.app/_next/image?url=%2Fimages%2Fbrand%2F4.png&w=3840&q=75"
//             alt="partner"
//             className="h-12"
//           />
//           <img
//             src="https://bytewave-next.vercel.app/_next/image?url=%2Fimages%2Fbrand%2F5.png&w=3840&q=75"
//             alt="partner"
//             className="h-12"
//           />
//         </div>
//       </div>

//       {/* Inline CSS for sliding animation */}
//       <style>{`
//         @keyframes slide {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         .animate-slide {
//           display: flex;
//           animation: slide 20s linear infinite;
//         }
//       `}</style>
//     </section>
//   );
// }



export default function Partners() {
  return (
    <section className="py-8 overflow-hidden">
      <h1 className="text-center text-3xl font-semibold">
        Trusted by specialists all around the world
      </h1>

      <div className="mt-10 relative w-full overflow-hidden">
        <div className="flex gap-15 animate-slide">
          <img
            src="https://bytewave-next.vercel.app/_next/image?url=%2Fimages%2Fbrand%2F4.png&w=3840&q=75"
            alt="partner"
            className="h-12"
          />
          <img
            src="https://bytewave-next.vercel.app/_next/image?url=%2Fimages%2Fbrand%2F5.png&w=3840&q=75"
            alt="partner"
            className="h-12"
          />
          <img
            src="https://bytewave-next.vercel.app/_next/image?url=%2Fimages%2Fbrand%2F2.png&w=3840&q=75"
            alt="partner"
            className="h-12"
          />
          <img
            src="https://bytewave-next.vercel.app/_next/image?url=%2Fimages%2Fbrand%2F6.png&w=3840&q=75"
            alt="partner"
            className="h-12"
          />
          <img
            src="https://bytewave-next.vercel.app/_next/image?url=%2Fimages%2Fbrand%2F3.png&w=3840&q=75"
            alt="partner"
            className="h-12"
          />
          <img
            src="https://bytewave-next.vercel.app/_next/image?url=%2Fimages%2Fbrand%2F1.png&w=3840&q=75"
            alt="partner"
            className="h-12"
          />
          {/* Duplicate images for smooth looping */}
          <img
            src="https://bytewave-next.vercel.app/_next/image?url=%2Fimages%2Fbrand%2F4.png&w=3840&q=75"
            alt="partner"
            className="h-12"
          />
          <img
            src="https://bytewave-next.vercel.app/_next/image?url=%2Fimages%2Fbrand%2F5.png&w=3840&q=75"
            alt="partner"
            className="h-12"
          />
        </div>

        {/* Short gray line */}
        <div className="my-10 mt-15">
          <div className="border-t border-gray-300 w-320 mx-auto"></div>
        </div>
      </div>

      {/* Inline CSS for sliding animation */}
      <style>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-slide {
          display: flex;
          animation: slide 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
