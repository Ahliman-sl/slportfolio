import { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function EmailSend() {
  const form = useRef();
  const [isSucsess, setIsSucsess] = useState(false);
  const [isError, setIsError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_41fka7z", "template_fs7w17a", form.current, {
        publicKey: "cMOJNAf15-6wHCLrO",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setIsSucsess(true);
          setTimeout(() => {
            setIsSucsess(false);
          }, 7000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsError(true);
          setTimeout(() => {
            setIsError(false);
          }, 7000);
        }
      );
  };

  return (
    <div className="w-full h-max">
      {isSucsess ? (
        <Success />
      ) : isError ? (
        <Reject />
      ) : (
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-center justify-center gap-5 pb-5 mx-4 font-meriendo "
        >
          <input
            required
            type="text"
            name="from_name"
            placeholder="Your Name"
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 w-full"
          />
          <input
            required
            type="email"
            name="email_id"
            placeholder="Your Email"
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 w-full"
          />
          <textarea
            required
            name="message"
            placeholder="Subject"
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 w-full h-24 resize-none"
          />
          <input
            type="submit"
            value="Send"
            className="cursor-pointer w-full h-10 mt-3 rounded-md bg-blue-500 text-white font-semibold text-md hover:bg-blue-700 transition duration-300"
          />
        </form>
      )}
    </div>
  );
}

function Success() {
  return (
    <div
      className="w-full px-4 py-3 text-sm border rounded border-emerald-100 bg-emerald-50 text-emerald-500"
      role="alert"
    >
      <p>You message send sucsessfully,I back to you as soon as possible..</p>
    </div>
  );
}

function Reject() {
  return (
    <div
      className="w-full px-4 py-3 text-sm text-pink-500 border border-pink-100 rounded bg-pink-50"
      role="alert"
    >
      <p>Danger! Look behind you</p>
    </div>
  );
}
