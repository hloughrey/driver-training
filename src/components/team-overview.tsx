import { Section } from "./section";

type TeamOverviewProps = {
  title?: string;
  description?: string;
};

export function TeamOverview({ title, description }: TeamOverviewProps) {
  return (
    <Section>
      <div className="container px-6 mx-auto mb-12">
        <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
          <h2 className="text-2xl font-bold mb-4 text-center">
            {title || "Our Expert Training Team"}
          </h2>
          <p className="text-gray-700 text-center mb-6">
            {description ||
              "Our instructors bring over 55 years of combined emergency services driving experience to your C1 training. As former ambulance and emergency response drivers, they understand the unique challenges faced by paramedics."}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-4 rounded shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">40+</div>
              <div className="text-gray-600">Paramedics Trained Monthly</div>
            </div>

            <div className="bg-white p-4 rounded shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">94%</div>
              <div className="text-gray-600">First-Time Pass Rate</div>
            </div>

            <div className="bg-white p-4 rounded shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">55+</div>
              <div className="text-gray-600">Years Combined Experience</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
