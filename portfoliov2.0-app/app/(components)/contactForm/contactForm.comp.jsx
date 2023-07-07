import { montFont } from "@/app/fonts";

export default function ContactForm() {
  return (
    <div className="m-20">
      <p className="text-yellow text-3xl">
        03. <span className="text-white text-3xl">Contact Form</span>
      </p>
      <div className="flex  flex-col items-center justify-center py-20">
        <p
          className={`${montFont.className} text-white text-6xl font-bold py-2`}
        >
          Get In Touch!
        </p>
        <p className="text-grey text-2xl py-4 indent max-w-2xl">
          I am currently looking to make my break into tech and find my place in
          the industry. I am also working on expanding my network and meeting
          more like minded people. If you have any questions or would just like
          to say hi, feel free to send me a message!
        </p>
        <form
          target="_blank"
          action="https://formsubmit.co/45e1dbe943177426372966c2f8438520"
          method="POST"
          className="w-full max-w-2xl" // Set maximum width to limit the form width
        >
          {/* Honeypot */}
          <input type="text" name="_honey" style={{ display: "none" }} />

          {/* Disable Captcha */}
          <input type="hidden" name="_captcha" value="false" />

          <div className="flex flex-col">
            <div className="mb-4">
              <label className="text-yellow text-2xl">Name:</label>
              <input
                type="text"
                name="Name&nbsp;/&nbsp;Alias"
                className="w-full border rounded py-2 px-3 text-grey-darker"
                placeholder="Full Name / Buisness Name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="text-yellow text-2xl">Email:</label>
              <input
                type="email"
                name="Email"
                className="w-full border rounded py-2 px-3 text-grey-darker"
                placeholder="Email Address"
                required
              />
            </div>
            <div className="mb-4">
              <label className="text-yellow text-2xl">Phone Number:</label>
              <input
                type="tel"
                name="Phone&nbsp;Number"
                className="w-full border rounded py-2 px-3 text-grey-darker"
                placeholder="Phone Number (optional)"
              />
            </div>
            <div className="mb-4">
              <label className="text-yellow text-2xl">Message:</label>
              <textarea
                placeholder="Your Message"
                className="w-full border rounded py-2 px-3 text-grey-darker"
                name="Message"
                rows="10"
                required
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="text-yellow border-yellow-400 p-2 border-4 rounded-lg hover:bg-yellow-700 w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
