import type { Technology } from "../types/technology";

interface Props {
  technology: Technology;
  selected: boolean;
  onAdd: (technology: Technology) => void;
}

const TechnologyCard = ({
  technology,
  selected,
  onAdd,
}: Props) => {
  return (
    <article
      className={`rounded-xl border bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg ${
        selected
          ? "border-emerald-500 ring-1 ring-emerald-200"
          : "border-gray-200 hover:border-cyan-400"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-11 w-11 object-contain"
          onError={(event: React.SyntheticEvent<HTMLImageElement>) => {
            event.currentTarget.src =
              "https://cdn.simpleicons.org/codepen/64748B";
          }}
        />

        <span className="rounded-full bg-pink-50 px-2.5 py-1.5 text-xs font-semibold text-pink-500">
          {technology.badge}
        </span>
      </div>

      <h3 className="mt-5 text-center text-lg font-bold text-slate-900 md:text-left">
        {technology.name}
      </h3>

      <p className="mt-2 min-h-20 text-center text-sm leading-6 text-slate-500 md:text-left">
        {technology.description}
      </p>

      <div className="mt-5 flex items-center justify-between gap-3 text-xs text-slate-500">
        <span className="rounded bg-gray-100 px-2.5 py-1.5">
          {technology.category}
        </span>

        <span>{technology.difficulty}</span>

        <span className="font-semibold text-orange-500">
          ★ {technology.rating}
        </span>
      </div>

      <button
        disabled={selected}
        onClick={() => onAdd(technology)}
        className={`mt-5 w-full rounded-md px-4 py-2.5 text-sm font-semibold transition ${
          selected
            ? "cursor-not-allowed bg-emerald-100 text-emerald-700"
            : "bg-slate-900 text-white hover:bg-cyan-500"
        }`}
      >
        {selected ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </article>
  );
};

export default TechnologyCard;