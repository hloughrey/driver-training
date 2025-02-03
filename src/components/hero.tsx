import Image from "next/image";
import Link from "next/link";

type HeroProps = {
  title: string;
  subTitle?: string;
  media: {
    alt: string;
    image: string;
  };
  phoneNumber: number;
};

export function SectionHero({
  title,
  subTitle,
  media,
  phoneNumber,
}: HeroProps) {
  return (
    <section className="flex w-full h-96 lg:h-[70vh]">
      <div className="relative object-cover w-full">
        <Image
          alt={media?.alt}
          src={media?.image}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>

      <div className="w-full flex justify-center items-center absolute">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-[5rem] py-32 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-200 lg:text-xl sm:px-16 lg:px-48">
            {subTitle}
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <Link
              href={`tel:${phoneNumber}`}
              className="md:w-[12rem] inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:ring-rose-300 dark:focus:ring-rose-900"
            >
              <svg
                className="max-w-[1.5rem] mr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <path
                  fill="#FFFFFF"
                  d="M16 0C.449 0 0 5.387 0 6.001v6C0 13.103.897 14 2 14h6c1.103 0 2-.897 2-1.999V8h12v4.001c0 1.102.897 1.999 2 1.999h6c1.103 0 2-.897 2-1.999v-6C32 5.387 31.551 0 16 0zm14 12-6 .001V7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v5l-6 .001-.001-5.957C2.002 6.004 2.536 2 16 2c13.458 0 13.997 4.001 14 4.001V12zM27 28c0 1.103-.897 2-2 2H7c-1.103 0-2-.897-2-2V16H3v12c0 2.206 1.794 4 4 4h18c2.206 0 4-1.794 4-4V16h-2v12z"
                />
                <path
                  fill="#FFFFFF"
                  d="M23 21c0-3.86-3.14-7-7-7s-7 3.14-7 7 3.14 7 7 7 7-3.14 7-7zm-12 0c0-2.757 2.243-5 5-5s5 2.243 5 5-2.243 5-5 5-5-2.243-5-5z"
                />
                <circle fill="#FFFFFF" cx="16" cy="21" r="2" />
              </svg>
              Call us now
            </Link>
            <Link
              href="/faqs"
              aria-label="Link to our Frequently Asked Questions page"
              className="md:w-[12rem] inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
            >
              Learn more
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
