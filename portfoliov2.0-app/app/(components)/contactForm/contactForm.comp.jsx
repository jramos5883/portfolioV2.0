export default function ContactForm() {
  return (
    <div className="m-20">
      <p className="text-yellow text-3xl">
        03. <span className="text-white text-3xl">Contact Form</span>
      </p>
      <div className="flex justify-center items-center">
        <form
          target="_blank"
          action="https://formsubmit.co/jrprodev@gmail.com"
          method="POST"
        >
          {/* Honeypot */}
          <input type="text" name="_honey" style={{ display: "none" }} />

          {/* Disable Captcha */}
          <input type="hidden" name="_captcha" value="false" />

          <div className="form-group">
            <div className="form-row">
              <div className="col">
                <input
                  type="text"
                  name="Name&nbsp;/&nbsp;Alias"
                  className="form-control"
                  placeholder="Full Name / Buisness Name"
                  required
                />
              </div>
              <div className="col">
                <input
                  type="email"
                  name="Email"
                  className="form-control"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="col">
                <input
                  type="tel"
                  name="Phone&nbsp;Number"
                  className="form-control"
                  placeholder="Phone Number (optional)"
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <textarea
              placeholder="Your Message"
              className="form-control"
              name="Message"
              rows="10"
              required
            ></textarea>
          </div>
          <button type="submit" className="">
            Submit Form
          </button>
        </form>
      </div>
    </div>
  );
}
