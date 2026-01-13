import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("mkoowrqn");

  if (state.succeeded) {
    return (
      <p className="text-center text-lg font-medium text-amber-600">
        Thanks, your message has been sent.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto space-y-6"
    >
      {/* Full Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          className="w-full px-4 py-1 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="w-full px-4 py-1 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          name="subject"
          placeholder="Booking, collaboration, general inquiry"
          className="w-full px-4 py-1 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
        />
        <ValidationError prefix="Subject" field="subject" errors={state.errors} />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
          Phone Number (optional)
        </label>
        <input
          id="phone"
          type="tel"
          name="phone"
          className="w-full px-4 py-1 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
        />
        <ValidationError prefix="Phone" field="phone" errors={state.errors} />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          required
          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={state.submitting}
        className="
          w-full py-3 rounded-full
          bg-amber-500 text-white font-medium
          hover:bg-amber-400 transition-colors
          disabled:opacity-50
        "
      >
        {state.submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

export default ContactForm;
