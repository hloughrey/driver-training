import { useCallback, useEffect, useReducer, useState } from "react";
import { Section } from "./section";
import { SectionHeader } from "./header";
import Link from "next/link";

const INITIAL_STATE: TInitialState = {
  name: undefined,
  email: undefined,
  phoneNo: undefined,
  phoneNoIsValid: undefined,
  message: undefined,
  status: undefined,
  preferredContact: "any",
};

export type TInitialState = {
  name: string | undefined;
  email: string | undefined;
  phoneNo: string | undefined;
  phoneNoIsValid: boolean | undefined;
  message?: string;
  status: string | undefined;
  preferredContact: string;
};

export type TAction = {
  type: string;
  field?: string;
  value?: string;
};

function reducer(state: TInitialState, action: TAction): TInitialState {
  switch (action.type) {
    case "updateFieldValue":
      if (action.field) {
        let newState = { ...state, [action.field]: action.value };
        if (action.field === "phoneNo") {
          const phoneNoIsValid = validatePhoneNumber(action.value);
          newState = { ...newState, ["phoneNoIsValid"]: phoneNoIsValid };
        }
        return newState;
      }
    case "updateStatus":
      return { ...state, status: action.value };
    case "reset":
    default:
      return INITIAL_STATE;
  }
}

function validatePhoneNumber(phoneNo): boolean {
  const mobileRegEx = /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/;
  const landlineRegEx = /\s*\(?(0[1-6]{1}[0-9]{3}\)?[0-9]{6})\s*/;

  if (mobileRegEx.test(phoneNo) || landlineRegEx.test(phoneNo)) {
    return true;
  }

  return false;
}

export function ContactForm({ title, subTitle }) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const [isDisabledSubmitButtonDisabled, setIsDisabledSubmitButtonDisabled] =
    useState(true);
  const [showStatusMessage, setShowStatusMessage] = useState(false);

  function setStatus(status?: string): void {
    dispatch({ type: "updateStatus", value: status });
  }

  function updateFieldValue(field: string) {
    return function (event: any) {
      dispatch({
        type: "updateFieldValue",
        field,
        value: event.target.value,
      });
    };
  }

  function resetForm() {
    dispatch({
      type: "reset",
    });
  }

  const shouldDisableSubmitButton = useCallback(() => {
    return Object.keys(state)
      .filter((i) => !["status", "preferredContact"].includes(i))
      .every((i) => state[i]);
  }, [state]);

  useEffect(() => {
    if (!state.status) {
      setIsDisabledSubmitButtonDisabled(!shouldDisableSubmitButton());
    }
  }, [state, shouldDisableSubmitButton]);

  // Increased form reset timer from 30 seconds to 5 minutes for better accessibility
  useEffect(() => {
    const timer1 = setTimeout(resetForm, 5 * 60 * 1000);
    return () => clearTimeout(timer1);
  });

  async function handleSubmit(event: any) {
    event.preventDefault();
    setIsDisabledSubmitButtonDisabled(true);

    const { status } = await fetch(`./.netlify/functions/contactFormEmail`, {
      method: "POST",
      body: JSON.stringify({
        name: state.name,
        email: state.email,
        phoneNo: state.phoneNo,
        message: state.message,
        preferredContact: state.preferredContact,
      }),
    });

    setStatus(status === 200 ? "SUCCESS" : "ERROR");
    setShowStatusMessage(true);
  }

  return (
    <Section>
      <SectionHeader heading={title} text={subTitle} />

      {/* Contact information section */}
      <div className="container px-6 mx-auto md:w-3/5 xl:w-2/5 mb-10">
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Get in touch
          </h3>
          <div className="space-y-3">
            <div className="flex items-center">
              <svg
                className="w-5 h-5 text-blue-600 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              <Link
                href="tel:07843 847524"
                className="text-blue-600 hover:underline"
                aria-label="Call us at 07843 847524"
              >
                07843 847524
              </Link>
            </div>
            <div className="flex items-center">
              <svg
                className="w-5 h-5 text-blue-600 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <Link
                href="mailto:info@c1drivertrainingnorthwest.com"
                className="text-blue-600 hover:underline"
                aria-label="Email us at info@c1drivertrainingnorthwest.com"
              >
                info@c1drivertrainingnorthwest.com
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Why contact us section */}
      <div className="container px-6 mx-auto md:w-3/5 xl:w-2/5 mb-10">
        <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-100">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Why contact us?
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Expert C1 driver training from qualified instructors</li>
            <li>Personalized training plans to suit your schedule</li>
            <li>Competitive pricing with no hidden fees</li>
            <li>High pass rates and excellent student feedback</li>
            <li>Quick responses to all inquiries within 24 hours</li>
          </ul>
        </div>
      </div>

      <div className="container px-6 mx-auto md:w-3/5 xl:w-2/5">
        <form
          className="pt-10"
          method="post"
          onSubmit={handleSubmit}
          aria-labelledby="contact-form-heading"
        >
          <h2 id="contact-form-heading" className="sr-only">
            Contact Form
          </h2>
          <div className="grid gap-6">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                value={state.name || ""}
                onChange={updateFieldValue("name")}
                aria-required="true"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Phone number
              </label>
              <input
                type="tel"
                id="phone"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                value={state.phoneNo || ""}
                onChange={updateFieldValue("phoneNo")}
                aria-required="true"
                aria-describedby="phone-help-text"
                placeholder="UK format (e.g., 07123 456789)"
              />
              <span
                id="phone-format-help"
                className="text-xs text-gray-500 mt-1 block"
              >
                UK mobile (07xxx xxx xxx) or landline (01xxx xxxxxx)
              </span>
            </div>
            {state.phoneNoIsValid === false && (
              <span id="phone-help-text" className="text-red-600" role="alert">
                Please input a valid UK phone number (e.g., 07123 456789 or
                01234 567890).
              </span>
            )}

            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                value={state.email || ""}
                onChange={updateFieldValue("email")}
                aria-required="true"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="preferredContact"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Preferred contact method
              </label>
              <select
                id="preferredContact"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={state.preferredContact}
                onChange={updateFieldValue("preferredContact")}
              >
                <option value="any">No preference</option>
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="text">Text message</option>
              </select>
            </div>

            <div className="">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Message
              </label>
              <textarea
                id="message"
                name="messageText"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={state.message || ""}
                onChange={updateFieldValue("message")}
                rows={5}
                placeholder="Tell us about your training needs or any questions you have"
                aria-describedby="message-help"
              ></textarea>
              <span
                id="message-help"
                className="text-xs text-gray-500 mt-1 block"
              >
                Include details about your training requirements or any specific
                questions
              </span>
            </div>
          </div>
          <button
            type="submit"
            className={`mt-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${
              isDisabledSubmitButtonDisabled
                ? "cursor-not-allowed opacity-50"
                : ""
            }`}
            disabled={isDisabledSubmitButtonDisabled}
            aria-disabled={isDisabledSubmitButtonDisabled}
          >
            Submit Inquiry
          </button>
        </form>
        {state.status === "ERROR" && showStatusMessage && (
          <div
            className="mt-10 text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg sm:text-md text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            role="alert"
            aria-live="assertive"
          >
            <p className="text-white font-medium">
              We&apos;re really sorry about this, but it looks like there was an
              error. Please try again or message us using traditional email at{" "}
              <a
                href="mailto:info@c1drivertrainingnorthwest.com"
                className="underline"
              >
                info@c1drivertrainingnorthwest.com
              </a>
            </p>
          </div>
        )}
        {state.status === "SUCCESS" && showStatusMessage && (
          <div
            className="mt-10 text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg sm:text-md text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            role="alert"
            aria-live="assertive"
          >
            <p className="text-white font-medium">
              Thank you for your message! We&apos;ll get back to you within 24
              hours. If you need immediate assistance, please call us at{" "}
              <a href="tel:07843 847524" className="underline">
                07843 847524
              </a>
              .
            </p>
          </div>
        )}
      </div>

      {/* Testimonial section */}
      <div className="container px-6 mx-auto md:w-3/5 xl:w-2/5 mt-16">
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            What our students say
          </h3>
          <blockquote className="italic text-gray-700 border-l-4 border-blue-500 pl-4">
            The training I received was excellent. The instructor was patient,
            knowledgeable, and made the whole process much less stressful than I
            expected. I passed my C1 test first time!
            <footer className="text-gray-600 mt-2 not-italic">
              — Sarah T., Manchester
            </footer>
          </blockquote>
        </div>
      </div>
    </Section>
  );
}
