const Contact = () => {
  return (
    <div className="my-16">
      <h1 className="px-5 md:px-22 lg:px-60 text-3xl font-medium mb-9">
        CONTACT US
      </h1>
      <div className="px-5 md:px-22 lg:px-60">
        <div className="flex flex-col gap-y-6 md:flex-row justify-between items-center md:gap-x-10">
          <div>
            <p className="text-2xl font-medium mb-4">Store in London</p>
            <p className="my-3">
              1418 River Drive, Suite 35 Cottonhall, CA 9622 United Kingdom
            </p>
            <p>
              sale@uomo.com <br /> +44 20 7123 4567
            </p>
          </div>
          <div>
            <p className="text-2xl font-medium mb-4">Store in Istanbul</p>
            <p className="my-3">
              1418 River Drive, Suite 35 Cottonhall, CA 9622 United Kingdom
            </p>
            <p>
              sale@uomo.com <br /> +44 20 7123 4567
            </p>
          </div>
        </div>
        <form className="mt-20">
          <h1 className="text-2xl font-medium">Get In Touch</h1>
          <div className="mt-10">
            <input
              type="text"
              name=""
              className="w-full text-xl py-3 px-3 border-2 focus:outline-none border-gray-300 placeholder:italic"
              placeholder="Name *"
              id=""
            />
          </div>
          <div className="mt-5 md:mt-10">
            <input
              type="email"
              name=""
              className="w-full text-xl py-3 px-3 border-2 focus:outline-none border-gray-300 placeholder:italic"
              placeholder="Email address *"
              id=""
            />
          </div>
          <div className="mt-5 md:mt-10">
            <textarea
              name=""
              id=""
              className="w-full border-2 border-gray-300 focus:outline-none py-3 px-3 placeholder:italic text-xl"
              placeholder="Your Message"
              rows="8"
            ></textarea>
          </div>
          <button
            data-aos="fade-up"
            className="text-xl md:mt-4 font-medium bg-slate-700 hover:bg-slate-800 duration-200 cursor-pointer text-white px-8 py-3"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
