import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div id="contact" className="w-full mx-auto text-white bg-slate-700/50 mt-20 py-5 px-2">
     
      <div className=" flex flex-col justify-center items-center">
        <h2 className="text-2xl md:text-3xl font-bold">Get In Touch</h2>
        <div className="w-6/7 mt-5 text-md md:text-lg text-slate-200">
          I'm currently open for new opportunities. Whether you have a question
          or just want to say hi, I'll try my best to get back to you!
        </div>
      </div>
      {/* contact form */}
      <div className="w-full mx-auto mt-5">
        <form onSubmit={handleSubmit(onSubmit)} className=" w-full max-w-xl mx-auto">
          {/* my email */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-white text-lg">My Email</legend>
            <input
              type="email"
              className="input bg-[#09090B] w-full"
              value={"sazolsarker1@gmail.com"}
              {...register("myEmail")}
              required
            />
            {/* <p className="label">Optional</p> */}
          </fieldset>

          <div className="flex flex-col md:flex-row gap-2 w-full mt-3">
            {/* name */}
            <fieldset className="fieldset flex-1">
              <legend className="fieldset-legend text-white text-lg">Your Name*</legend>
              <input
                type="text"
                className="input bg-[#09090B]"
                placeholder="Type here"
                {...register("name")}
                required
              />
              {/* <p className="label">Optional</p> */}
            </fieldset>

            {/* email */}
            <fieldset className="fieldset flex-1">
              <legend className="fieldset-legend text-white text-lg">Your Email*</legend>
              <input
                type="email"
                className="input bg-[#09090B] "
                placeholder="Type here"
                {...register("email")}
                required
              />
              {/* <p className="label">Optional</p> */}
            </fieldset>
          </div>

          {/* text message */}
          <fieldset className="fieldset mt-3">
            <legend className="fieldset-legend text-white text-lg">Your Message*</legend>
            <textarea
              className="textarea h-24 w-full bg-[#09090B]"
              placeholder="Let's talk..."
              {...register("msg")}
              required
            ></textarea>
          </fieldset>

          <button className="btn my-5 w-full rounded-2xl">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
