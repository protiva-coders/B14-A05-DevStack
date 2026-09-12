import { use, useState } from "react";
import type { Itechnology } from "../../types/TechnologyType";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";
import { toast } from "react-toastify";

interface TechnologyProps {
  technologiesPromise: Promise<Itechnology[]>;
}

const Technology = ({ technologiesPromise }: TechnologyProps) => {
  const technologies = use(technologiesPromise);

  const [stack, setStack] = useState<Itechnology[]>([]);

  const handleAddToStack = (technology: Itechnology) => {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
     toast.warning("This technology is already in your stack!");
      return;
    }

    setStack([...stack, technology]);
    toast.success(`${technology.name} added to your stack!`);
  };

  const handleRemove = (id: string) => {
    setStack(stack.filter((item) => item.id !== id));
    toast.success("Technology removed from your stack!");
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.success("All technologies removed from your stack!");
  };

  return (
    <section className="bg-gray-50 py-12">
      <div className="mx-auto max-w-6xl px-6">

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Explore Technologies
          </h2>

          <p className="mt-2 text-gray-500">
            Choose the right technologies for your development stack.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6">

          <div className="col-span-2 grid grid-cols-3 gap-6">
            {technologies.map((technology) => {
              const isAdded = stack.some(
                (item) => item.id === technology.id
              );

              return (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  isAdded={isAdded}
                  onAdd={handleAddToStack}
                />
              );
            })}
          </div>

          <YourStack
            stack={stack}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
          />

        </div>
      </div>
    </section>
  );
};

export default Technology;