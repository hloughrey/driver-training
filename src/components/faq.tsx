import { useState } from "react";
import { Markdown } from "./markdown";
import { Section } from "./section";
import Link from "next/link";

type TestimonialType = {
  quote: string;
  name: string;
  location: string;
};

type FAQItemType = {
  faq: string;
};

type FAQCategoryType = {
  category: string;
  items: FAQItemType[];
};

type FAQProps = {
  faqs: FAQCategoryType[];
  testimonials?: TestimonialType[];
};

// Accordion component for individual FAQ items
function AccordionItem({ faq, index }: { faq: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const itemId = `faq-item-${index}`;
  const headingId = `faq-heading-${index}`;

  return (
    <div className="border-b border-gray-200">
      <h3>
        <button
          className="flex justify-between w-full py-4 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls={itemId}
          id={headingId}
        >
          <span className="text-lg font-medium text-gray-900">
            {/* Extract the heading from the markdown */}
            {faq.split("\n")[0].replace(/^### /, "")}
          </span>
          <span className="ml-6 flex-shrink-0">
            <svg
              className={`w-6 h-6 transform ${isOpen ? "rotate-180" : ""}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </button>
      </h3>
      <div
        id={itemId}
        aria-labelledby={headingId}
        className={`transition-all duration-200 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen pb-4" : "max-h-0"
        }`}
        role="region"
      >
        <Markdown>{faq}</Markdown>
      </div>
    </div>
  );
}

// Testimonial component
function Testimonials({ testimonials }: { testimonials: TestimonialType[] }) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg mt-12">
      <h2 className="text-2xl font-bold text-center mb-8">
        What Our Students Say
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
          >
            <div className="flex items-center mb-4">
              <svg
                className="h-5 w-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                className="h-5 w-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                className="h-5 w-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                className="h-5 w-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                className="h-5 w-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <p className="text-gray-700 italic mb-4">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div className="text-sm text-gray-600">
              <span className="font-medium">{testimonial.name}</span> -{" "}
              {testimonial.location}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Call to action component
function CallToAction() {
  return (
    <div className="bg-blue-600 text-white p-8 rounded-lg mt-12 text-center">
      <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
      <p className="mb-6">
        Book your C1 driver training today and take the first step towards
        expanding your driving qualifications.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link
          href="/contact"
          className="inline-block px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 focus:outline-none"
        >
          Contact Us
        </Link>
        <a
          href="tel:+447700900000"
          className="inline-block px-6 py-3 bg-transparent border border-white text-white font-medium rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none"
        >
          Call Now
        </a>
      </div>
    </div>
  );
}

export function FAQS({ faqs, testimonials }: FAQProps) {
  return (
    <Section data-cy="node-faq">
      <div className="container px-6 mx-auto md:w-4/5 xl:w-3/4">
        {/* Introduction text */}
        <div className="mb-8">
          <p className="text-lg text-gray-700">
            Find answers to the most common questions about C1 driver training
            and testing. If you can&apos;t find what you&apos;re looking for,
            please{" "}
            <Link
              href="/contact"
              className="text-blue-600 hover:underline font-medium"
            >
              contact us
            </Link>{" "}
            and we&apos;ll be happy to help.
          </p>
        </div>

        {/* FAQ Categories */}
        {faqs && (
          <div className="space-y-12">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-8">
                <h2
                  className="text-2xl font-bold mb-6 text-gray-900"
                  id={`category-${categoryIndex}`}
                >
                  {category.category}
                </h2>
                <div
                  className="space-y-4"
                  aria-labelledby={`category-${categoryIndex}`}
                >
                  {category.items.map((item, itemIndex) => (
                    <AccordionItem
                      key={`${categoryIndex}-${itemIndex}`}
                      faq={item.faq}
                      index={categoryIndex * 100 + itemIndex}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Testimonials Section */}
        {testimonials && testimonials.length > 0 && (
          <Testimonials testimonials={testimonials} />
        )}

        {/* Call to Action */}
        <CallToAction />
      </div>
    </Section>
  );
}
