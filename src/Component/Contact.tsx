function Contact() {
  return (
    <div className="lgl:px-8  px-5 py-6 mt-10 w-full">
      <h2 className="text-3xl font-bold py-2 averia-serif-libre-bold font-serif  ">
        Contact Me
      </h2>
      <hr className="lgl:w-[8%] w-[10%] border-[1.4px] mb-6   border-green-500  " />

      <div className="flex-col flex space-y-3 ">
        <div className="w-full flex-col items-center  space-y-3 lgl:space-y-0 lgl:flex-row flex lgl:space-x-2  ">
          <input
            type="text"
            className="border p-3 text-base poppins-regular  outline-none w-full lgl:w-[50%]"
            placeholder="Your Name"
          />
          <input
            type="text"
            className="border  p-3 text-base poppins-regular outline-none w-full lgl:w-[50%]"
            placeholder="Your Email"
          />
        </div>

        <input
          type="text"
          className="border outline-none p-3 text-base poppins-regular"
          placeholder="Subject"
        />
        <textarea
          name=""
          className="border outline-none p-4"
          rows={6}
          id=""
        ></textarea>
      </div>

      <button className="w-[50%] lgl:w-[20%] hover:bg-green-600 duration-100 bg-green-500 text-base poppins-regular text-white border py-3 mt-4">
        Send Message
      </button>
    </div>
  );
}

export default Contact;
