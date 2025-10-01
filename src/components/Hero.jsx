export default function Hero() {
  return (
    <section className="pt-28 bg-gradient-to-b from-blue-100 via-white to-white        text-center pb-12">
      <h1 className="text-6xl font-semibold mb-2">About Us</h1>
      <p className="text-gray-600 text-xl mt-5">Discover our story, our mission, and our passion for creativity and innovation.</p>

      {/* <div className="max-w-7xl mx-auto mt-14  bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="flex flex-col md:flex-row ">
          <div className="p-6 flex flex-col justify-center text-left ml-13">
            <button className=" bg-blue-100 text-blue-700">REVENEW GROWTH</button>
            <h2 className="text-5xl font-medium mt-2">Transforming A Small Retailer With E–Commerce Integration</h2>
            <p className="text-gray-500 text-xl mt-4">it is a long established fact that a reader will be distracted by the readable content of</p>
          </div>
          <img src="https://bytewave-next.vercel.app/_next/image?url=%2Fimages%2Fblog%2Fitem4.png&w=3840&q=75" alt="case" className="md:w-1/2 object-cover " />
        </div>
      </div> */}

      <div className="max-w-7xl mx-auto mt-14 bg-white rounded-2xl shadow-md overflow-hidden">
  <div className="flex flex-col md:flex-row items-center">
    {/* LEFT CONTENT */}
    <div className="p-6 flex flex-col justify-center text-left space-y-4 md:w-1/2">
      <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-md font-semibold w-max">
        REVENUE GROWTH
      </button>
      <h2 className="text-5xl font-medium mt-2">
        Transforming A Small Retailer With E–Commerce Integration
      </h2>
      <p className="text-gray-500 text-xl">
        It is a long established fact that a reader will be distracted by the readable content of
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <div className="md:w-1/2">
      <img
        src="https://bytewave-next.vercel.app/_next/image?url=%2Fimages%2Fblog%2Fitem4.png&w=3840&q=75"
        alt="case"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>

    </section>
  );
}
