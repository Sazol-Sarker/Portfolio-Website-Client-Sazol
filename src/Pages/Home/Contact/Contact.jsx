import axios from "axios";
import { useForm } from "react-hook-form";
import { PiTelegramLogoLight } from "react-icons/pi";
import Swal from "sweetalert2";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log("form data=>", data);

    // store in DB:
    axios.post("http://localhost:5000/contactMsg", data).then((res) => {
      console.log("contactMsg DB response=>", res.data);
      if (res.data?.insertedId) {
        Swal.fire({
          title: "Thanks for contacting",
          icon: "success",
          draggable: false,
          timer: 1500,
        });

        // reset form
        reset();
      }
    });
  };
  return (
    <div
      id="contact"
      className="w-full mx-auto text-white bg-slate-700/50 mt-20 py-5 px-2"
    >
      <div className=" flex flex-col justify-center items-center ">
        <h2 className="text-2xl md:text-3xl font-bold">Get In Touch</h2>
        <div className="w-6/7 mt-5 text-md md:text-lg text-slate-200 ml-5 ">
          I'm open to new opportunities right now. Feel free to reach
          out—whether you have a question or just want to say hello.
        </div>
        <div className="w-6/7 ml-4  text-md md:text-lg text-slate-200 flex items-center justify-center mt-2">
          I'll do my best to respond!
        </div>
      </div>
      {/* contact form */}
      <div className="w-full mx-auto mt-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" w-full max-w-xl mx-auto"
        >
          {/* my email */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-white text-[15px] md:text-lg">
              My Email
            </legend>
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
              <legend className="fieldset-legend text-white text-[15px] md:text-lg">
                Your Name*
              </legend>
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
              <legend className="fieldset-legend text-white text-[15px] md:text-lg">
                Your Email*
              </legend>
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
            <legend className="fieldset-legend text-white text-[15px] md:text-lg">
              Your Message*
            </legend>
            <textarea
              className="textarea h-24 w-full bg-[#09090B]"
              placeholder="Let's talk..."
              {...register("msg")}
              required
            ></textarea>
          </fieldset>

          <button className="btn my-5 w-full rounded-2xl">
            Send Message{" "}
            <PiTelegramLogoLight className="text-2xl text-green-600" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
