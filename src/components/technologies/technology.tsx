import { use, useState } from "react";
import type { Itechnology } from "../../types/TechnologyType";

interface TechnologyProps {
  technologiesPromise: Promise<Itechnology[]>;
}

const Technology = ({ technologiesPromise }: TechnologyProps) => {
  const technologies = use(technologiesPromise);

  const [stack, setStack] = useState<Itechnology[]>([]);

  const handleAddToStack = (technology: Itechnology) => {
    setStack([...stack, technology]);
  };

  return (
    <section className="bg-gray-50 py-12">
      <div className="mx-auto max-w-6xl px-6">

        {/* Section Heading */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Explore Technologies
          </h2>

          <p className="mt-2 text-gray-500">
            Choose the right technologies for your development stack.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-3 gap-6">

          {/* Technology Cards */}
          <div className="col-span-2 grid grid-cols-2 gap-6">
            {technologies.map((technology) => (
              <div
                key={technology.id}
                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
              >

                {/* Icon + Badge */}
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gray-50">
                    <img
                      src={technology.icon}
                      alt={technology.name}
                      className="h-10 w-10 object-contain"
                    />
                  </div>

                  <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600">
                    {technology.badge}
                  </span>
                </div>

                {/* Name */}
                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  {technology.name}
                </h3>

                {/* Description */}
                <p className="mt-2 min-h-12 text-sm leading-6 text-gray-500">
                  {technology.description}
                </p>

                {/* Category + Difficulty */}
                <div className="mt-4 flex gap-2">
                  <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-medium text-violet-600">
                    {technology.category}
                  </span>

                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                    {technology.difficulty}
                  </span>
                </div>

                {/* Rating + Button */}
                <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">★</span>

                    <span className="text-sm font-semibold text-gray-700">
                      {technology.rating}
                    </span>
                  </div>

                  <button
                    onClick={() => handleAddToStack(technology)}
                    className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white"
                  >
                    Add to Stack
                  </button>
                </div>

              </div>
            ))}
          </div>

          {/* Your Stack */}
          <aside className="h-fit rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

            {/* Stack Header */}
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">
                Your Stack
              </h2>

              <span className="rounded-full bg-violet-50 px-3 py-1 text-sm font-semibold text-violet-600">
                {stack.length}
              </span>
            </div>

            {/* Empty State */}
            {stack.length === 0 ? (
              <div className="flex min-h-48 flex-col items-center justify-center text-center">
                <div className="text-4xl">📦</div>

                <h3 className="mt-3 font-semibold text-gray-700">
                  Your stack is empty
                </h3>

                <p className="mt-1 text-sm text-gray-400">
                  Add technologies to build your stack.
                </p>
              </div>
            ) : (
              /* Selected Technologies */
              <div className="mt-5 space-y-3">
                {stack.map((technology) => (
                  <div
                    key={technology.id}
                    className="flex items-center gap-3 rounded-xl border border-gray-100 p-3"
                  >
                    <img
                      src={technology.icon}
                      alt={technology.name}
                      className="h-9 w-9 object-contain"
                    />

                    <div>
                      <h4 className="text-sm font-semibold text-gray-800">
                        {technology.name}
                      </h4>

                      <p className="text-xs text-gray-400">
                        {technology.category}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </aside>

        </div>
      </div>
    </section>
  );
};

export default Technology;