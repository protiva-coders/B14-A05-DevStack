import type { Itechnology } from "../../types/TechnologyType";

interface TechnologyCardProps {
  technology: Itechnology;
  isAdded: boolean;
  onAdd: (technology: Itechnology) => void;
}

const TechnologyCard = ({
  technology,
  isAdded,
  onAdd,
}: TechnologyCardProps) => {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

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

      {/* Category + Difficulty + Rating */}
      <div className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-5">

        {/* Category + Difficulty */}
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-medium text-violet-600">
            {technology.category}
          </span>

          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
            {technology.difficulty}
          </span>
        </div>

        {/* Rating */}
        <div className="flex shrink-0 items-center gap-1">
          <span className="text-yellow-500">★</span>

          <span className="text-sm font-semibold text-gray-700">
            {technology.rating}
          </span>
        </div>
      </div>

      {/* Button */}
      <button
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`mt-4 w-full rounded-xl px-5 py-3 text-sm font-semibold text-white ${
          isAdded
            ? "cursor-not-allowed bg-gray-400"
           : "gradient-primary"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>

    </div>
  );
};

export default TechnologyCard;