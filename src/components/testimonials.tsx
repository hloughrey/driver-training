import { Section } from "./section";

type TestimonialsProps = {
  title?: string;
};

export function Testimonials({ title }: TestimonialsProps) {
  return (
    <Section backgroundMuted={true}>
      <div className="container px-6 mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">
          {title || "What Our Students Say"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow relative">
            <div className="text-5xl text-blue-200 absolute top-4 left-4">
              &ldquo;
            </div>
            <p className="text-gray-700 relative z-10 pl-6">
              Jayne&rsquo;s experience as an ambulance driver was invaluable.
              She understood exactly what skills I needed as a paramedic and
              focused our training accordingly.
            </p>
            <div className="mt-4 pl-6">
              <p className="font-medium">Sarah T.</p>
              <p className="text-sm text-gray-500">
                Trainee Paramedic, Manchester
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow relative">
            <div className="text-5xl text-blue-200 absolute top-4 left-4">
              &ldquo;
            </div>
            <p className="text-gray-700 relative z-10 pl-6">
              Neil&rsquo;s technical expertise made the difference in my C1
              test. His tips for handling larger vehicles were exactly what I
              needed to pass first time.
            </p>
            <div className="mt-4 pl-6">
              <p className="font-medium">James K.</p>
              <p className="text-sm text-gray-500">
                Paramedic, Liverpool NHS Trust
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
