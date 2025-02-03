import { useCallback, useEffect, useReducer, useState } from "react";
import { Section } from "./section";
import { SectionHeader } from "./header";

const INITIAL_STATE: TInitialState = {
  name: undefined,
  email: undefined,
  phoneNo: undefined,
  phoneNoIsValid: undefined,
  message: undefined,
  status: undefined,
};

export type TInitialState = {
  name: string | undefined;
  email: string | undefined;
  phoneNo: string | undefined;
  phoneNoIsValid: boolean | undefined;
  message?: string;
  status: string | undefined;
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
      .filter((i) => !["status"].includes(i))
      .every((i) => state[i]);
  }, [state]);

  useEffect(() => {
    if (!state.status) {
      setIsDisabledSubmitButtonDisabled(!shouldDisableSubmitButton());
    }
  }, [state, shouldDisableSubmitButton]);

  useEffect(() => {
    const timer1 = setTimeout(resetForm, 30 * 1000);
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
      }),
    });

    setStatus(status === 200 ? "SUCCESS" : "ERROR");
    setShowStatusMessage(true);
  }

  return (
    <Section>
      <SectionHeader heading={title} text={subTitle} />
      <div className="container px-6 mx-auto md:w-3/5 xl:w-2/5">
        <form className="pt-20" method="post" onSubmit={handleSubmit}>
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
              />
            </div>
            {state.phoneNoIsValid === false && (
              <span id="phone-help-text" className="text-red-600">
                Please input a valid phone number.
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
              />
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
              ></textarea>
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
          >
            Submit
          </button>
        </form>
        {state.status === "ERROR" && showStatusMessage && (
          <div className="mt-10 text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg sm:text-md text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
            <p className="text-white font-medium">
              We&apos;re really sorry about this, but it looks like there was an
              error. Please try again or message us using traditional email at
              EMAIL.COM
            </p>
          </div>
        )}
        {state.status === "SUCCESS" && showStatusMessage && (
          <div className="mt-10 text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg sm:text-md text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            <p className="text-white font-medium">
              We appreciate your message and we&apos;ll get back to you shortly.
            </p>
          </div>
        )}
      </div>
    </Section>
  );
}
