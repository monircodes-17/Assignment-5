import type { Technology } from "../types/technology";

interface Props {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const StackSidebar = ({
  stack,
  onRemove,
  onRemoveAll,
}: Props) => {
  return (
    <aside className="mx-auto h-fit w-full max-w-xl rounded-xl border border-gray-200 bg-white p-6 shadow-sm lg:sticky lg:top-24 lg:mx-0 lg:max-w-none">
      <h2 className="text-center text-xl font-bold text-slate-900 md:text-left">
        Your Stack
      </h2>

      <p className="mt-1 text-center text-base text-slate-400 md:text-left">
        {stack.length} Technology Selected
      </p>

      {stack.length === 0 ? (
        <div className="mt-6 rounded-lg border border-dashed border-gray-300 p-10 text-center text-base text-slate-400">
          Your stack is empty.
        </div>
      ) : (
        <div className="mt-6 space-y-4">
          {stack.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center justify-between rounded-lg border border-gray-200 p-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="h-10 w-10 object-contain"
                />

                <div>
                  <h3 className="text-base font-semibold text-slate-800">
                    {technology.name}
                  </h3>

                  <p className="text-sm text-slate-400">
                    {technology.category}
                  </p>
                </div>
              </div>

              <button
                onClick={() => onRemove(technology.id)}
                className="text-xl text-slate-400 transition hover:text-red-500"
              >
                ×
              </button>
            </div>
          ))}

          <button
            onClick={onRemoveAll}
            className="w-full rounded-md border border-red-300 py-2.5 text-base font-semibold text-red-500 transition hover:bg-red-50"
          >
            Remove All
          </button>
        </div>
      )}
    </aside>
  );
};

export default StackSidebar;