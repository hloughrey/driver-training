import type { Handler } from "@netlify/functions";
import fetch from "node-fetch";

const handler: Handler = async function (event) {
  if (event.body === null) {
    return {
      statusCode: 400,
      body: JSON.stringify("Payload required"),
    };
  }

  const requestBody = JSON.parse(event.body) as {
    name: string;
    email: string;
    phoneNo: string;
    message: string;
  };

  try {
    await fetch(`${process.env.URL}/.netlify/functions/emails/message`, {
      headers: {
        "netlify-emails-secret": process.env.NETLIFY_EMAILS_SECRET as string,
      },
      method: "POST",
      body: JSON.stringify({
        from: "info@latitude55.dev",
        to: process.env.CONTACT_US_FORM_EMAIL_RECIPENT,
        subject: "Website Contact Us Message",
        parameters: {
          name: requestBody.name,
          email: requestBody.email,
          phoneNo: requestBody.phoneNo,
          message: requestBody.message,
        },
      }),
    });
    return {
      statusCode: 200,
      body: JSON.stringify("New contact form email sent!"),
    };
  } catch (error) {
    console.log(JSON.stringify(error));
    return {
      statusCode: 400,
      body: JSON.stringify("Payload required"),
    };
  }
};

export { handler };
