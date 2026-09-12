import type { Itechnology } from "../../types/TechnologyType";
interface YourStackProps {
  stack: Itechnology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}
const YourStack = ({ stack, onRemove, onRemoveAll }: YourStackProps) => {
  return (
    <aside className="h-fit rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      {" "}
      {/* Stack Header */}{" "}
      <div className="flex items-center justify-between">
        {" "}
        <h2 className="text-xl font-bold text-gray-900"> Your Stack </h2>{" "}
        <span className="rounded-full bg-violet-50 px-3 py-1 text-sm font-semibold text-violet-600">
          {" "}
          {stack.length}{" "}
        </span>{" "}
      </div>{" "}
      {/* Empty State */}{" "}
      {stack.length === 0 ? (
        <div className="flex min-h-48 flex-col items-center justify-center text-center">
          {" "}
          <div className="text-4xl">📦</div>{" "}
          <h3 className="mt-3 font-semibold text-gray-700">
            {" "}
            Your stack is empty{" "}
          </h3>{" "}
          <p className="mt-1 text-sm text-gray-400">
            {" "}
            Add technologies to build your stack.{" "}
          </p>{" "}
        </div>
      ) : (
        <>
          {" "}
          {/* Selected Technologies */}{" "}
          <div className="mt-5 space-y-3">
            {" "}
            {stack.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center gap-3 rounded-xl border border-gray-100 p-3"
              >
                {" "}
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="h-9 w-9 object-contain"
                />{" "}
                <div className="flex-1">
                  {" "}
                  <h4 className="text-sm font-semibold text-gray-800">
                    {" "}
                    {technology.name}{" "}
                  </h4>{" "}
                  <p className="text-xs text-gray-400">
                    {" "}
                    {technology.category}{" "}
                  </p>{" "}
                </div>{" "}
                {/* Remove */}{" "}
                <button
                  onClick={() => onRemove(technology.id)}
                  className="text-lg font-bold text-gray-400 hover:text-red-500"
                >
                  {" "}
                  ✕{" "}
                </button>{" "}
              </div>
            ))}{" "}
          </div>{" "}
          {/* Remove All */}{" "}
          <button
            onClick={onRemoveAll}
            className="mt-5 w-full rounded-full border border-red-200 px-4 py-2.5 text-sm font-semibold text-red-500 hover:bg-red-50"
          >
            {" "}
            Remove All{" "}
          </button>{" "}
        </>
      )}{" "}
    </aside>
  );
};
export default YourStack;
